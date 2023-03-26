import express from "express";
import { createNewClient, findUser } from "../models/client/ClientModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email });
    if (user?._id) {
      const isPassMatch = comparePassword(password, user.password);
      if (isPassMatch) {
        user.password = undefined;
        user.__v = undefined;
        res.json({
          status: "success",
          message: "login successfull",
          user,
        });
        return;
      }
    }
    res.json({
      status: "error",
      message: "Invalid login details",
    });
  } catch (error) {
    next(error);
  }
});
router.post("/register", async (req, res, next) => {
  req.body.password = hashPassword(req.body.password);

  try {
    const result = await createNewClient(req.body);
    if (result?._id) {
      res.json({
        status: "success",
        message: "User has been registered SuccessFully",
      });
      return;
    }
    res.json({
      status: "error",
      message: "unable to register the user",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message = "Account with that email already exists";
      error.errorCode = 200;
    }
    next(error);
  }
});

export default router;

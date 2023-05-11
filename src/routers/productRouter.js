import express from "express";
import clientPromise from "../config/dbConfing.js";
import mongoose from "mongoose";
const router = express.Router();
let db;
let client;
let products;
async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    products = await db.collection("products");
    db && console.log("Mongo db connected!");
  } catch (error) {
    throw new Error("Failed to connect to db");
  }
}

router.get("/:_id?", async (req, res, nex) => {
  await init();
  try {
    const { _id } = req.params;
    const ObjectId = mongoose.Types.ObjectId;
    const catId = new ObjectId(_id);
    console.log(catId, "params");
    const prods = await products
      .find({ parentCat: catId, status: "active" })
      .toArray();

    res.json({
      status: "success",
      message: "Scuccessful",
      prods,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/", async (req, res, next) => {
  await init();
  try {
    const prods = await products.find({}).toArray();
    res.json({
      status: "success",
      message: "get all product list ",
      prods,
    });
  } catch (error) {
    next(error);
  }
});

export default router;

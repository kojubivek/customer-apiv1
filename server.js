import dotenv from "dotenv";
dotenv.config();
import express from "express";

import morgan from "morgan";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 6000;

//dbconnection
import { dbConnect } from "./src/config/dbConfing.js";
dbConnect();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//api references
import clinetRouter from "./src/routers/clientRouter.js";
app.use("/api/v1/client", clinetRouter);
//root api
app.use("/", (req, res, next) => {
  const error = {
    message: "sorry worng path! permisson denined",
  };
  next(error);
});
//global error handling
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.errorCode || 404;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

//app.listen to the port
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost/:${PORT}`);
});

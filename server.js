import dotenv from "dotenv";
dotenv.config();
import express from "express";

import morgan from "morgan";
import cors from "cors";
const app = express();
//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 8001;

//dbconnection
import { dbConnect } from "./src/config/dbConfing.js";
await dbConnect();

//api references
import clinetRouter from "./src/routers/clientRouter.js";
import categoryRouter from "./src/routers/categoryRouter.js";
import productRouter from "./src/routers/productRouter.js";
app.use("/api/v1/client", clinetRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
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

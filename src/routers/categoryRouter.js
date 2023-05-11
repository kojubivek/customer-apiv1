import express from "express";
import clientPromise from "../config/dbConfing.js";

const router = express.Router();
let db;
let client;
let category;
async function init() {
  if (db) return;
  try {
    client = await clientPromise;

    db = await client.db();

    category = await db.collection("categories");
    db && console.log("Mongo db connected!");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to db");
  }
}
router.post("/", async (req, res, next) => {
  await init();
  try {
    const data = await req.body;

    const cat = await category.find(data).toArray();

    res.json({
      status: "success",
      message: "get all category list ",
      cat,
    });
  } catch (error) {
    next(error);
  }
});

export default router;

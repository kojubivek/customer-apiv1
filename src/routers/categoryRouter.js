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
router.get("/", async (req, res, next) => {
  await init();
  try {
    const cat = await category.find({}).toArray();
    res.json({
      status: "success",
      message: "get all category list ",
      cat,
    });
  } catch (error) {
    next(error);
  }
});
// router.get("/:_id?", async (req, res, nex)=>{
//     try {
//         const{_id}= req.params;
//         const prods = await products.find({parentCat: _id}).toArray()
//         const products = _id? await product.find(f)
//     } catch (error) {
//     }
// })
export default router;

import mongoose from "mongoose";
import { MongoClient } from "mongodb";

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect(process.env.MONGO_CLIENT);
    return con ? console.log("connected DB") : console.log("cannot connect db");
  } catch (error) {
    console.log(error);
  }
};

let client;
let clientPromise;

const options = {};

const uri = "mongodb://localhost:27017/aug_a_ecom";
if (!uri) {
  throw new Error("Please add mongo uri to .env file.");
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
export default clientPromise;

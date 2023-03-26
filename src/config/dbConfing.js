import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect(process.env.MONGO_CLIENT);
    con?.connections
      ? console.log("database connnected")
      : console.log("error in connecting to the DB");
  } catch (error) {
    console.log(error);
  }
};

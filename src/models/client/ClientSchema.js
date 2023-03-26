import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    addresss: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Client_user", clientSchema);

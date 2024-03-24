import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "please enter your name"] },
    username: {
      type: String,
      required: [true, "please enter your username"],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
    phone: {
      type: String,
      required: [true, "please enter your phone number"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

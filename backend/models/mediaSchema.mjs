import mongoose from "mongoose";

const mediaSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestameps: true }
);

export default mongoose.model("UserProfilePic", mediaSchema);

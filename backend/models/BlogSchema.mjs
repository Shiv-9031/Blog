import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  picture: [
    {
      type: String,
      required: true,
    },
  ],
  text: {
    heading: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
  comments: [
    {
      commentUserId: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],

  likes: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("blog", blogSchema);

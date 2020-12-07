import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: String,

  createAt: {
    type: Number,
    default: Date.now,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;

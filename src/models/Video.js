import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "This FileUrl Required",
  },

  title: {
    type: String,
    required: "This Title Required",
  },

  description: String,

  views: {
    type: Number,
    default: 0,
  },

  uploadAt: {
    type: Date,
    default: Date.new,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);

export default model;

import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "This name required",
  },
  lastName: {
    type: String,
    required: "This name required",
  },
  email: {
    type: String,
    required: "This email required",
  },
  avatarUrl: String,
  githubId: Number,
  kakaoId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;

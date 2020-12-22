import express from "express";
import routes from "../routes";
import {
  getChangePassword,
  getUserEdit,
  postChangePassword,
  postUserEdit,
  userProfile,
} from "../controllers/userController";
import { uploadAvatar } from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.userProfile, userProfile);

userRouter.get(routes.userEdit(), getUserEdit);
userRouter.post(routes.userEdit(), uploadAvatar, postUserEdit);

userRouter.get(routes.changePassword, getChangePassword);
userRouter.post(routes.changePassword, postChangePassword);

export default userRouter;

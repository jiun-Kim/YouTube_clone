import express from "express";
import routes from "../routes";
import {
  getUpload,
  getVideoEdit,
  postUpload,
  postVideoEdit,
  videoDelete,
  videoDetail,
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

videoRouter.get(routes.videoDelete(), videoDelete);

export default videoRouter;

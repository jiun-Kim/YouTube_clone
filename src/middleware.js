import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  res.locals.siteName = "YouTube";
  next();
};

const multerVideo = multer({ dest: "data/videos" });

export const uploadVideo = multerVideo.single("videoFile");

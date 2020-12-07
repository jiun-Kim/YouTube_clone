import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { videos });
  } catch (error) {
    console.log(error);
  }
};

export const getUpload = (req, res) => {
  res.render("upload");
  console.log(req.user);
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  try {
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description,
      creator: req.user,
    });
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { video });
  } catch (error) {
    console.log(error);
  }
};

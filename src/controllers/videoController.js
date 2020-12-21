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

export const search = async (req, res) => {
  const {
    query: { search: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
    res.render("search", { videos, searchingBy });
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

export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoEdit", { video });
  } catch (error) {
    console.log(error);
  }
};

export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
  }
};

export const videoDelete = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndDelete({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
};

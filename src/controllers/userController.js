import routes from "../routes";
import User from "../models/User";
import Video from "../models/Video";
import passport from "passport";

export const getJoin = (req, res) => res.render("join");

export const postJoin = async (req, res, next) => {
  const {
    body: { firstName, lastName, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.redirect(routes.login);
  } else {
    try {
      const user = await User({ firstName, lastName, email });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.join,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userProfile = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("userProfile", { user: req.user, videos });
  } catch (error) {
    console.log(error);
  }
};

export const getUserEdit = (req, res) => {
  res.render("userEdit");
};

export const postUserEdit = async (req, res) => {
  const {
    user: { id },
  } = req;
  const {
    body: { firstName, lastName, email },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        email,
        avatarUrl: file ? file.path : req.user.avatarUrl,
      }
    );
    res.redirect(`/user${routes.userProfile}`);
  } catch (error) {
    console.log(error);
  }
};

export const getChangePassword = (req, res) => {
  res.render("changePassword");
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword2 },
  } = req;
  try {
    if (newPassword !== newPassword2) {
      res.status(400);
      res.redirect(`/user${routes.changePassword}`);
    } else {
      await req.user.changePassword(oldPassword, newPassword);
      res.redirect(`/user${routes.userProfile}`);
    }
  } catch (error) {
    console.log(error);
    res.redirect(`/user${routes.changePassword}`);
  }
};

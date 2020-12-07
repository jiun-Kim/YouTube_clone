import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => res.render("join");

export const postJoin = async (req, res, next) => {
  const {
    body: { firstName, lastName, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.redirect(routes.join);
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

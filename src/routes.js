// Global Routers

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";

// User Routers

const USER_PROFILE = "/user/profile";
const EDIT_PROFILE = "/user/:id/edit";
const CHANGE_PASSWORD = "/user/:id/changePassword";

// Video Routers

const VIDEO_DETAIL = "/video/:id/detail";
const EDIT_VIDEO_DETAIL = "/video/:id/edit";
const VIDEO_DELETE = "/video/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,

  userProfile: USER_PROFILE,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  videoDetail: VIDEO_DETAIL,
  editVideoDetail: EDIT_VIDEO_DETAIL,
  videoDelete: VIDEO_DELETE,
};

export default routes;

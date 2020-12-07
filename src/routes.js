// Global Routers

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User Routers

const USER_PROFILE = "/user/profile";
const EDIT_PROFILE = "/user/:id/edit";
const CHANGE_PASSWORD = "/user/:id/changePassword";

// Video Routers

const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id/detail";
const EDIT_VIDEO_DETAIL = "/video/:id/edit";
const VIDEO_DELETE = "/video/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,

  userProfile: USER_PROFILE,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  video: VIDEO,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/video/${id}/detail`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideoDetail: EDIT_VIDEO_DETAIL,
  videoDelete: VIDEO_DELETE,
};

export default routes;

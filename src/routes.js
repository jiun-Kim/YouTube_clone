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
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

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
  videoEdit: (id) => {
    if (id) {
      return `/video/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  videoDelete: (id) => {
    if (id) {
      return `/video/${id}/delete`;
    } else {
      return VIDEO_DELETE;
    }
  },
};

export default routes;

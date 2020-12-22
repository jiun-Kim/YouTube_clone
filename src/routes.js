// Global Routers

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User Routers

const USER = "/user";
const USER_PROFILE = "/profile";
const USER_EDIT = "/:id/edit";
const CHANGE_PASSWORD = "/changePassword";

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
  search: SEARCH,

  user: USER,
  userProfile: USER_PROFILE,
  userEdit: (id) => {
    if (id) {
      return `/user/${id}/edit`;
    } else {
      return USER_EDIT;
    }
  },
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

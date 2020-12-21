import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
  pug: {
    watch: "src/views/**/*.pug",
    src: "src/views/layouts/index.pug",
    dest: "src/static",
  },
  scss: {
    watch: "src/assets/scss/**/*.scss",
    src: "src/assets/scss/style.scss",
    dest: "src/static",
  },
  js: {
    watch: "src/assets/js/**/*.js",
    src: "src/assets/js/main.js",
    dest: "src/static",
  },
};

const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gpug({ client: true }))
    .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["src/static"]);

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
      })
    )
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.scss.watch, styles);
  gulp.watch(routes.js.watch, js);
};

const prepare = gulp.series([clean]);
const assets = gulp.series([pug, styles, js]);
const live = gulp.series(watch);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);

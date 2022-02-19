const gulp = require("gulp");
const tsc = require("gulp-typescript").createProject("tsconfig.json");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const gClean = require("gulp-clean");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const clip = require("gulp-clip-empty-files");
const ls = require("gulp-live-server");
const childProcess = require("child_process");

const cleanJS = async () => xgulp.src(`./dist/js/*`).pipe(gClean());

const cleanCSS = async () => gulp.src(`./dist/css/*`).pipe(gClean());

const clean = async () => gulp.parallel(cleanJS, cleanCSS);

const styles = () =>
  gulp
    .src(`src/scss/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.css"))
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));

const scripts = () =>
  gulp
    .src(`src/ts/**/*.ts`)
    .pipe(tsc())
    .pipe(clip())
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));

const watch = () => {
  gulp.watch(`src/ts/**/*.ts`, scripts);
  gulp.watch(`src/scss/**/*.scss`, styles);
  gulp.watch("static/**/*.*", (file) => {
    server.notify.apply(server, [file]);
  });
};

const server = () => {
  const server = ls.static(".", 8000);
  server.start();
  childProcess.exec("google-chrome-stable http://localhost:8000");
};

const dev = gulp.series(clean, gulp.parallel(styles, scripts), server);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.dev = dev;

exports.default = dev;

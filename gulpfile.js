const gulp = require('gulp');
const tsc = require('gulp-typescript').createProject('tsconfig.json');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const ls = require('gulp-live-server');

gulp.task('clean:js', () => {
  return gulp.src(`./dist/js/*`)
    .pipe(clean());
});

gulp.task('clean:css', () => {
  return gulp.src(`./dist/css/*`)
    .pipe(clean());
});

gulp.task('compile:ts', ['clean:js'], () => {
  return gulp.src(`src/ts/**/*.ts`)
    .pipe(tsc())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('compile:scss', ['clean:css'], () => {
  return gulp.src(`src/scss/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch:ts', ['compile:ts'], () => {
  return gulp.watch(`src/ts/**/*.ts`, ['compile:ts']);
});

gulp.task('watch:scss', ['compile:scss'], () => {
  return gulp.watch(`src/scss/**/*.scss`, ['compile:scss']);
});

gulp.task('live-server', () => {
  const server = ls.static('.', 8000);
  server.start();
  return gulp.watch(['static/**/*.*'], (file) => {
    server.notify.apply(server, [file]);
  });
});

gulp.task('dev', ['watch:scss', 'watch:ts', 'live-server']);

gulp.task('default', ['dev']);

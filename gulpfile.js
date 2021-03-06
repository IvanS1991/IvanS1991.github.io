const gulp = require('gulp');
const tsc = require('gulp-typescript').createProject('tsconfig.json');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const clip = require('gulp-clip-empty-files');
const ls = require('gulp-live-server');
const childProcess = require('child_process');

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
    .pipe(clip())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('compile:scss', ['clean:css'], () => {
  return gulp.src(`src/scss/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch:ts', ['compile:ts'], () => {
  return gulp.watch(`src/ts/**/*.ts`, ['compile:ts']);
});

gulp.task('watch:scss', ['compile:scss'], () => {
  return gulp.watch(`src/scss/**/*.scss`, ['compile:scss']);
});

gulp.task('dev', ['watch:scss', 'watch:ts'], () => {
  const server = ls.static('.', 8000);
  server.start();
  gulp.watch('static/**/*.*', (file) => {
    server.notify.apply(server, [file]);
  });
  childProcess.exec('google-chrome-stable http://localhost:8000');
});

gulp.task('default', ['dev']);

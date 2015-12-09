var gulp = require('gulp');


var plugins = {
  autoprefixer: require('gulp-autoprefixer'),
  babelify: require('babelify'),
  browserify: require('browserify'),
  cache: require('gulp-cache'),
  changed: require('gulp-changed'),
  del: require("del"),
  htmlReplace: require('gulp-html-replace'),
  htmlmin: require('gulp-htmlmin'),
  imagemin: require('gulp-imagemin'),
  jshint: require('gulp-jshint'),
  minifyCss: require('gulp-minify-css'),
  rename: require('gulp-rename'),
  sass: require('gulp-sass'),
  sourcemaps: require('gulp-sourcemaps'),
  streamify: require('gulp-streamify'),
  uglify: require('gulp-uglify'),
  vss: require('vinyl-source-stream'),
  watchify: require('watchify')
};

var path = {
  SOURCE: './app/',
  FONTS: './assets/fonts/',
  IMAGES: './assets/images/',
  STYLES: './assets/styles/',
  DIST: './public/'
};

var files = ["jsx", "sass", "helpers"];

function defineTasks() {
  // Pull in task definitions
  files.forEach(function(file) {
    require("./gulp-tasks/" + file)(gulp, plugins, path);
  });

  gulp.task('watch', [
    'watch-jsx',
    'watch-sass'
  ]);
  gulp.task('default', [
    'jsx',
    'sass',
    'fonts',
    'images'
  ]);
}

defineTasks();

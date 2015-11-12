module.exports = function(gulp, plugins, path) {
  var sassRegex = path.STYLES + '*.scss';

  function build() {
    gulp.src(sassRegex)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer())
      .pipe(plugins.sourcemaps.write())
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(path.DIST));
    console.log('[' + new Date().toLocaleTimeString('en-US', {
      hour12: false
    }) + '] Updated SCSS!');
  }

  function watch() {
    build();
    gulp.watch(sassRegex, build);
  }

  gulp.task("sass", build);
  gulp.task("watch-sass", watch);
};

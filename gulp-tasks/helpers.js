module.exports = function(gulp, plugins, path) {

  function clean() {
    plugins.del(path.DIST);
    plugins.cache.clearAll();
  }

  function fonts() {
    gulp.src(path.FONTS + "**/*.*")
      .pipe(gulp.dest(path.DIST + "/fonts"));
  }

  function images() {
    gulp.src(path.IMAGES + '*.*')
      .pipe(plugins.cache(plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      })))
      .pipe(gulp.dest(path.DIST + '/images'));
  }

  gulp.task('clean', clean);
  gulp.task('fonts', fonts);
  gulp.task('images', images);
};

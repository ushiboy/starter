var gulp = require('gulp')
, $ = require('gulp-load-plugins')()
, connect = require('connect')
, serveStatic = require('serve-static')
, connectLiveReload = require('connect-livereload');

gulp.task('serve', () => {
  var port = process.env.PORT || 3000;
  $.livereload.listen();
  connect()
  .use(connectLiveReload())
  .use(serveStatic(__dirname))
  .listen(port);
});

gulp.task('dev', ['serve'], () => {
  var reload = $.livereload.reload;
  gulp.watch('app/**/*.html', reload);
  gulp.watch('app/**/*.js', reload);
  gulp.watch('app/**/*.css', reload);
});

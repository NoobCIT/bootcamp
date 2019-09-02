const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function() {
  return gulp.src('public/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'))
});

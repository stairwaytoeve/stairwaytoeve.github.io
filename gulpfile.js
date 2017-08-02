var gulp = require('gulp'); 

var srcPath = './dev/public/**/*';
var buildPath = '.';


gulp.task('copy', function() {
  gulp.src(srcPath)
    .pipe(gulp.dest(buildPath));
});


gulp.task('default', ['copy']);
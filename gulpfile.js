var gulp = require('gulp'); 
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');


var src = {
	watch: "themes/default/static/css/**/*.scss",
	css: "themes/default/static/css/main.scss",
	js: "themes/default/static/js/**/*.js"
}

var dist = { 
	css: "public/css/",
	js: "public/assets/js/"
}


gulp.task('js', function() {
	gulp.src(src.js)
	.pipe(uglify())
	.pipe(gulp.dest(dist.js));
});

gulp.task('sass', function() {
	gulp.src(src.css)
	.pipe(sass())
	.pipe(minify({compatibility: 'ie8'}))
	.pipe(gulp.dest(dist.css));
})

gulp.task('watch', function() {
    gulp.watch(src.js, ['js']);
    gulp.watch(src.watch, ['sass']);
});

gulp.task('default', ['sass','js','watch']);
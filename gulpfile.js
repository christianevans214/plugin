var gulp = require('gulp');
var livereload = require('gulp-livereload');
var eslint = require('gulp-eslint');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require("babelify");
var sass = require('gulp-sass');
var runSeq = require("run-sequence");
var rename = require('gulp-rename');

// Development tasks
// ------------------------------------------------

gulp.task('reload', function() {
	livereload.reload();
});

gulp.task('reloadCSS', function() {
	return gulp.src('./public/stylesheets/style.css').pipe(livereload());
});

gulp.task('lintJS', function() {
	return gulp.src(['./pre-build/javascripts/**/*.js', './routes/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

var customOpts = {
  entries: ['./pre-build/javascripts/app.js'],
  debug: true
};
var opts = Object.assign({}, watchify.args, customOpts);
var bundler = watchify(browserify(opts));
bundler.transform(babelify);
gulp.task('browserify', bundle);
function bundle() {
	var b = bundler.bundle()
		.on('error', console.log)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./public/javascripts'))
	return b;
}

gulp.task('buildCSS', function() {
	return gulp.src('./pre-build/stylesheets/main.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./public/stylesheets'))
});

//COMPOSED TASKS

gulp.task('build', function(){
	runSeq(['buildCSS', 'browserify', 'lintJS']);
});

gulp.task('default', function() {
	livereload.listen();
	gulp.start('build');
	bundler.on('update', bundle);
	gulp.watch('./pre-build/stylesheets/*.scss', function() {
		runSeq('buildCSS', 'reloadCSS');
	});
})










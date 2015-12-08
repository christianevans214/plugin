var gulp = require('gulp');
var livereload = require('gulp-livereload');
var eslint = require('gulp-eslint');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var sass = require('gulp-sass');
var runSeq = require("run-sequence");
var rename = require('gulp-rename');
var reactify = require('reactify');
var path = require('path');
var es6ify = require("es6ify");
var chalk = require('chalk');

// Development tasks
// ------------------------------------------------

gulp.task('reload', function() {
	livereload.reload();
});

gulp.task('reloadCSS', function() {
	return gulp.src('./public/stylesheets/style.css').pipe(livereload());
});

gulp.task('lintJS', function() {
	return gulp.src(['./public/javascripts/**/*.js', './routes/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});


gulp.task('browserify', function() {
	var customOpts = {
		entries: ['./pre-build/javascripts/main.js'],
		debug: true,
		transform:[reactify, es6ify]
	};
	var opts = Object.assign({}, watchify.args, customOpts);
	var bundler = browserify(opts);
	var watcher = watchify(bundler);
	return watcher
		.on('update', function () {
			var updateStart = Date.now();
			console.log("Updating!");
			watcher.bundle()
				.on('error', function (err) {
				  console.log(chalk.red(err.toString()));
				  this.emit('end');
				})
				.pipe(source('bundle.js'))
				.pipe(buffer())
				.pipe(gulp.dest('./public/javascripts'))
			console.log("Updated!", (Date.now() - updateStart) + "ms");
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./public/javascripts'))
})

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
	gulp.watch('./pre-build/stylesheets/*.scss', function() {
		runSeq('buildCSS', 'reloadCSS');
	});
	gulp.watch(['./public/javascripts/**'], ['reload', 'lintJS']); 
	gulp.watch(['./views/base.html'],['reload']);
})










/**
 * gulp file made by Eska
 * 
 */

var gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	server 	= require('gulp-express'),
	concat 	= require('gulp-concat'),
	uglify 	= require('gulp-uglify'),
	cssmin 	= require('gulp-cssmin'),
	jade	= require('gulp-jade'),
	plumber	= require('gulp-plumber'),
	babel 	= require('gulp-babel'),
	gutil 	= require('gulp-util'),
	browserify	= require('browserify'),
	babelify	= require('babelify'),
	source 		= require('vinyl-source-stream');

/**
 * punlic destination goes here!
 * @type {String}
 */
var public = './public';

/**
 * production environment var if true, js and css will be minified
 * @type {Boolean}
 */
var production = !!gutil.env.production;

/**
 * serve for developement
 * @type {Boolean}
 */
var serve = false;

/**
 * paths for assets node, bower and server folders.
 * @type {Object}
 */
var paths = {
	'bower': './bower_components',
	'assets': './assets',
	'node': './node_modules',
	'server': './server'
};

/**
 * list of paths to build:
 *
 * jsvendor 	: here goes bower/node
 * js 			: here goes custom js
 * jsx 			: here goes jsx file paths
 * sassvendor	: here goes sass from vendor bower/node
 * sass 		: here goes custom sass file paths
 * jade 		: here goes your jade templates
 * @type {Object}
 */
var path = {
	'jsvendor' : [
		paths.bower + '/jquery/dist/jquery.js',
		paths.bower + '/foundation-sites/dist/foundation.js',
		paths.node + '/socket.io-client/socket.io.js',
		paths.bower + '/react/react.js',
		paths.bower + '/react/react-dom.js'
	],
	'js' : [
		paths.assets + '/scripts/**/*.js'
	],
	'jsx' : [
		paths.assets + '/scripts/app.jsx'
	],
	'sassvendor' : [
		paths.bower + '/foundation-sites/scss'
	],
	'sass' : [
		paths.assets + '/styles/**/*.scss'
	],
	'jade' : [
		paths.assets + '/templates/*.jade'
	]
};

/**
 * Compile ES2015 javascript
 *
gulp.task('react', function() {
	return gulp.src(path.jsx)
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(concat('reactapp.js'))
		.pipe(production ? uglify() : gutil.noop())
		.pipe(gulp.dest(public + '/js'))
		.pipe(serve ? server.notify() : gutil.noop());
}); */

gulp.task('react', function() {
	return browserify({entries: path.jsx, extensions: ['.jsx'], debug: true})
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(production ? uglify() : gutil.noop())
		.pipe(source('reactapp.js'))
		.pipe(gulp.dest(public + '/js'))
		.pipe(serve ? server.notify() : gutil.noop());
});

/**
 * build javascript from vendor
 */

gulp.task('js-vendor', function() {
	return gulp.src(path.jsvendor)
		.pipe(concat('vendor.js'))
		.pipe(production ? uglify() : gutil.noop())
		.pipe(gulp.dest(public + '/js'))
		.pipe(serve ? server.notify() : gutil.noop());
});

/**
 * build javascript
 */
gulp.task('js', function() {
	return gulp.src(path.js)
		.pipe(concat('app.js'))
		.pipe(production ? uglify() : gutil.noop())
		.pipe(gulp.dest(public + '/js'))
		.pipe(serve ? server.notify() : gutil.noop());
});

/**
 * Compile SASS
 */
gulp.task('sass', function() {
	return gulp.src(path.sass)
		.pipe(sass({
			includePaths: [
				path.sassvendor
			]
		}))
		//.pipe(concat('app.css'))
		.pipe(production ? cssmin() : gutil.noop())
		.pipe(gulp.dest(public + '/css'))
		.pipe(serve ? server.notify() : gutil.noop());
});

/**
 * Compile jade
 */
gulp.task('jade', function() {
	return gulp.src(path.jade)
		.pipe(jade())
		.pipe(gulp.dest(public));
});

gulp.task('default', ['sass', 'js-vendor', 'js', 'react', 'jade']);

/**
 * serve task
 */
gulp.task('serve', function() {
	serve = true;
	//start the server
	server.run(['server/app.js']);

	//if any server side scripts changes restart server.
	gulp.watch(paths.server + '/**/*.js', server.run);

	//watch scss, compile and notify browser
	gulp.watch(paths.assets + '/styles/**/*.scss', function(event) {
		gulp.run('sass');
		server.notify(event);
	});

	//watch js, compile and notify browser
	gulp.watch(paths.assets + '/scripts/**/*.js*', function(event) {
		gulp.run('js-vendor');
		gulp.run('js');
		gulp.run('react');
		server.notify(event);
	});


	//watch jade, compile and notify browser
	gulp.watch(paths.assets + '/templates/**/*.jade', function(event) {
		gulp.run('jade');
		server.notify(event);
	});
});

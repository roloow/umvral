'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify-es').default;
var gutil = require('gulp-util');
var del = require('del');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify JavaScript files
gulp.task('js_exp1', function() {
  return gulp.src('./assets/javascripts/exp1.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('./assets/javascripts/dist'))
});

// Gulp task to minify JavaScript files
gulp.task('js_exp2', function() {
  return gulp.src('./assets/javascripts/exp2_v2.js')
    // Minify the file
	  //.pipe(rename("exp2_v2.min.js"))
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./assets/javascripts/dist'))
});

// Gulp task to minify JavaScript files
gulp.task('js_exp3', function() {
  return gulp.src('./assets/javascripts/exp3.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./assets/javascripts/dist'))
});


gulp.task('clean', () => del(['assets/javascripts/dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'js_exp1',
    'js_exp2',
    'js_exp3'
  );
});

var gulp = require('gulp'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    ftp = require('gulp-ftp'),
    connect = require('gulp-connect');

gulp.task('default', [
  'build',
  'watch'
]);

gulp.task('build', [
  'build-views',
  'build-scripts',
  'build-styles',
  'build-images',
  'build-fonts',
  'build-misc'
]);

gulp.task('build-views', function() {
  return gulp.src('./client/views/**/*')
    .pipe(gulp.dest('./.tmp/public/views/'))
    .pipe(connect.reload());
});

gulp.task('build-scripts', [
  'build-scripts-vendor',
  'build-scripts-application'
]);

gulp.task('build-scripts-vendor', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.js',
      './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-cookies/angular-cookies.js',
      './bower_components/angular-messages/angular-messages.js',
      './bower_components/angular-resource/angular-resource.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-sanitize/angular-sanitize.js',
      './bower_components/angular-touch/angular-touch.js',
      './bower_components/angular-activerecord/src/angular-activerecord.js',
      './bower_components/lodash/lodash.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./.tmp/public/scripts'));
})

gulp.task('build-scripts-application', function() {
  return gulp.src('./client/scripts/**/*')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./.tmp/public/scripts'))
    .pipe(connect.reload());
});

gulp.task('build-styles', function() {
  return gulp.src('./client/styles/main.scss')
    .pipe(sass())
    .pipe(prefixer())
    .pipe(gulp.dest('./.tmp/public/styles/'))
    .pipe(connect.reload());
});

gulp.task('build-images', function() {
  return gulp.src('./client/images/**/*')
    .pipe(gulp.dest('./.tmp/public/images'))
    .pipe(connect.reload());
});

gulp.task('build-fonts', function() {
  return gulp.src('./bower_components/bootstrap-sass-official/assets/fonts/**/*')
    .pipe(gulp.dest('./.tmp/public/fonts/'))
    .pipe(connect.reload());
});

gulp.task('build-misc', function() {
  return gulp.src('./client/*.*')
    .pipe(gulp.dest('./.tmp/public'))
    .pipe(connect.reload());
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./client/views/**/*', ['build-views']);
  gulp.watch('./client/scripts/**/*', ['build-scripts']);
  gulp.watch('./client/styles/**/*', ['build-styles']);
  gulp.watch('./client/images/**/*', ['build-images']);
  gulp.watch('./client/*.*', ['build-misc']);
})

gulp.task('deploy', ['build'], function() {
  return gulp.src('./.tmp/public/**/*')
    .pipe(ftp({
      host: 'ftp.jstnjns.com',
      user: 'cloudlist@jstnjns.com',
      pass: 'ksWyVM3XBhMGi8'
    }))
    .pipe(util.noop());
});

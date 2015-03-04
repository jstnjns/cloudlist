var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');


gulp.task('build', [
  'build-views',
  'build-scripts',
  'build-styles',
  'build-images',
  'build-fonts',
  'build-misc'
]);

gulp.task('build-views', function() {
  return gulp.src('./app/views/**/*')
    .pipe(gulp.dest('./dist/views/'))
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
      './bower_components/angular-activerecord/src/angular-activerecord.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/scripts'));
})

gulp.task('build-scripts-application', function() {
  return gulp.src('./app/scripts/**/*')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(connect.reload());
});

gulp.task('build-styles', function() {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(connect.reload());
});

gulp.task('build-images', function() {
  return gulp.src('./app/images/**/*')
    .pipe(gulp.dest('./dist/images'))
    .pipe(connect.reload());
});

gulp.task('build-fonts', function() {
  return gulp.src('./bower_components/bootstrap-sass-official/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(connect.reload());
});

gulp.task('build-misc', function() {
  return gulp.src('./app/*.*')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('serve', ['build'], function() {
  connect.server({
    root: 'dist',
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./app/views/**/*', ['build-views']);
  gulp.watch('./app/scripts/**/*', ['build-scripts']);
  gulp.watch('./app/styles/**/*', ['build-styles']);
  gulp.watch('./app/images/**/*', ['build-images']);
  gulp.watch('./app/*.*', ['build-misc']);
})

gulp.task('default', [
  'build',
  'serve',
  'watch'
]);
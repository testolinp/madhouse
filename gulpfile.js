var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require("node-bourbon").includePaths,
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

var browserSync = require('browser-sync').create();

var paths = {
    scss: './scss/**/*.scss',
    js: './js/**/*.js',
    fonts: './fonts/**/*.{ttf,woff,eof,svg}'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
      .pipe(sass({
          includePaths: ['sass'].concat(bourbon)
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('copyfonts', function() {
   gulp.src(paths.fonts)
   .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass', 'copyfonts'], function() {
  livereload.listen();
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['js']);
});

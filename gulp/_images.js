'use strict'

import path from 'path'
import gulp from 'gulp'
import image from 'gulp-image'
import browserSync from 'browser-sync'
import * as conf from './_conf'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * Minify the image files and place them in dist.
 */
let buildImages = () => {
  let onError = function(error) {
    $.notify.onError({
      title: '<%= error.message %>',
      sound: 'Frog',
      icon: path.join(__dirname, 'help/error.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 3000,
      onLast: true
    })(error);

    this.emit('end');
  };
  return gulp.src(conf.paths.images.src)
    .pipe(image({
      jpegRecompress: false,
      svgo: false,
      concurrent: 10
    }))
    .pipe(gulp.dest(conf.paths.images.dist))
    .pipe($.notify({
      title: 'Images task completed',
      message: 'All images are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 1000,
      onLast: true
    }));
}

gulp.task('images', () => {
  return buildImages();
})

gulp.task('images-reload', () => {
  return buildImages()
    .pipe(browserSync.stream());
})

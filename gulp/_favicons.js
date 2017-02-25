'use strict'

import path from 'path'
import gulp from 'gulp'
import favicons from 'gulp-favicons'
import * as conf from './_conf'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * Generate the favicons files from the master favicon file.
 */
let buildFavicons = () => {
  let onError = function(error) {
    $.notify.onError({
      title: '<%= error.message %>',
      sound: 'Frog',
      icon: path.join(__dirname, 'help/error.png'),
      contentImage: path.join(__dirname, 'help/fav.png'),
      time: 3000,
      onLast: true
    })(error);

    this.emit('end');
  };
  return gulp.src(conf.paths.favicons.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    .pipe(favicons({
      appName: "",
      appDescription: "",
      developerName: "",
      developerURL: "",
      background: "",
      path: conf.paths.favicons.dest,
      url: "",
      display: "",
      orientation: "",
      start_url: "/?homescreen=1",
      version: 1.0,
      logging: false,
      online: false,
      html: false,
      pipeHTML: false,
      replace: true
      }))
    .pipe(gulp.dest(conf.paths.favicons.dist))
    .pipe($.notify({
      title: 'Favicons task completed',
      message: 'All favicons are created and saved.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/fav.png'),
      time: 1000,
      onLast: true
    }));
}

gulp.task('favicons', () => {
  return buildFavicons()
})

'use strict'

import path from 'path'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * Minify the image files and place them in dist.
 */
let buildTwigs = () => {
  return gulp.src(conf.paths.twigs.src)
    .pipe($.notify({
      title: 'Twigs task completed',
      message: 'All twig files are saved.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/twig.png'),
      time: 1000,
      onLast: true
    }));
}

gulp.task('twigs', () => {
  return buildTwigs();
})

gulp.task('twigs-reload', () => {
  return buildTwigs()
    .pipe(browserSync.stream());
})

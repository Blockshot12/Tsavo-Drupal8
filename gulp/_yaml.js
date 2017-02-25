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
let buildYaml = () => {
  return gulp.src(conf.paths.yaml.src)
    .pipe($.notify({
      title: 'Yaml task completed',
      message: 'All yaml files are saved.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/yaml.png'),
      time: 1000,
      onLast: true
    }));
}

gulp.task('yaml', () => {
  return buildYaml();
})

gulp.task('yaml-reload', () => {
  return buildYaml()
    .pipe(browserSync.stream());
})

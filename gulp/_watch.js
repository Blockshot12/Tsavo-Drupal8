'use strict'

import gulp from 'gulp'
import * as conf from './_conf'

gulp.task('watch', ['build'], () => {
  gulp.watch(conf.paths.styles.src, ['styles']);
  gulp.watch(conf.paths.scripts.src, ['scripts']);
  gulp.watch(conf.paths.images.src, ['images']);
  gulp.watch(conf.paths.twigs.src, ['twigs']);
  gulp.watch(conf.paths.yaml.src, ['yaml']);
});

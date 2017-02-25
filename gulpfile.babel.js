'use strict'

const fs = require('fs')
const gulp = require('gulp')

/**
 *  Load all gulp tasks.
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)
})

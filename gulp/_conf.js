'use strict'

export const dirs = {
  src: 'src',
  dist: 'dist'
}

export const paths = {
  local: `http://tsavo2.dd:8083/`,
  domain: `http://www.tsavo.eu`,
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dist: `${dirs.dist}/css`
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    file: `scripts`,
    dist: `${dirs.dist}/js`
  },
  images: {
    src: `${dirs.src}/img/**/*`,
    dist: `${dirs.dist}/img`
  },
  favicons: {
    src: `${dirs.src}/icon/favicon.png`,
    dist: `${dirs.dist}/icon`
  },
  twigs: {
    src: `templates/**/*`
  },
  yaml: {
    src: `./**/*.yml`
  }
}

import gulp from 'gulp'
// tasks imports
import {
  pug,
  scss,
  fonts,
  images,
  svg,
  clean,
  serve,
  watch,
  scriptsPages,
  scriptsVendor
} from './gulp/tasks/index.js'

const { series } = gulp


export const build = series(clean, pug, scss, fonts, images, svg, scriptsPages, scriptsVendor);
export const dev = series(
  clean,
  build,
  serve,
  watch
  )
  
export const cleanOutput = clean
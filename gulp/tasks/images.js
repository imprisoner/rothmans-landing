import gulp from 'gulp'
import imagemin, { mozjpeg, optipng, gifsicle } from 'gulp-imagemin'
import { GLOBS } from "../config.js"

const { src, dest } = gulp

export default function images(done) {
  src(GLOBS.IMAGES.SRC)
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 5 })
    ]))
    .pipe(dest(GLOBS.IMAGES.DEST))

  done()
}
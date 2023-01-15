import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import { GLOBS } from "../config.js"

const { src, dest } = gulp
const sass = gulpSass(dartSass)

export default function scss(done) {
  src(GLOBS.SCSS.SRC)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest(GLOBS.SCSS.DEST))

  done()
}
import gulpClean from 'gulp-clean'
import gulp from 'gulp'
import { GLOBS } from "../config.js"

const { src } = gulp

export default function clean() {
  return src(GLOBS.CLEAN, {read: false}).pipe(gulpClean())
}
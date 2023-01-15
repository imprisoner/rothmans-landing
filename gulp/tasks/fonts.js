import gulp from "gulp"
import { GLOBS } from "../config.js"

const { src, dest } = gulp

export default function fonts(done) {
  src(GLOBS.FONTS.SRC).pipe(dest(GLOBS.FONTS.DEST))

  done()
}
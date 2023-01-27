import gulp from 'gulp'
import pugCompiler from 'gulp-pug'
import { GLOBS } from "../config.js"

const { src, dest } = gulp

export default function pug(done) {
  src(GLOBS.PUG.SRC)
    .pipe(pugCompiler({
      verbose: true,
    }))
    .on('error', handleError)
    .pipe(dest(GLOBS.PUG.DEST))
  done()
}

function handleError(err) {
  console.log(err)
}
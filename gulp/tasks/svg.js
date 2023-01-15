import gulp from 'gulp'
import imagemin, { svgo } from 'gulp-imagemin'

const { src, dest } = gulp

export default function svg(done) {
  src('src/assets/svg/**/*')
    .pipe(imagemin([
      svgo()
    ]))
    .pipe(dest('dist/assets/svg'))

  done()
}
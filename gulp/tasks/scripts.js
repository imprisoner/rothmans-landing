import gulp from 'gulp'
import webpack from 'webpack-stream'
import webpackConfig from '../webpack.config.js'
import { GLOBS } from "../config.js"

const { src, dest } = gulp

export function scriptsPages(done) {
  src(GLOBS.SCRIPTS_PAGES.SRC)
    .pipe(webpack({
      config: webpackConfig
    }))
    .pipe(dest(GLOBS.SCRIPTS_PAGES.DEST))

    done()
}

export function scriptsVendor(done) {
  src(GLOBS.SCRIPTS_VENDOR.SRC)
  .pipe(dest(GLOBS.SCRIPTS_VENDOR.DEST))

  done()
}
import gulp from "gulp"
import pug from "./pug.js"
import scss from "./scss.js"
import fonts from "./fonts.js"
import images from "./images.js"
import svg from "./svg.js"
import reload from "./reload.js"
import { scriptsPages, scriptsVendor } from "./scripts.js"
import { SOURCE_FOLDER, DIRECTORIES } from "../config.js"

const { series } = gulp

export default function watch(done) {
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.PUG, { ignoreInitial: false }, series(pug, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.SCSS, { ignoreInitial: false }, series(scss, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.FONTS, { ignoreInitial: false }, series(fonts, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.IMAGES, { ignoreInitial: false }, series(images, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.SVG, { ignoreInitial: false }, series(svg, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.SCRIPTS + "pages", { ignoreInitial: false }, series(scriptsPages, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.SCRIPTS + "components", { ignoreInitial: false }, series(scriptsPages, reload))
  gulp.watch(SOURCE_FOLDER + DIRECTORIES.SCRIPTS + "vendor", { ignoreInitial: false }, series(scriptsVendor, reload))

  done()
}
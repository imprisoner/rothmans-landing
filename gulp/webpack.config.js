import path from "path"
import fs from "fs"
// replicating __filename and __dirname for ES Modules (thx to Flavio Copes)
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const JS_DIR = path.resolve(__dirname, "../src/js")
const PAGES_DIR = path.resolve(JS_DIR, "pages")
// const UTILS_DIR = path.resolve(JS_DIR, "utils")
console.log(PAGES_DIR)
const pageScripts = fs
  .readdirSync(PAGES_DIR, {
    withFileTypes: true
  })
  .filter(item => item.isFile() && item.name.split('.').pop() === 'js' )
  .map(item => [item.name.replace(".js", ""), { import: "@pages/" + item.name }])
// const utils = fs
//   .readdirSync(UTILS_DIR)
//   .filter(filename => filename !== "index.js")
//   .map(filename => path.resolve(UTILS_DIR, filename))

export default {
  mode: "development",
  resolve: {
    extensions: [".js", ".mjs"],
    alias: {
      "@": JS_DIR,
      "@pages": PAGES_DIR// "utils": UTILS_DIR
    }
  },
  devtool: "inline-source-map",
  entry: {
    // utils: utils,
    ...Object.fromEntries(pageScripts),
  },
  output: {
    filename: "[name].js",
  },
  watch: true,
  optimization: {
    minimize: false
  }
}
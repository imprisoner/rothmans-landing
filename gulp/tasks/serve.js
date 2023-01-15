import { BUILD_FOLDER } from '../config.js'
import browserSyncInstance from 'browser-sync'

const browserSync = browserSyncInstance.create()

export default function serve(done) {
  browserSync.init({
    server: { baseDir: BUILD_FOLDER },
    watch: true
  })
  done()
}
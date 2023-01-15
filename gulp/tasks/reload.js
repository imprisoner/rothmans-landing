import browserSyncInstance from 'browser-sync'

const browserSync = browserSyncInstance.create()

export default function reload(done) {
  browserSync.reload()
  done()
}
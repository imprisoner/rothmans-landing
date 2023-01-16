export const SOURCE_FOLDER = "src/"
export const BUILD_FOLDER = "dist/"

export const DIRECTORIES = {
  PUG: "pug/",
  SCSS: "scss/",
  ASSETS: "assets/",
  FONTS: "assets/fonts/",
  IMAGES: "assets/images/",
  SVG: "assets/svg/",
  SCRIPTS: "js/"
}

export const GLOBS = {
  PUG: {
    SRC: SOURCE_FOLDER + DIRECTORIES.PUG + "pages/*.pug",
    DEST: BUILD_FOLDER
  },
  SCSS: {
    SRC: SOURCE_FOLDER + DIRECTORIES.SCSS + "main.scss",
    DEST: BUILD_FOLDER + "css/"
  },
  FONTS: {
    SRC: SOURCE_FOLDER + DIRECTORIES.FONTS + "**/*",
    DEST: BUILD_FOLDER + DIRECTORIES.FONTS
  },
  IMAGES: {
    SRC: SOURCE_FOLDER + DIRECTORIES.IMAGES + "**/*",
    DEST: BUILD_FOLDER + DIRECTORIES.IMAGES
  },
  SVG: {
    SRC: SOURCE_FOLDER + DIRECTORIES.SVG + "**/*",
    DEST: BUILD_FOLDER + DIRECTORIES.SVG
  },
  SCRIPTS_PAGES: {
    SRC: SOURCE_FOLDER + DIRECTORIES.SCRIPTS + "pages/*.js",
    DEST: BUILD_FOLDER + DIRECTORIES.SCRIPTS
  },
  SCRIPTS_VENDOR: {
    SRC: SOURCE_FOLDER + DIRECTORIES.SCRIPTS + "vendor/*.js",
    DEST: BUILD_FOLDER + DIRECTORIES.SCRIPTS + "vendor/"
  },
  CLEAN: BUILD_FOLDER + "*"
}
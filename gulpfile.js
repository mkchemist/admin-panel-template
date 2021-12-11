const { src, dest, watch, series, parallel } = require("gulp");
const copy = require("gulp-copy");
const clean = require("gulp-clean");
const GulpPug = require("gulp-pug");
const rename = require("gulp-rename");
const GulpSass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const fs = require("fs");
const path = require("path");
const terser = require("terser-webpack-plugin");
const webpack = require("webpack-stream");
const webpackConfig = require("./webpack.config");

/**
 * assets files
 *
 */
const assetsFiles = [
  "./node_modules/bootstrap/dist/**/**",
  "./node_modules/jquery/dist/**",
  "./node_modules/feather-icons/dist/**",
  "./node_modules/chart.js/dist/**",
];

/**
 * copy assets file into dist directory
 *
 * @param {Function} cb
 * @returns {Promise}
 */
const copyAssetsFiles = (cb) => {
  return src(assetsFiles).pipe(copy("dist/libs", { prefix: 1 }));
};

const copyImages = (cb) => {
  return src(["./src/images/**/**"]).pipe(copy("dist/images", { prefix: 2 }));
};

/**
 * clean dist directory
 *
 * @param {Function} cb
 * @returns {Promise}
 */
const cleanDist = (cb) => {
  return src(["dist"]).pipe(clean());
};

/**
 * clean and copy dist directory
 *
 */
const cleanAndCopy = series(cleanDist, copyAssetsFiles);

/**
 * compile gulp files
 *
 * @param {Function} cb
 * @returns {Promise}
 */
const compilePug = (cb) => {
  return src(["./src/html/index.pug"])
    .pipe(
      GulpPug({
        pretty: true,
      })
    )
    .pipe(dest("dist"));
};

/**
 * compile sass files
 *
 * @param {Function} cb
 * @returns {Promise}
 */
const compileSass = (cb) => {
  return src(["./src/sass/index.scss"])
    .pipe(GulpSass().on("error", GulpSass.logError))
    .pipe(rename("admin.css"))
    .pipe(dest("dist/css"))
    .pipe(rename("admin.min.css"))
    .pipe(
      GulpSass({
        outputStyle: "compressed",
      }).on("error", GulpSass.logError)
    )
    .pipe(dest("dist/css"));
};

/**
 * compile JS files
 *
 * @param {Function} cb
 * @returns {Promise}
 */
const compileJs = (cb) => {
  return src(["./src/js/index.js"])
    .pipe(webpack(webpackConfig({ production: false })))
    .pipe(rename("admin.js"))
    .pipe(dest("dist/js"))
    .pipe(webpack(webpackConfig({ production: true })))
    .pipe(rename("admin.min.js"))
    .pipe(dest("dist/js"));
};

/**
 * start Server
 *
 * @param {Function} cb
 */
const startServer = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3000,
    open: true,
    logPrefix: 'Dashboard Development Server',
    reloadOnRestart: true,
  });
};

const initDev = series(
  compilePug,
  copyAssetsFiles,
  copyImages,
  compileSass,
  compileJs
);

exports.copy = copyAssetsFiles;
exports.clean = cleanDist;
exports.redist = cleanAndCopy;
exports.pug = compilePug;
exports.sass = compileSass;
exports.js = compileJs;
exports.images = copyImages;

exports.serve = function () {
  initDev();
  startServer();

  watch(["./src/**/**"], series(compileJs, compilePug, compileSass)).on(
    "change",
    browserSync.reload
  );
};

exports.default = async function () {
  let distDirectory = path.resolve(__dirname, "dist");
  /* await fs.readFile(distDirectory,async (err, files) => {
    if(err) return;
    console.log("test")
    await cleanDist();
  }) */

  initDev();

  return () => series(compileJs, compilePug, compileSass);
};

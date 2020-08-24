"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var srcPath = "./assets/sass/**/main.scss";
var outPath = "./assets/css/";
sass.compiler = require("node-sass");
gulp.task("sass", function () {
  return gulp
    .src(srcPath)
    .pipe(concat("main.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(
      gulp.dest(function () {
        console.log("outputting to assets/css/main.css");
        return outPath;
      })
    );
});
gulp.task("sass:watch", function () {
  gulp.watch(srcPath, gulp.series("sass"));
});

const gulp = require("gulp");
const sass = require("gulp-sass");

// File path variable declarations
var stylePath = "";

// Paths array
var path = {
    scss: [
        '../web/sass/**/main.scss',
    ],
    watch_scss: [
        '../web/sass/**/*.scss',
    ],
    theme_base: [
        '../web/stylesheets/',
    ],
};

// Process SASS functionality
gulp.task('process-scss', function () {
    console.log("paths:" );
    console.log(path);
    return gulp.src(path.scss)
        .pipe(gulp.dest(function (file) {
            stylePath = path.theme_base;
            return file.base;
        }))
        .pipe(sass({
            compass: true,
            style: 'expanded',
        }))
        .pipe(gulp.dest(function () {
            return stylePath + 'main.css';
        }))
        .pipe(gulp.dest(function () {
            console.log("destination path:  ");
            console.log(stylePath);
            return stylePath;
        }))
        .on('error', sass.logError);
});
gulp.task("watch", function() {
    gulp.watch(path.watch_scss, {events: 'change', delay: 500},  gulp.series("process-scss"));
}); 
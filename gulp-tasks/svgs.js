'use strict';

const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('./config');

// Compress Images and move to dist folder
gulp.task('svgs', () => {
    return gulp
        .src(config.assets.svgs)
        .pipe(imagemin(
            [
                imagemin.svgo({
                    plugins: [{removeViewBox: true}]
                })
            ],
            {
                verbose: true
            }
        ))
        .pipe(gulp.dest(global.pathDestination.svgs));
});

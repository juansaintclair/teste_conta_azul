'use strict';

const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    gulpIf = require('gulp-if'),
    config = require('./config');

// Compress Images and move to dist folder
gulp.task('images', () => {
    return gulp
        .src(config.assets.images)
        .pipe(
            gulpIf(global.pathDestination === config.prod, imagemin(
                [
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.jpegtran({progressive: true}),
                    imagemin.optipng({optimizationLevel: 7})
                ],
                {
                    verbose: true
                }
            ))
        )
        .pipe(gulp.dest(global.pathDestination.images));
});

'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Task to move the fonts to environment
gulp.task('fonts', () => {
    return gulp
        .src(config.assets.fonts)
        .pipe(gulp.dest(global.pathDestination.fonts));
});

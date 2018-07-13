'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Compress Images and move to dist folder
gulp.task('pdfs', () => {
    return gulp
        .src(config.assets.pdfs)
        .pipe(gulp.dest(global.pathDestination.pdfs));
});

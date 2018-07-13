'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    uncss = require('gulp-uncss');

// Remove unused CSS
gulp.task('uncss', () => {
    return gulp
        .src(`${global.pathDestination.css}/styles.css`)
        .pipe(uncss({
            html: [config.assets.html]
        }))
        .pipe(gulp.dest(global.pathDestination.css));
});

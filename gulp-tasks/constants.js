'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    rename = require('gulp-rename'),
    ngConstant = require('gulp-ng-constant');

gulp.task('constants', () => {
    return gulp
        .src('')
        .pipe(ngConstant({
            name: config.projectModule,
            wrap: false,
            deps: false,
            merge: true,
            constants: global.pathDestination.constants
        }))
        .pipe(rename('constants.js'))
        .pipe(gulp.dest(`${config.paths.assets}/js`));
});

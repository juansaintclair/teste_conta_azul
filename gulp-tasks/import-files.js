'use strict';
const gulp = require('gulp'),
    config = require('./config');

gulp.task('import-files', () => {
    config.assets.importFiles.forEach(fileName => {
        gulp
            .src(`${config.paths.src}/${fileName}`)
            .pipe(gulp.dest(global.pathDestination.path));
    });

    return gulp;
});


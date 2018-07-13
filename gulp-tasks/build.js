'use strict';

const gulp = require('gulp'),
    destination = require('./destination'),
    runSequence = require('run-sequence');

// Task to build dev environment
gulp.task('build:dev', (done) => {
    _executeSequence(done, 'dev');
});

// Task to build production environment
gulp.task('build:prod', (done) => {
    _executeSequence(done, 'prod');
});

// function to execute runSequence
function _executeSequence(done, environment) {
    global.pathDestination = destination(environment);

    return runSequence(
        'clean',
        'lint',
        'styles:bundles',
        'styles:vendors',
        'scripts:bundles',
        'scripts:vendors',
        ['fonts', 'images', 'svgs', 'html'],
        'import-files',
        'clean:js',
        done
    );
};

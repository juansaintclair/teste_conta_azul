'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    config = require('./config'),
    gulpIf = require('gulp-if'),
    server = require('./server'),
    autoprefixer = require('autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    browserSync = require('browser-sync'),
    replace = require('gulp-replace'),
    reload = server.reload,
    sass = require('gulp-sass'),
    sassOptions = {
        errLogToConsole: true,
        outputStyle: 'expanded'
    },
    sourcemaps = require('gulp-sourcemaps'),
    gcmq = require('gulp-group-css-media-queries'),
    postcss = require('gulp-postcss'),
    pxtorem = require('postcss-pxtorem');

// Task to transform, SASS to CSS of carrentalz files, move and minify (if production build)
gulp.task('styles:bundles', () => {
    return gulp
        .src(config.assets.stylesBundles)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gcmq())
        .pipe(postcss([
            pxtorem({replace: false}),
            autoprefixer({ browsers: ['> 1%'] })
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulpIf(global.pathDestination === config.prod, config.buildHash.resources()))
        .pipe(gulpIf(global.pathDestination === config.prod, cleanCss()))
        .pipe(gulp.dest(global.pathDestination.path))
        .pipe(reload({stream: true}));
});

// Task to concat, move and minify the vendors CSS files
gulp.task('styles:vendors', () => {
    return gulp
        .src(config.assets.stylesVendors)
        .pipe(concat('vendors.css'))
        .pipe(replace('/*!', '/*'))
        .pipe(cleanCss())
        .pipe(config.buildHash.resources())
        .pipe(gulp.dest(global.pathDestination.styles));
});

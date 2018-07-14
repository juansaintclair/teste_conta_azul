'use strict';

const paths = {
        assets: 'src/assets',
        dev: '_dev',
        prod: '_prod',
        src: 'src'
    },
    CacheBuster = require('gulp-cachebust'),
    cacheBust = new CacheBuster({
        random: true,
        checksumLength: 16
    });

module.exports = {
    assets: {
        fonts: `${paths.assets}/fonts/**/*`,
        htmls: `${paths.src}/**/*.html`,
        images: `${paths.assets}/imgs/**/*`,
        js: `${paths.assets}/js/**/*`,
        pdfs: `${paths.assets}/pdfs/**/*`,
        svgs: `${paths.assets}/svgs/**/*`,
        stylesBundles: `${paths.src}/**/*.sass`,
        stylesVendors: [
            './node_modules/angular-material/angular-material.min.css'
        ],
        scriptsBundles: [
            `${paths.src}/app/app.module.js`,
            `${paths.src}/**/*.js`,
            `!${paths.src}/**/*.spec.js`
        ],
        scriptsVendors: [
            './node_modules/angular/angular.js',
            './node_modules/angular-cookies/angular-cookies.js',
            './node_modules/angular-i18n/angular-locale_pt-br.js',
            './node_modules/angular-sanitize/angular-sanitize.js',
            './node_modules/angular-touch/angular-touch.js',
            './node_modules/@uirouter/core/_bundles/ui-router-core.js',
            './node_modules/@uirouter/angularjs/release/ui-router-angularjs.js',
            './node_modules/ngstorage/ngStorage.js',
            './node_modules/spin.js/spin.js',
        ],
        importFiles: [
            'robots.txt'
        ]
    },
    base: __dirname.replace(require('path').basename(__dirname), ''),
    buildHash: cacheBust,
    dev: {
        constants: {
            API_URL: '//esb.webapidev.cd.com/v1/api/',
            AUTHORIZATION: '9ec365a9a6664414ac8927b1bda4744c',
            ORIGIN_CODE: '9b519887127e42eab74cc1dd19b2a30d'
        },
        fonts: `${paths.dev}/assets/fonts`,
        images: `${paths.dev}/assets/imgs`,
        js: `${paths.dev}/assets/js`,
        path: `${paths.dev}/`,
        pdfs: `${paths.dev}/assets/pdfs`,
        styles: `${paths.dev}/assets/styles`,
        svgs: `${paths.dev}/assets/svgs`
    },
    prod: {
        constants: {
            API_URL: 'https://gtw.com.br/v1/api/',
            AUTHORIZATION: 'c325452a3cf7473e85d375faca1ee812',
            ORIGIN_CODE: '92164369cc414be9974afd6d738b8db0'
        },
        fonts: `${paths.prod}/assets/fonts`,
        images: `${paths.prod}/assets/imgs`,
        js: `${paths.prod}/assets/js`,
        path: `${paths.prod}/`,
        pdfs: `${paths.prod}/assets/pdfs`,
        styles: `${paths.prod}/assets/styles`,
        svgs: `${paths.prod}/assets/svgs`
    },
    paths: paths,
    projectModule: 'ca.weathernow',
    server: {
        browser: require('os').platform() === 'win32' ? 'chrome' : 'google chrome',
        mainHTML: `${paths.src}/index.html`,
        port: 3000,
        portUi: 3001,
        uri: 'http://localhost:3000/'
    }
};

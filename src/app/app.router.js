(function() {
    'use strict';

    angular
        .module('minimal.template')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());

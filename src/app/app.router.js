(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());

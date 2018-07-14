(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($locationProvider) {
        $locationProvider.html5Mode(true);
    }
}());

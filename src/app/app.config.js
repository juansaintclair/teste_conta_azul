(function() {
    'use strict';

    angular
        .module('minimal.template')
        .config(AppConfig);

    /* @ngInject */
    function AppConfig($locationProvider, usSpinnerConfigProvider) {
        $locationProvider.html5Mode(true);
        usSpinnerConfigProvider.setDefaults({
            lines: 11,
            length: 30,
            width: 10,
            radius: 30,
            color: '#255178',
            position: 'fixed'
        });
    }
}());

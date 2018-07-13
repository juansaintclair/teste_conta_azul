(function() {
    'use strict';

    angular
        .module('minimal.template')
        .config(MainRouter);

    /* @ngInject */
    function MainRouter($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/pages/main/main.template.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
    }
}());

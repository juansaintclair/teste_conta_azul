(function() {
    'use strict';

    angular
        .module('contaazul.teste')
        .config(AppRouter);

    /* @ngInject */
    function AppRouter($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
}());

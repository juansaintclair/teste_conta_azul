(function() {
    'use strict';

    angular
        .module('contaazul.teste')
        .component('caHeader', HeaderComponent());
    
    function HeaderComponent() {
        var component = {
            templateUrl: '/components/header/header.template.html',
            controller: HeaderComponentController
        };
        return component;
    }

    /* @ngInject */
    function HeaderComponentController() {
        var vm = this;
    }
})();

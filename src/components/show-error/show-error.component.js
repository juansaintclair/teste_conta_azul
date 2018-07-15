(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .component('caShowError', ShowErrorComponent());
    
    function ShowErrorComponent() {
        var component = {
            templateUrl: '/components/show-error/show-error.template.html',
            controller: ShowErrorComponentController,
            bindings: {
                retry: '&'
            }
        };
        return component;
    }

    /* @ngInject */
    function ShowErrorComponentController() {
        var vm = this;
    }
})();

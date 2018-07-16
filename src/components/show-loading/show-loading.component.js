(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .component('caShowLoading', ShowLoadingComponent());
    
    function ShowLoadingComponent() {
        var component = {
            templateUrl: '/components/show-loading/show-loading.template.html',
            controller: ShowLoadingComponentController
        };
        return component;
    }

    /* @ngInject */
    function ShowLoadingComponentController() {
        var vm = this;
    }
})();

(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .run(AppRun);

    /* @ngInject */
    function AppRun(amMoment) {
        amMoment.changeLocale('pt-br');
    }
})();

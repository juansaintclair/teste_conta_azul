(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .service('ConfigurationService', ConfigurationService);
    
    /* @ngInject */
    function ConfigurationService(API_URL) {
        var service = this;

        service.urlTeste = API_URL + 'teste';
    }
})();

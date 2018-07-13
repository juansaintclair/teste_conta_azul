(function() {
    'use strict';

    angular
        .module('minimal.template')
        .service('ConfigurationService', ConfigurationService);
    
    /* @ngInject */
    function ConfigurationService(API_URL) {
        var service = this;

        service.urlTeste = API_URL + 'teste';
    }
})();

(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .service('HttpService', HttpService);

    /* @ngInject */
    function HttpService($http, $rootScope) {
        this.get  = get;

        function _error(error) {
            throw error;
        }

        function _success(data, status, headers, config) {
            return data.data;
        }

        function get(url, params) {
            return $http
                .get(url, { params: params })
                .then(_success)
                .catch(_error);
        }

    }
})();

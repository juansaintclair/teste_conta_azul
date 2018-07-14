(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .run(AppRun);

    /* @ngInject */
    function AppRun($rootScope, $location, $transitions) {
        var concurrentRequests = 0,
            dataLayer = window.dataLayer = window.dataLayer || [],
            hideSpinner = $rootScope.$on('us-spinner:stop', function(event, key) {
                if(concurrentRequests == 1) {
                    document.querySelector('#' + key).classList.remove('container-spinner');
                }

                concurrentRequests--;
            }),
            showSpinner = $rootScope.$on('us-spinner:spin', function(event, key) {
                if(concurrentRequests == 0) {
                    document.querySelector('#' + key).classList.add('container-spinner');
                }

                concurrentRequests++;
            });
    }
})();

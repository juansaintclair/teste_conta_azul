(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .controller('MainController', MainController);


    /* @ngInject */
    function MainController() {
        var vm = this;

        vm.featuredCity = 'Urubici';
        vm.citys = [{
            city: 'Nuuk', 
            country: 'GL'
        }, {
            city: 'Urubici', 
            country: 'BR'
        }, {
            city: 'Nairobi', 
            country: 'KE'
        }];
    }
})();

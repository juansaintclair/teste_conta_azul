(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .controller('MainController', MainController);


    /* @ngInject */
    function MainController() {
        var vm = this;

        vm.changeSelectedCity = changeSelectedCity;
        
        vm.featuredCity = 'Urubici';
        vm.citys = [{
            name: 'Nuuk', 
            country: 'GL'
        }, {
            name: 'Urubici', 
            country: 'BR'
        }, {
            name: 'Nairobi', 
            country: 'KE'
        }];

        function changeSelectedCity(city) {
            vm.featuredCity = city;
        }
    }
})();

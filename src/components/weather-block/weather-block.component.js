(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .component('caWeatherBlock', WeatherBlock());
    
    function WeatherBlock() {
        var component = {
            templateUrl: '/components/weather-block/weather-block.template.html',
            controller: WeatherBlockComponent
        };
        return component;
    }

    /* @ngInject */
    function WeatherBlockComponent() {
        var vm = this;
    }
})();

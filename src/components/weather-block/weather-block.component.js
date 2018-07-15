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

        vm.setTemperatureColor = setTemperatureColor;

        function setTemperatureColor(temperature) {
            switch(true) {
                case (temperature <= 5):
                    return 'low';
                case (temperature > 5 && temperature <= 25):
                    return 'normal';
                case (temperature > 25):
                    return 'high';
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .service('WeatherService', WeatherService);

    /* @ngInject */
    function WeatherService(HttpService, AUTHORIZATION, API_URL) {
        var service = this;

        service.getWeather = getWeather;

        function getWeather(city, country) {
            var params = {
                q: city + ',' + country,
                units: 'metric',
                appid: AUTHORIZATION
            };
            return HttpService.get(API_URL, params);
        }

    }
})();

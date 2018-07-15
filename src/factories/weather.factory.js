(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .factory('WeatherFactory', WeatherFactory);

    /* @ngInject */
    function WeatherFactory(moment) {
        var notFoundMessage = 'error';

        function _milisecondsToMinutes(milliseconds) {
            return Math.floor(milliseconds / 60000);
        }

        function setWeatherResult(response) {
            var weatherInformation = response.list[0];
            return {
                'name': weatherInformation.name,
                'country': weatherInformation.sys.country,
                'temp': (!!weatherInformation.main.temp)?Math.floor(weatherInformation.main.temp):notFoundMessage,
                'pressure': (!!weatherInformation.main.pressure)?Math.floor(weatherInformation.main.pressure):notFoundMessage,
                'humidity': (!!weatherInformation.main.humidity)?Math.floor(weatherInformation.main.humidity):notFoundMessage,
                'displayLastUpdate': moment().format('hh:mm:ss A'),
                'lastUpdate': moment(new Date())
            };
        }

        function useCacheByTime(lastUpdate, apiRefreshTime) {
            var now = moment(new Date());
            var minutesSinceLastUpdate = now.diff(lastUpdate, 'minutes');
            var interValInMinutes = _milisecondsToMinutes(apiRefreshTime);
            return (minutesSinceLastUpdate < interValInMinutes);
        }

        return {
            setWeatherResult: setWeatherResult,
            useCacheByTime: useCacheByTime
        };
    }
})();

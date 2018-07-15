(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .component('caWeatherBlock', WeatherBlock());
    
    function WeatherBlock() {
        var component = {
            templateUrl: '/components/weather-block/weather-block.template.html',
            controller: WeatherBlockComponent,
            bindings: {
                city: '<'
            }
        };
        return component;
    }

    /* @ngInject */
    function WeatherBlockComponent(WeatherService, WeatherFactory, StorageService, API_REFRESH_CACHE_TIME, $interval) {
        var vm = this;

        vm.setTemperatureColor = setTemperatureColor;
        vm.showWeatherResult = showWeatherResult;
        vm.$onInit = onInit;

        vm.loading = true;

        function onInit() {
            _callSetInterval();
            var setInterval = $interval(_callSetInterval, API_REFRESH_CACHE_TIME);
        }

        function _callSetInterval() {
            _checkHasDataInStorage(StorageService.get(vm.city.name+vm.city.country));
        }

        function _checkHasDataInStorage(weatherResult) {
            if (weatherResult) {
                _checkCachedTime(weatherResult);
            } else {
                _getWeather(vm.city.name, vm.city.country);
            }
        }

        function _checkCachedTime(weatherResult) {
            var useCacheByTime = WeatherFactory.useCacheByTime(weatherResult.lastUpdate, API_REFRESH_CACHE_TIME);
            if (useCacheByTime) {
                vm.weatherResult = weatherResult;
            } else {
                _getWeather(vm.city.name, vm.city.country);
            }
            
            vm.loading = false;
        }

        function _getWeather(city, country) {
            vm.loading = true;
            WeatherService.getWeather(city, country)
                .then(_successGetWeather)
                .catch(_catchGetWeather);
        }

        function _successGetWeather(response) {
            if (!response.list.length) {
                _catchGetWeather(response);
            } else {
                _setWeatherStorage(response);
                _getWeatherFromStorage(response);
            }
        }

        function _setWeatherStorage(response) {
            var result = response.list[0],
                responseStorage = WeatherFactory.setWeatherResult(response);
            StorageService.set(result.name+result.sys.country, responseStorage);
        }

        function _getWeatherFromStorage(response) {
            var result = response.list[0];
            _checkHasDataInStorage(StorageService.get(vm.city.name+vm.city.country));
        }

        function _catchGetWeather(e) {
            console.error(e);
            vm.loading = false;
        }

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

        function showWeatherResult(loading, weatherResult) {
            return (!loading && weatherResult);
        }
    }
})();

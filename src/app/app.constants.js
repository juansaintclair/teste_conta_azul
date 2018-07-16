(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .constant('API_URL', 'http://api.openweathermap.org/data/2.5/find')
        .constant('AUTHORIZATION', '96572aea41a88301624938f310127426')
        .constant('API_REFRESH_CACHE_TIME', '600000');
}());

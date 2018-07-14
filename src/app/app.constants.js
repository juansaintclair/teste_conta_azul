(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .constant('API_URL', 'http://api.openweathermap.org/data/2.5/find')
        .constant('AUTHORIZATION', '96572aea41a88301624938f310127426');
}());

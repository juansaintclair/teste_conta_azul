(() => {
    'use strict';
    describe('Service: Weather', () => {
        var WeatherService,
            httpBackend,
            HttpService,
            url = 'http://api.openweathermap.org/data/2.5/find?q=nuuk,gl&units=metric&appid=96572aea41a88301624938f310127426';

        beforeEach(module('ca.weathernow'));

        beforeEach(inject((_$injector_, _HttpService_, _$httpBackend_) => {
            WeatherService = _$injector_.get('WeatherService');
            httpBackend = _$httpBackend_;
            HttpService = _HttpService_;
            spyOn(WeatherService, 'getWeather').and.callThrough();
            spyOn(HttpService, 'get').and.callThrough();
        }));

        it('WeatherService should be defined', () => {
            expect(WeatherService).toBeDefined();
        });

        it('getWeather should have been called with success', () => {
            WeatherService.getWeather('nuuk,gl');
            expect(WeatherService.getWeather).toHaveBeenCalled();
        });

        it('Should call HttpService.Get', () => {
            WeatherService.getWeather('nuuk,gl');
            expect(HttpService.get).toHaveBeenCalled();
        });

    });
})();

(() => {
    'use strict';
    describe('Service: Weather', () => {
        var WeatherService,
            httpBackend,
            url = 'http://api.openweathermap.org/data/2.5/find?q=nuuk,gl&units=metric&appid=96572aea41a88301624938f310127426';

        beforeEach(module('ca.weathernow'));

        beforeEach(inject((_$injector_, _$httpBackend_) => {
            WeatherService = _$injector_.get('WeatherService');
            httpBackend = _$httpBackend_;
            spyOn(WeatherService, 'getWeather').and.callThrough();
        }));

        it('WeatherService should be defined', () => {
            expect(WeatherService).toBeDefined();
        });

        it('getWeather should have been called with success', () => {
            WeatherService.getWeather('nuuk,gl');
            expect(WeatherService.getWeather).toHaveBeenCalled();
        });

        it('Deve garantir chamada com retorno sucesso', () => {
            var mockResponse = {
                data: {
                    main: {
                        humidity: 75.3,
                        pressure: 854.654,
                        temperature: 25.85
                    }
                }
            };
    
            httpBackend.expectGET(url)
                .respond(mockResponse);
    
            WeatherService.getWeather('nuuk,gl').then((data) => {
                expect(data).toEqual(mockResponse);
            });
    
            httpBackend.flush();
        });

    });
})();

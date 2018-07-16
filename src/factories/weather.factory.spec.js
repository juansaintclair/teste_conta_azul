(() => {
    'use strict';
    describe('Factory: Weather', () => {
        var WeatherFactory,
            apiRefreshTime = 600000,
            apiResponse = {
                'message': 'accurate',
                'cod': '200',
                'count': 1,
                'list': [
                    {
                        'id': 3421319,
                        'name': 'Nuuk',
                        'coord': {
                            'lat': 64.175,
                            'lon': -51.7356
                        },
                        'main': {
                            'temp': 13.75,
                            'pressure': 1003,
                            'humidity': 62.45,
                            'temp_min': 13,
                            'temp_max': 13
                        },
                        'dt': 1531691400,
                        'wind': {
                            'speed': 4.6,
                            'deg': 190
                        },
                        'sys': {
                            'country': 'GL'
                        },
                        'rain': null,
                        'snow': null,
                        'clouds': {
                            'all': 75
                        },
                        'weather': [
                            {
                                'id': 803,
                                'main': 'Clouds',
                                'description': 'broken clouds',
                                'icon': '04d'
                            }
                        ]
                    }
                ]
            };

        beforeEach(module('ca.weathernow'));

        beforeEach(inject((_$injector_) => {
            WeatherFactory = _$injector_.get('WeatherFactory');
            moment = _$injector_.get('moment');
            spyOn(WeatherFactory, 'useCacheByTime').and.callThrough();
            spyOn(WeatherFactory, 'setWeatherResult').and.callThrough();
        }));

        //Private Functions
        function _milisecondsToMinutes(milliseconds) {
            return Math.floor(milliseconds / 60000);
        }

        it('WeatherFactory should be defined', () => {
            expect(WeatherFactory).toBeDefined();
        });

        it('milisecondsToMinutes should convert 600000 miliseconds to 10 minutes', () => {
            var convertedTime = _milisecondsToMinutes(apiRefreshTime);
            expect(convertedTime).toBe(10);
        });

        it('useCacheByTime should return true to use cache if last update was less than 10 minutes than now', () => {
            var useCacheTime = WeatherFactory.useCacheByTime(moment(new Date()), apiRefreshTime);
            expect(useCacheTime).toBe(true);
        });

        it('useCacheByTime should return false to not use cache if last update was more than 10 minutes than now', () => {
            var lastUpdate = moment(new Date()).subtract(20, 'minutes'),
                useCacheTime = WeatherFactory.useCacheByTime(lastUpdate, apiRefreshTime);    
            expect(useCacheTime).toBe(false);
        });

        it('setWeatherResult should return result with reformulated data', () => {
            var reformulatedResponse = WeatherFactory.setWeatherResult(apiResponse);
            expect(reformulatedResponse.name).toBe('Nuuk');
            expect(reformulatedResponse.country).toBe('GL');
            expect(reformulatedResponse.temp).toBe(13);
            expect(reformulatedResponse.pressure).toBe(1003);
            expect(reformulatedResponse.humidity).toBe(62);
        });

    });
})();



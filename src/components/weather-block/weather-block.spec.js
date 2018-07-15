'use strict';

describe('Component: WeatherBlock', () => {
    application.initModule();
    var $ctrl,
        WeatherBlockComponent,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        WeatherBlockComponent = $ctrl('caWeatherBlock', null, {});
        spyOn(WeatherBlockComponent, 'setTemperatureColor').and.callThrough();

    }));
    
    it('WeatherBlockComponent should be defined', () => {
        expect(WeatherBlockComponent).toBeDefined();
    });

    it('setTemperatureColor should return low', () => {
        var temperatureClass = WeatherBlockComponent.setTemperatureColor(4);
        expect(temperatureClass).toBe('low');
    });

    it('setTemperatureColor should return normal', () => {
        var temperatureClass = WeatherBlockComponent.setTemperatureColor(16);
        expect(temperatureClass).toBe('normal');
    });

    it('setTemperatureColor should return high', () => {
        var temperatureClass = WeatherBlockComponent.setTemperatureColor(26);
        expect(temperatureClass).toBe('high');
    });
});

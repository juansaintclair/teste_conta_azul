'use strict';

describe('Component: WeatherBlock', () => {
    application.initModule();
    var $ctrl,
        WeatherBlockComponent,
        StorageService,
        scope;

    beforeEach(inject((_$componentController_, _$injector_, _$rootScope_) => {
        $ctrl = _$componentController_;
        WeatherBlockComponent = $ctrl('caWeatherBlock', null, {});
        StorageService = _$injector_.get('StorageService');
        
        spyOn(WeatherBlockComponent, 'setTemperatureColor').and.callThrough();
        spyOn(WeatherBlockComponent, 'showFeatured').and.callThrough();
        spyOn(WeatherBlockComponent, 'showWeatherResult').and.callThrough();
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

    it('showFeatured should return true if city in parameter is selected', () => {
        WeatherBlockComponent.featured = 'Urubici';
        var featuredCity = WeatherBlockComponent.showFeatured('Urubici');
        expect(featuredCity).toBe(true);
    });

    it('showFeatured should return false if city in parameter is not selected', () => {
        WeatherBlockComponent.featured = 'Urubici';
        var featuredCity = WeatherBlockComponent.showFeatured('Nuuki');
        expect(featuredCity).toBe(false);
    });

    it('showWeatherResult should return true if exist result and anything is loading', () => {
        var featuredCity = WeatherBlockComponent.showWeatherResult(false, true);
        expect(featuredCity).toBe(true);
    });

});

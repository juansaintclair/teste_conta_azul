'use strict';

describe('Component: WeatherBlock', () => {
    application.initModule();
    var $ctrl,
        WeatherBlockComponent,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        WeatherBlockComponent = $ctrl('caHeader', null, {});
    }));
    
    it('WeatherBlockComponent should be defined', () => {
        expect(WeatherBlockComponent).toBeDefined();
    });
});

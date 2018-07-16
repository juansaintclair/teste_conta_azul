'use strict';

describe('Component: Show-Loading', () => {
    application.initModule();
    var $ctrl,
        ShowLoadingComponentController,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        ShowLoadingComponentController = $ctrl('caShowLoading', null, {});
    }));
    
    it('ShowLoadingComponentController should be defined', () => {
        expect(ShowLoadingComponentController).toBeDefined();
    });
});

'use strict';

describe('Component: Show-Loading', () => {
    application.initModule();
    var $ctrl,
        ShowErrorComponentController,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        ShowErrorComponentController = $ctrl('caShowLoading', null, {});
    }));
    
    it('ShowErrorComponentController should be defined', () => {
        expect(ShowErrorComponentController).toBeDefined();
    });
});

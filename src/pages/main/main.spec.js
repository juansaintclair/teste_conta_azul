'use strict';

describe('Page: Main', () => {
    application.initModule();
    var $ctrl,
        MainController,
        scope;

    beforeEach(inject((_$controller_, _$rootScope_) => {
        $ctrl = _$controller_;
        MainController = $ctrl('MainController', null, {});
    }));
    
    it('MainController should be defined', () => {
        expect(MainController).toBeDefined();
    });
});

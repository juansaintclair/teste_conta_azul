'use strict';

describe('Component: Header', () => {
    application.initModule();
    var $ctrl,
        HeaderComponent,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        HeaderComponent = $ctrl('caHeader', null, {});
    }));
    
    it('HeaderComponent should be defined', () => {
        expect(HeaderComponent).toBeDefined();
    });
});

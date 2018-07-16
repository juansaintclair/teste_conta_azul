'use strict';

describe('Component: Show-Error', () => {
    application.initModule();
    var $ctrl,
        ShowErrorComponentController,
        scope;

    beforeEach(inject((_$componentController_, _$rootScope_) => {
        $ctrl = _$componentController_;
        ShowErrorComponentController = $ctrl('caShowError', null, {});

    }));
    
    it('ShowErrorComponentController should be defined', () => {
        expect(ShowErrorComponentController).toBeDefined();
    });

    it('Should grant that bindings are correct', () => {
        var ctrl = $ctrl('caShowError', null, {
            retry: angular.noop
        });
        expect(typeof ctrl.retry).toEqual('function');
    }); 
});

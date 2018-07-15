'use strict';

describe('Page: Main', () => {
    application.initModule();
    var $ctrl,
        MainController,
        scope;

    beforeEach(inject((_$controller_, _$rootScope_) => {
        $ctrl = _$controller_;
        MainController = $ctrl('MainController', null, {});

        spyOn(MainController, 'changeSelectedCity').and.callThrough();
    }));
    
    it('MainController should be defined', () => {
        expect(MainController).toBeDefined();
    });

    it('changeSelectedCity should return city passed in parameter', () => {
        MainController.changeSelectedCity('Rio de Janeiro');
        expect(MainController.featuredCity).toBe('Rio de Janeiro');
    });
});

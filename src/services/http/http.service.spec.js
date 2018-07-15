(() => {
    'use strict';

    describe('Service: Http', () => {

        var $rootScope,
            $httpBackend,
            HttpService,
            object = {
                Uid: '0101'
            },
            url = 'http://api.openweathermap.org/data/2.5/find?q=nuuk,gl&units=metric&appid=96572aea41a88301624938f310127426';

        beforeEach(module('ca.weathernow'));

        beforeEach(inject((_HttpService_, _$rootScope_, _$httpBackend_) => {
            $httpBackend = _$httpBackend_;
            HttpService = _HttpService_;

            spyOn(HttpService, 'get').and.callThrough();
        }));

        it('Service should be defined', () => {
            expect(HttpService).toBeDefined();
        });

        it('Method Get must be called', () => {
            HttpService.get(url);
            expect(HttpService.get).toHaveBeenCalled();
        });

        it('Should return success', () => {
            var mockResponse = {
                data: { success: true, message: 'Success!' }
            };
    
            $httpBackend.expectGET(url)
                .respond(mockResponse);
    
            HttpService.get(url).then((data) => {
                expect(data).toEqual(mockResponse);
            });
    
            $httpBackend.flush();
        });
    });
})();

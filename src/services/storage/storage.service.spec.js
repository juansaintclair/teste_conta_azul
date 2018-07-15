(() => {
    'use strict';

    describe('Service: StorageService', () => {
        var StorageService;

        beforeEach(module('ca.weathernow'));


        beforeEach(inject((_$injector_) => {
            StorageService = _$injector_.get('StorageService');
        }));


        it('StorageService should be defined', () => {
            expect(StorageService).toBeDefined();
        });


        it('Should verify if values return as expected', () => {
            var teste1 = { novo: 'true' },
                teste2 = 21,
                teste3 = ['Information', [23,12], {teste: 'new'}, 50, [[10, 'teste'], ['teste', 45]]],
                teste4 = 'Teste 21 de inserção 23158';

            StorageService.set('teste1', teste1);
            StorageService.set('teste2', teste2);
            StorageService.set('teste3', teste3);
            StorageService.set('teste4', teste4);

            expect(StorageService.get('teste1')).toEqual(teste1);
            expect(StorageService.get('teste2')).toEqual(teste2);
            expect(StorageService.get('teste3')).toEqual(teste3);
            expect(StorageService.get('teste4')).toEqual(teste4);

            expect(StorageService.get('teste1').novo).toBeTruthy();
            expect(StorageService.get('teste3')[1][0]).toBeGreaterThanOrEqual(23);

        });

        it('Should return and verify correct types', () => {
            expect(typeof StorageService.get('teste1')).toEqual('object');
            expect(typeof StorageService.get('teste2')).toEqual('number');
            expect(StorageService.get('teste3') instanceof Array).toBeTruthy();
            expect(typeof StorageService.get('teste4')).toEqual('string');
        });


        it('Should verify use of another APIS', () => {
            expect( StorageService.get('outro') ).toBeDefined();
            StorageService.set('outro_teste', true);
            StorageService.del('outro_teste');
            expect( StorageService.get('outro_teste') ).toBeNull();
            StorageService.reset();
            expect( StorageService.get('outro') ).toBeNull();
        });

        it('Should verify if parameter in del function is not a string', () => {
            expect(StorageService.del(123)).toBeNull();
            expect(StorageService.del([])).toBeNull();
            expect(StorageService.del({})).toBeNull();
            expect(StorageService.del(true)).toBeNull();
            expect(StorageService.del('test')).toBeFalsy();
        });

        it('Should verify if parameter in set function is not a string', () => {
            expect(StorageService.set(123)).toBeNull();
            expect(StorageService.set([])).toBeNull();
            expect(StorageService.set({})).toBeNull();
            expect(StorageService.set(true)).toBeNull();
            expect(StorageService.set('test')).toBeNull();
            expect(StorageService.set('test', {test:true})).not.toBeNull();

        });

        it('Should verify if parameter in get function is not a string', () => {
            expect(StorageService.get(123)).toBeNull();
            expect(StorageService.get([])).toBeNull();
            expect(StorageService.get({})).toBeNull();
            expect(StorageService.get(true)).toBeNull();
            expect(StorageService.get('test')).not.toBeNull();
        });

        it('Should verify if recursion behave as expected', () => {
            var item = {package: {sku: {title: 'test', subtitle: 'subtest'}}};
            StorageService.set('pckg', item);
            expect(StorageService.get('pckg', 'package.sku.title')).toEqual(item.package.sku.title);
            expect(StorageService.get('pckg', 'pck.sku.title')).toBeNull();
            expect(StorageService.get('pckg', 'package')).toEqual(item.package);
            expect(StorageService.get('pckg', 'package,ski')).toBeNull();
            expect(StorageService.put('pckg', 'package,ski')).toBeNull();
            expect(StorageService.put('pckg', 'package.sku.title', 'novo teste titulo')).toBeDefined();
            expect(StorageService.put('pckg', 'package.sku,title', 'novo teste titulo')).toBeNull();
            expect(StorageService.put('pckg', 'package', ['novo', true, {data: '01/01/0001'}])).toEqual({package: ['novo', true, {data: '01/01/0001'}]});
        });


        it('Sould grant change of type', () => {
            var item = {name: 'teste', value: 'Teste de Tipo Storage', prefix: 'WNCA_'};

            expect(localStorage.getItem(`${item.prefix}${item.name}`)).toBeNull();
            expect(sessionStorage.getItem(item.name)).toBeNull();

            StorageService.set(item.name, item.value);
            expect(localStorage.getItem(`${item.prefix}${item.name}`)).toEqual(item.value);         
            expect(sessionStorage.getItem(item.name)).toBeNull();
            
            StorageService.setType('session');
            StorageService.set(item.name, item.value);
            expect(localStorage.getItem(`${item.prefix}${item.name}`)).toEqual(item.value);         
            expect(sessionStorage.getItem(`${item.prefix}${item.name}`)).toEqual(item.value);    

            StorageService.setType('local');
            expect(StorageService.get(item.name)).toEqual(item.value);  
        });


    });
})();

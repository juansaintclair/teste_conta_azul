(function() {
    'use strict';

    angular
        .module('ca.weathernow')
        .service('StorageService', StorageService);

    /* @ngInject */
    function StorageService() {
        var prefix = 'WNCA_',
            security = false,
            type = window['localStorage'],
            typeStorage = 'local';

        this.del = del;
        this.get = get;
        this.put = put;
        this.reset = reset;
        this.setType = setType;
        this.set = set;

        function _getObjectRecursive(item, property) {
            var _propertys = /\./g.test(property) ? property.split('.') : property,
                i = 0;
            if(!angular.isArray(_propertys)) {
                return item || null;
            }
            return _getRecursive(item, _propertys, i);
        }

        function _getRecursive(recursiveItem, _propertys, i) {
            if(recursiveItem) {
                if(!recursiveItem.hasOwnProperty(_propertys[_propertys.length - 1])) {
                    return _getRecursive(recursiveItem[_propertys[i++]], _propertys, i);
                } else {
                    return recursiveItem;
                }
            } else {
                return null;
            }
        }

        function _testString(string) {
            return /{|\[.*]|}/.test(string) || /true|false/.test(string) || /^[\d.]+$/.test(string);
        }

        function del(key) {
            if(!angular.isString(key)) {
                return null;
            }

            var _item = type.getItem(prefix + key);
            if(_item) {
                type.removeItem(prefix + key);
                return true;
            }

            return false;
        }

        function get(key, property) {
            if(!angular.isString(key)) {
                return null;
            }

            var item = type.getItem(prefix + key);
            if(angular.isUndefined(item) || item === null) {
                return null;
            } else {
                var _item = null;
                if(security && atob) {
                    item = atob(item);
                }
                _item = angular.isString(item) && _testString(item) ? angular.fromJson(item) : item;

                if(property && angular.isObject(_item)) {
                    if(/\./g.test(property)) {
                        var itemObj = _getObjectRecursive(_item, property),
                            _propertys = property.split('.');
                        return itemObj ? itemObj[_propertys[_propertys.length-1]] : null;
                    } else if(_item.hasOwnProperty(property)) {
                        return _item[property];
                    } else {
                        return null;
                    }
                } else {
                    return _item;
                }
            }
        }

        function put(key, property, value) {
            var _propertys = /\./g.test(property) ? property.split('.') : property,
                item = get(key),
                itemP = null,
                _value = value === null || angular.isUndefined(value) ? '' : value;

            if(angular.isArray(_propertys)) {
                itemP = _getObjectRecursive(item, property);
                if(itemP) {
                    itemP[_propertys[_propertys.length-1]] = _value;
                } else {
                    return null;
                }
            } else {
                if(item.hasOwnProperty(_propertys)) {
                    item[_propertys] = _value;
                } else {
                    return null;
                }
            }
            set(key, item);
            return get(key);
        }

        function reset() {
            for(var item in type) {
                if(item.indexOf(prefix) !== -1) {
                    del(item.replace(prefix, ''));
                }
            }
        }

        function set(key, value) {
            if(!angular.isString(key) || angular.isUndefined(value)|| !value) {
                return null;
            }

            if(angular.isArray(value) || angular.isObject(value)) {
                var item = angular.toJson(value);

                if(security && btoa) {
                    item = btoa(item);
                }

                type.setItem(prefix + key, item);
                return get(key);
            }

            if(security && btoa) {
                value = btoa(value);
            }

            type.setItem(prefix + key, value);
            return get(key);
        }

        function setType(val) {
            if(val === 'local') {
                type = window['localStorage'];
                typeStorage = 'local';
            } else {
                type = window['sessionStorage'];
                typeStorage = 'session';
            }
        }
    }
})();

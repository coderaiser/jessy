'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function (selector, obj) {
    check(selector, obj);

    var value = obj;

    selector.split('.').some(function (name) {
        value = value[name];

        return !value;
    });

    return value;
};

function check(selector, obj) {
    if (typeof selector !== 'string') throw Error('selector should be string!');

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw Error('obj should be object!');
}
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var empty = function empty(obj) {
    return !Object.keys(obj).length;
};

module.exports = function (selector, divider, obj) {
    if (!obj) {
        obj = divider;
        divider = '.';
    }

    check(selector, obj);

    if (empty(obj)) return null;

    var value = obj;

    var selects = selector.split(divider);
    var n = selects.length - 1;

    selects.some(function (name, i) {
        var nestedName = selects.slice(i).join(divider);
        value = value[nestedName] || value[name] || value;

        if (i === n - 1 && empty(obj)) {
            value = null;
            return false;
        }

        return !value;
    });

    return value;
};

function check(selector, obj) {
    if (typeof selector !== 'string') throw Error('selector should be string!');

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw Error('obj should be object!');
}
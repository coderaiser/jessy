'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function (selector, divider, obj) {
    if (!obj) {
        obj = divider;
        divider = '.';
    }

    check(selector, obj);

    var value = obj;

    var selects = selector.split(divider);

    selects.some(function (name, i) {
        var newValue = value[name];

        if (!newValue) {
            var nestedName = selects.slice(i).join(divider);
            newValue = value[nestedName] || value;
        }

        value = newValue;

        return !value;
    });

    return value;
};

function check(selector, obj) {
    if (typeof selector !== 'string') throw Error('selector should be string!');

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw Error('obj should be object!');
}
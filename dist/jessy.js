(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jessy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"jessy":[function(require,module,exports){
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

    if (empty(obj)) return undefined;

    var value = obj;

    var selects = selector.split(divider);
    var n = selects.length - 1;

    selects.some(function (name, i) {
        var nestedName = selects.slice(i).join(divider);

        if (typeof value[nestedName] !== 'undefined') {
            value = value[nestedName];
            return true;
        }

        if (!value[name]) {
            value = undefined;
            return true;
        }

        value = value[name];

        return !value;
    });

    return value;
};

function check(selector, obj) {
    if (typeof selector !== 'string') throw Error('selector should be string!');

    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw Error('obj should be object!');
}
},{}]},{},["jessy"])("jessy")
});
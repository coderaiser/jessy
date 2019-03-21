(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jessy = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"jessy":[function(require,module,exports){
'use strict';

const empty = (obj) => !Object.keys(obj).length;

module.exports = (selector, divider, value) => {
    if (!value) {
        value = divider;
        divider = '.';
    }
    
    check(selector, value);
    
    if (empty(value))
        return undefined;
    
    const selects = selector.split(divider);
    
    selects
        .some((name, i) => {
            const nestedName = selects.slice(i).join(divider);
            
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
    if (typeof selector !== 'string')
        throw Error('selector should be string!');
    
    if (typeof obj !== 'object')
        throw Error('obj should be object!');
}


},{}]},{},["jessy"])("jessy")
});

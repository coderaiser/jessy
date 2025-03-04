'use strict';

const isString = (a) => typeof a === 'string';
const isUndefined = (a) => typeof a === 'undefined';
const isEmpty = (obj) => !Object.keys(obj).length;

module.exports = (selector, divider, value) => {
    if (!value) {
        value = divider;
        divider = '.';
    }
    
    check(selector, value);
    
    if (!selector)
        return value;
    
    if (isEmpty(value))
        return undefined;
    
    const selects = selector
        .split(divider)
        .filter(Boolean);
    
    for (const [i, name] of selects.entries()) {
        const nestedName = selects
            .slice(i)
            .join(divider);
        
        if (!isUndefined(value[nestedName])) {
            value = value[nestedName];
            break;
        }
        
        if (!value[name]) {
            value = undefined;
            break;
        }
        
        value = value[name];
    }
    
    return value;
};

function check(selector, obj) {
    if (!isString(selector))
        throw Error('selector should be string!');
    
    if (typeof obj !== 'object')
        throw Error('obj should be object!');
}

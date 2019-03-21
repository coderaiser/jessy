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


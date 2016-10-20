'use strict';

module.exports = (selector, divider, obj) => {
    if (!obj) {
        obj = divider;
        divider = '.';
    }
    
    check(selector, obj);
    
    let value = obj;
    
    const selects = selector.split(divider);
    
    selects
        .some((name, i) => {
            let newValue = value[name];
            
            if (!newValue) {
                const nestedName = selects.slice(i).join(divider);
                newValue = value[nestedName] || value;
            }
            
            value = newValue;
            
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


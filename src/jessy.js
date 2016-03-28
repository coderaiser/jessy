'use strict';

module.exports = (selector, obj) => {
    check(selector, obj);
    
    let value = obj;
    
    selector
        .split('.')
        .some((name) => {
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

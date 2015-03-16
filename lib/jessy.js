(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = jessy;
    else
        global.jessy    = jessy;
    
    function jessy(selector, obj) {
        var value = obj;
        
        selector
            .split('.')
            .some(function(name) {
                value = value[name];
                
                return !value;
            });
        
        return value;
    }
    
})(this);

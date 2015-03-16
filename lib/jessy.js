(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports  = jessy;
    else
        global.jessy    = jessy;
    
    function jessy(selector, obj) {
        var ret = obj;
        
        selector
            .split('.')
            .some(function(name) {
                ret = ret[name];
                
                return !ret;
            });
        
        return ret;
    }
    
})(this);

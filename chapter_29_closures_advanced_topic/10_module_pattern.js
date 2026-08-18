// what is module pattern?

var module = (function(){
    function privateMethod(){
        // do something
    }

    return {
        publicMethod:function(){
            // can call private method();
        },
    };
})();

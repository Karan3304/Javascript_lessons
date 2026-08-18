
var module = (function(){
    function privateMethod(){
        // do something
        console.log("private");
    }

    return {
        publicMethod:function(){
            console.log("public");
        },
    };
})();

module.publicMethod();
module.privateMethod(); // TypeError : module.privateMethod is not a function
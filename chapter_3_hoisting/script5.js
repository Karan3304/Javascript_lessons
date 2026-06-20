
getName2();
console.log(x);
console.log(getName3);

var x = 7;

function getName2(){                           // in memory creation phase,it will be allocated memory
    console.log("namaste karan");
}

var getName = () => {                     // it will be treated like a variable,and allocated getName : undefined
    console.log("Namaste karan");
}

var getName3 = function(){
    console.log("swami");
}



// unusual behaviour,"Namaste karan" ans give "x = undefined"

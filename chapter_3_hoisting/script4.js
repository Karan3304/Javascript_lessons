getName();
console.log(x);
console.log(getName);

var x = 7;

function getName2(){                           // in memory creation phase,it will be allocated memory
    console.log("namaste karan");
}

var getName = () => {                     // it will be treated like a variable,and allocated getName : undefined
    console.log("Namaste karan");
}



// unusual behaviour,"Namaste karan" ans give "x = undefined"

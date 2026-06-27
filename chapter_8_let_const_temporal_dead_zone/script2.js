console.log(a)    // a is in temporal dead zone,so it cannot be accessed before it is being initialized
let a = 10;
var b = 100;    // we can access this var declaration of b using the window object,because var variables are attached to the window object,but let and const are stored in some separate space,not attached to window object

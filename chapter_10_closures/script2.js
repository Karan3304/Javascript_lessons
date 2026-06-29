// we can do following things with funcitons in JS

// we can assign function to a variable
function x(){
    var a = function y(){
        console.log("hello karan");
    }
    a();
}
x()

// we can pass a function into a function as a parameter
function greet() {
    console.log("Hello!");
}

function execute(fn) {
    fn();   // Call the function that was passed
}

execute(greet);

function sayBye() {
    console.log("Goodbye!");
}

function runTask(task) {
    console.log("Task started...");
    task();
}

runTask(sayBye);


// we can return a funciton from a function

function outer() {
    function inner() {
        console.log("Hello from inner function!");
    }

    return inner;
}

const result = outer(); // outer returns the inner function
result();               // Call the returned function

function outer() {
    return function () {
        console.log("Returned function is running!");
    };
}

const fn = outer();
fn();
// var a = function(param1){
//     console.log(param1);
// }

// a(function(){

// });

// // also

// var b = function(param1){
//     console.log(param1);
// }

// function xyz(){}

// b(xyz);

// example 1
function sayBye() {
    console.log("Goodbye!");
}

function runTask(task) {
    console.log("Starting task...");
    task();
    console.log("Task finished.");
}

runTask(sayBye);

// example 2

function greet() {
    console.log("Hello!");
}

function execute(func) {
    func(); // Calling the function that was passed
}

execute(greet);
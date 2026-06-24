var a = 10;

// a is a global object,so attached to the window object

function b(){
    var b = 90;
}

console.log(a);
console.log(window.a);
console.log(this.a);

// console.log(b)  // will give reference undefined error



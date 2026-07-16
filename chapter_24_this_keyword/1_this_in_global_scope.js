console.log(this);  // in global scope,this points to global object

let a = 5

console.log(this.a); //undefined
// let doesnt get attached to global scope so output is undefined

this.b = 5;
console.log(b);  // output - 5

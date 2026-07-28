// Convert sum(2,6,1) to sum(2)(6)(1)
function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5));
console.log(f(5)(2));
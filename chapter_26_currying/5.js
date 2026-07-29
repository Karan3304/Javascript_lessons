// Write a currying function that takes infinite arguments.

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(6)(8)());

// This is the INFINITE currying

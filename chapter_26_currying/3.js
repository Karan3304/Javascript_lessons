// question 2

// evaluate("sum")(4)(2) => 6
// evaluate("mulitply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "invalid operation";
    };
  };
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("subtract")(4)(2));

// OR

const mul = evaluate("multiply")  // now mul will always perform multiply,this is on of the usecase of the currying

console.log(mul(3)(4));
console.log(mul(3)(6));



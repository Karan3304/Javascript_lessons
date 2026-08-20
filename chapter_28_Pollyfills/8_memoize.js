function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    const argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      console.log("Calculating...");
      res[argsCache] = fn.call(context || this, ...args);
    } else {
      console.log("Getting result from cache...");
    }

    return res[argsCache];
  };
}

// Normal function
function square(num) {
  // Pretend this calculation is expensive
  for (let i = 1; i <= 100000000; i++) {}

  return num * num;
}

// Create memoized version
const memoizedSquare = myMemoize(square);

// First call
console.time("First call");
console.log(memoizedSquare(5));
console.timeEnd("First call");

// Second call with SAME argument
console.time("Second call");
console.log(memoizedSquare(5));
console.timeEnd("Second call");

// Different argument → calculation happens again
console.time("Third call");
console.log(memoizedSquare(10));
console.timeEnd("Third call");

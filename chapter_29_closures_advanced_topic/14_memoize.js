function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyfunc = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) {}
  return num1 * num2;
};

const myMemoizedClumsyFunc = myMemoize(clumsyfunc);

// console.time("first call");
// console.log(clumsyfunc(9876, 1254));
// console.timeEnd("first call");

// console.time("first call");
// console.log(clumsyfunc(9876, 1254));
// console.timeEnd("first call");
console.time("first call");
console.log(myMemoizedClumsyFunc(9876, 1254));
console.timeEnd("first call");

console.time("first call");
console.log(myMemoizedClumsyFunc(9876, 1254));
console.timeEnd("first call");

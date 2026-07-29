function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => {
  return a + b + c;
};
const curriedsum = curry(sum);

console.log(curriedsum(1)(2)(3));

console.log(curriedsum(1, 2)(3));

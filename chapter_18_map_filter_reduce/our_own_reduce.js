const arr = [12, 45, 7, 89, 23, 56, 91, 34, 18, 67, 5, 72, 39, 100, 28];

Array.prototype.myReduce = function (logic, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = logic(accumulator, this[i]);
  }

  return accumulator;
};

const sum = arr.myReduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);

const max = arr.myReduce(function (acc, curr) {
  if (curr > acc) {
    return curr;
  }

  return acc;
}, 0);

console.log(max);

const arr = [4, 4, 7, 5, 7, 8, 2, 1, 3];

function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
function GreaterThan4(x) {
  return x > 4;
}

Array.prototype.NewFilter = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (logic(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

console.log(arr.NewFilter(isOdd));
console.log(arr.NewFilter(isEven));
console.log(arr.NewFilter(GreaterThan4));

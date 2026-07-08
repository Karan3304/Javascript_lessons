const arr = [4, 4, 7, 5, 7, 8, 2, 1, 3];

function double(x) {
  return 2 * x;
}

Array.prototype.NewMap = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// const resultArr = arr.NewMap(double);
console.log(arr.NewMap(double));
console.log(arr.map(double));

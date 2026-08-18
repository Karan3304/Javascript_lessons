let square = function (x) {
  return x % 2;
};

const arr = [1, 2, 3, 4, 5, 7, 9, 14, 19];
let result = arr.filter(square);
console.log(result);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      temp.push(this[i]);
    }
  }

  return temp;
};

let res2 = arr.myFilter(square);
console.log(res2);

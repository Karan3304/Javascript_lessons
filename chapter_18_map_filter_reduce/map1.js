const arr = [5, 2, 1, 4, 7];

function double(x) {
  // this is the transformation logic
  return 2 * x;
}

function triple(x) {
  return 3 * x;
}

function binary(x) {
  // transforms array into binary array
  return x.toString(2);
}

const output1 = arr.map(double); // give the aray which has every value doubled
const output2 = arr.map(triple);
const output3 = arr.map(binary);

console.log(output1);
console.log(output2);
console.log(output3);

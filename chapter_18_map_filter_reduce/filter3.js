const arr = [5, 2, 5, 7, 3, 8];

const output1 = arr.filter((x) => {
  return x % 2;
});

const output2 = arr.filter((x) => {
  return x % 2 === 0;
});

const output3 = arr.filter((x) => {
  return x > 4;
});

console.log(output1);
console.log(output2);
console.log(output3);

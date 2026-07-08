Array.prototype.myReduce = function (logic, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = logic(accumulator, this[i]);
  }

  return accumulator;
};

const users = [
  { firstName: "karan", lastName: "swami", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// List the first names of all people with age < 30

const output = users.myReduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);

const users = [
  { firstName: "karan", lastName: "swami", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.map( (x) => x.firstName + " " + x.lastName);

console.log(output);
const users = [
  { firstName: "karan", lastName: "swami", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// list the first names of all the people with age less than 30

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);

// we can do the same using just reduce also

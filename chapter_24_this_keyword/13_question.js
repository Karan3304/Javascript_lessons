function makeUser1() {
  return {
    name: "karan",
    ref: this,
  };
}

let user1 = makeUser1();

alert(user1.ref.name); // What's the result?

// Answer: an error.

// Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

// So ref: this actually takes current this of the function.

function makeUser2() {
  return {
    name: "karan",
    ref() {
      return this;
    },
  };
}

let user2 = makeUser2();

alert(user2.ref().name); // Piyush Agarwal

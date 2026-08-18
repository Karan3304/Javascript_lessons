// write a function what whould allow us to do this

function createBase(num) {
  return function (num) {
    consolel.log(num + count);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// private counter using closure

function counter() {
  var counter = 0;

  function add(increment) {
    counter += increment;
  }

  function retrieve() {
    return "Counter = " + counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());

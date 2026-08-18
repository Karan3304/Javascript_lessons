// closure example

function makeFunc() {
  var name = "karan";
  function diaplayName() {
    console.log(name);
  }
  return diaplayName;
}

var myFunc = makeFunc();
myFunc();

// or
myFunc()();
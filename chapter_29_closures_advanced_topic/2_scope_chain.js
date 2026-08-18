// closures scope chain

var username = "karan";

function makeFunc() {
  var name = "salman khan";
  function displayName(num) {
    console.log(name, num,username);
  }
  return displayName;
}

makeFunc()(5);

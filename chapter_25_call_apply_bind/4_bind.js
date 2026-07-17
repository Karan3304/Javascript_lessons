function sayHello(){
  return "Hello " + this.name;
}

var obj = {name: "karan"};

const helloFn = sayHello.bind(obj);

console.log(helloFn());

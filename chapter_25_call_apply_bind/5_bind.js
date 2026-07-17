function sayHello(age,field){
  return "hello " + this.name + " is " + age + " and a "+field;
}

var obj = {name: "karan"};

const bindFn = sayHello.bind(obj);

console.log(bindFn(25,"software engineer"));
console.log(bindFn(55,"venture capitalist"));

// the function bindFn becomes reusable

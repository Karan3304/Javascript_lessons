function sayHello(day,status){
  return "Hello " + this.name + " today is " + day + " and feel "+ status;
}

var obj = {name: "karan"};

sayHello.apply(obj,["tuesday", "good"]); // 'Hello karan today is tuesday'
 
let car = {
  color: "red",
  company: "Ferrari",
};
let car2 = {
  color: "green",
  company: "Lambo",
};
let car3 = {
  color: "gold",
  company: "RR",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`,
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " cannot be bound as its not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car);
console.log(newFunc("$", 500000));
const newFunc2 = newFunc.myBind(car2);
console.log(newFunc2("$", 700000));
const newFunc3 = newFunc2.myBind(car3);
console.log(newFunc3("$",800000))

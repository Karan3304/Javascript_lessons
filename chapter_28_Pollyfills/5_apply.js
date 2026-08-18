// Pollyfill for apply function

let car = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`,
  );
}

// purchaseCar.call(car,"$",100000);

Function.prototype.myApply = function (context = {}, argsArray = []) {
  if (typeof this !== "function") {
    throw new Error(this + " it's not Callable");
  }

  if (!Array.isArray(argsArray)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...argsArray);
};

purchaseCar.myApply(car, ["$", 150000]);

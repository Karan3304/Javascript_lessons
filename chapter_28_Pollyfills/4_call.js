// Pollyfill for call function

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

Function.prototype.myCall = function(context = {},...args){
    if(typeof this !== "function"){
        throw new Error(this + " it's not Callable");
    }

    context.fn = this;
    context.fn(...args);
};

purchaseCar.call(car,"$",150000);
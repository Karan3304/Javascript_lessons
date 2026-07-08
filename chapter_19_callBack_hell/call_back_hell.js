const cart = ["shoes", "watch", "jeans", "pajama"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
}); // callback hell.....
// giving the control of our own written function to some other piece of code or api...this can lead to inversion of control

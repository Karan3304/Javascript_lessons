const cart = ["shoes", "watch", "jeans", "pajama"];

createOrder(cart, function (orderId) {
  proceedToPayment(function (paymentInfo) {
    showOrderSummary(function () {
      updateWallet();
    });
  });
});

// Callback hell problem using callbacks is solved by using Promise chaining

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });

// we can also write in terms of arrow functions here

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWallet(paymentInfo));

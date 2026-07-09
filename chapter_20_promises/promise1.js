const cart = ["shoes", "watch", "jeans", "pajama"];

// api.createOrder(cart, function () {
//   api.proceedToPayment();
// }); 

const promise = createOrder(cart);

promise.then(function (orderId){
    proceedTopayment(orderId);
});



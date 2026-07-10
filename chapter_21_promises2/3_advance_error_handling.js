// the consumer part of the shopping app..

const cart = ["pant", "shirt", "perfume", "watch", "kurta"];

createOrderAPI(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderID) {    // payment successfull even after cart is not valid
    return ProceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  

// producer part of the shopping app where createorder api is implemented

function createOrderAPI(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createoder
    //dababase calls
    //validating the items

    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}

function ProceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull...");
  });
}
// we have to handle error here,if the promise is rejected

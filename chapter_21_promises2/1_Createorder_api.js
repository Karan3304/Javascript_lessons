// the consumer part of the shopping app..

const cart = ["pant", "shirt", "perfume", "watch", "kurta"];

const promise = createOrderAPI(cart);
console.log(promise);

promise
  .then(function (orderID) {
    console.log(orderID);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// producer part of the shopping app where createorder api is implemented

function createOrderAPI(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createoder
    //dababase calls
    //validating the items

    if (!validateCart(cart)) {
      const err = Error("cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3);
    }
  });

  return pr;
}

function validateCart(cart) {
  // return true;
  return false;
}

// we have to handle error here,if the promise is rejected

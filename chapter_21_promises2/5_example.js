// Available Products (User's Cart for this demo)
const products = [
  { name: "pants", price: 1500 },
  { name: "shirt", price: 1200 },
  { name: "watch", price: 3500 },
  { name: "perfume", price: 2000 },
];

function validateCart(cart) {
  return true;
}

// ---------------- CREATE ORDER API ----------------

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("The given cart is not valid!!"));
      return;
    }

    const orderID = "3304";

    setTimeout(function () {
      resolve(orderID);
    }, 2000);
  });
}

// ---------------- PROCEED TO PAYMENT API ----------------

function ProceedTopayment(orderID, cart) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const totalAmount = cart.reduce(function (sum, item) {
        return sum + item.price;
      }, 0);

      resolve({
        orderID: orderID,
        totalAmount: totalAmount,
        message: `Payment Successful. Total Amount Paid : ₹${totalAmount}`,
      });
    }, 2000);
  });
}

// ---------------- ORDER SUMMARY API ----------------

function OrderSummary(products, orderID) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("\n------ ORDER SUMMARY ------");
      console.log("Order ID :", orderID);
      console.log("Total Items :", products.length);

      console.log("Items:");

      products.forEach(function (item, index) {
        console.log(`${index + 1}. ${item.name} - ₹${item.price}`);
      });

      const totalAmount = products.reduce(function (sum, item) {
        return sum + item.price;
      }, 0);

      console.log("Total Amount : ₹" + totalAmount);

      resolve({
        orderID: orderID,
        totalAmount: totalAmount,
        message: "Order Summary Created Successfully.",
      });
    }, 2000);
  });
}

// ---------------- UPDATE WALLET API ----------------

function UpdateWallet(totalAmount) {
  return new Promise(function (resolve, reject) {
    let walletBalance = 10000;

    setTimeout(function () {
      if (walletBalance < totalAmount) {
        reject(new Error("Insufficient Wallet Balance"));
        return;
      }

      walletBalance -= totalAmount;

      resolve({
        deductedAmount: totalAmount,
        remainingBalance: walletBalance,
        message: "Wallet Updated Successfully.",
      });
    }, 2000);
  });
}

// ---------------- CONSUMER CODE ----------------

createOrder(products)
  .then(function (orderID) {
    console.log("Your Order is Placed with Order ID :", orderID);

    return ProceedTopayment(orderID, products);
  })

  .then(function (paymentInfo) {
    console.log(paymentInfo.message);

    return OrderSummary(products, paymentInfo.orderID);
  })

  .then(function (summary) {
    console.log(summary.message);

    return UpdateWallet(summary.totalAmount);
  })

  .then(function (walletInfo) {
    console.log("\n------ WALLET DETAILS ------");
    console.log(walletInfo.message);
    console.log("Amount Deducted : ₹" + walletInfo.deductedAmount);
    console.log("Remaining Balance : ₹" + walletInfo.remainingBalance);
  })

  .catch(function (err) {
    console.log(err.message);
  });

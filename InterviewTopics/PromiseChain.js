const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderID) {
    return proceedToPayment(orderID)
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has beed debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });



function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 5000)
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
}
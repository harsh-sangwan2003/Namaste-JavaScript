const cart = ["kurta", "pants", "shoes"];

const promise = createOrder(cart);

promise.then(function (orderId) {

    console.log(orderId);
    return orderId;

}).then(function () {

    return proceedToPayment(orderId);

}).then(function (paymentInfo) {

    console.log(paymentInfo);

}).catch(err => {

    console.log("Error is : ", err);
}).then(function () {

    console.log("I will be definitely be called.");
})

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {

    return new Promise((resolve, reject) => {

        resolve("Payment successful");
    })
}

function createOrder(cart) {

    return new Promise((resolve, reject) => {

        if (!validateCart(cart))
            reject();

        const orderId = "12345";

        if (orderId)
            resolve(orderId);
    })
}
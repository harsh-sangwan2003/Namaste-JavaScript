createOrder(cart).then(function (orderId) {

    return proceedToPayment(orderId);
}).then(function (paymentInfo) {

    return showOrderSummary(paymentInfo);
}).then(function (paymentInfo) {

    return updateWalletBalance(paymentInfo);
})
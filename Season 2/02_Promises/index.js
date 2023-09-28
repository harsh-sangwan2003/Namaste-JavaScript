// const cart = ["shoes", "kurta", "pants"];

// createOrder(cart, function (orderId) {

//     proceedToPayment(orderId);
// })

// const promise = createOrder(cart);
// promise.then(function (orderId) {

//     proceedToPayment(orderId);
// })

const GITHUB_API = "https://api.github.com/users/harsh-sangwan2003";

const user = fetch(GITHUB_API);

user.then(function(data){

    console.log(data);
})
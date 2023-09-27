console.log("Start");

setTimeout(function cbT() {
    console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function () {

    console.log("CB Neflix");
})

console.log("End");
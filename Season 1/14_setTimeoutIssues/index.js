console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 5000);

let startDate = new Date().getTime();
let endDate;

while (endDate < startDate + 10000) {

    endDate = new Date().getTime();
}

console.log("Expires");
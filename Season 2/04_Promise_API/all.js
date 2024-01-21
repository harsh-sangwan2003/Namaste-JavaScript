function fn1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(1000);
        }, 3000)
    })
}

function fn2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject(2000);
        }, 2000)
    })
}

function fn3() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(3000);
        }, 1000)
    })
}

const p1 = fn1();
const p2 = fn2();
const p3 = fn3();

// Resolve all promises and return an array of results and reject if any of the promises reject.
Promise.all([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})
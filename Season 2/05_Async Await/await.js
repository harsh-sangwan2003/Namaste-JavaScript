const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise resolved value.');
    }, 5000);
})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise resolved value.');
    }, 10000);
})

// await can only be used inside async function or top level bodies
async function handlePromise() {

    // JS will wait for the promise to be resolved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

function handlePromise2() {

    // JS Engine will not wait for the promise to be resolved
    p.then(val => {

        console.log(val);
    })

    console.log("Namaste JavaScript");
}

handlePromise();
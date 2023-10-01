const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise resolved successfully.');
    }, 10000);
})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise resolved successfully.');
    }, 5000);
})

async function handlePromise() {

    console.log("Hello World!");
    // JS Engine waits for the promise to be resolved
    const val1 = await p1 + await p2;

    console.log("Namaste JavaScript");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

// The execution of this async function will suspend
handlePromise();
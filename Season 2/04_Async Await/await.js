const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise resolved successfully.');
    }, 10000);
})

async function handlePromise() {

    const val = await p;

    console.log("Hi");
    console.log(val);
    console.log("Bye");
}

handlePromise();
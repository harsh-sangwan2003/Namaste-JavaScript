// always returns a promise
// async function getData(){

//     return "Namaste";
// }

const p = new Promise((resolve, reject) => {

    resolve('Promise resolved value.');
})

async function getData() {

    return p;
}

const data = getData();
console.log(data);
data.then(res => {
    console.log(res);
})
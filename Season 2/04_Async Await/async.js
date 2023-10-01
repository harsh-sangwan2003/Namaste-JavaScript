const p = new Promise((resolve, reject) => {

    resolve('Promise resolved successfully');
})

async function getData() {

    return p;
}

async function fn1() {

    return 2;
}

let fn = fn1();
console.log(fn);

let data = getData();
data.then(function (res) {

    console.log(res);
})
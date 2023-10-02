let counter = 0;

function getData() {

    console.log("Fetching data...", ++counter);
}

function debounce(getData, delay) {

    let id;
    return function () {

        clearTimeout(id);
        args = arguments;

        id = setTimeout(() => {
            getData(args);
        }, delay);
    }
}

let betterFunction = debounce(getData, 300);
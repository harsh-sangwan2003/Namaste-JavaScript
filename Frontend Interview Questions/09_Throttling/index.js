let counter = 0;

function expensive() {

    console.log("Button cliked " + ++counter + " times");
}

function throttle(func, delay) {

    let flag = true;

    return function () {

        if (flag) {

            func();
            flag = false;

            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
let betterFunction = throttle(expensive, 2000);
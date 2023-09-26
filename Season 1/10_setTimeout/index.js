function x() {

    for (var i = 1; i <= 5; i++) {

        function close(x) {
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }

    console.log("Namaste JavaScript");
}

x();
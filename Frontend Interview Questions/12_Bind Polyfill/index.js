let name = {

    firstName: "Akshay",
    lastName: "Saini"
}

let printFullName = function () {

    console.log(`${this.firstName} ${this.lastName}`);
}

let printName = printFullName.bind(name);
printName();

Function.prototype.myBind = function (...args) {

    let obj = this;
    let params = args.slice(1);

    return function (...args2) {

        obj.apply(args[0], [...params, ...args2]);
    }
}

let printName2 = printFullName.myBind(name);
printName2();
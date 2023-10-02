let name = {

    firstName: "Akshay",
    lastName: "Saini"
}

let printFullName = function (hometown, state) {

    console.log(`${this.firstName} ${this.lastName} from ${hometown} ${state} `);
}

let name2 = {

    firstName: "Sachin",
    lastName: "Tendulkar"
}

//call
printFullName.call(name2, "Mumbai", "Maharashtra");

// apply
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind
let fn = printFullName.bind(name2, "Mumbai", "Maharashtra");
fn();
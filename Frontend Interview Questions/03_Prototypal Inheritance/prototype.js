let object = {

    name: "Akshay",
    city: "Dehradun",
    getIntro: function () {

        console.log(`${this.name} from ${this.city}`);
    }
}

let object2 = {

    name: "Rahul"
}

object2.__proto__ = object;
console.log(object2.getIntro());
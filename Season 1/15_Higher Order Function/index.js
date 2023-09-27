const calculate = function (radius, logic) {

    const output = [];

    for (let i = 0; i < radius.length; i++) {

        output.push(logic(radius[i]));
    }

    return output;
}

const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

console.log(calculate([1, 2, 3, 4], diameter));
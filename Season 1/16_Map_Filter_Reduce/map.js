const arr = [1, 2, 3, 4, 5];

const double = arr.map(ele => ele * 2);
const triple = arr.map(ele => ele * 3);
const binary = arr.map(ele => ele.toString(2));

console.log(double);
console.log(triple);
console.log(binary);
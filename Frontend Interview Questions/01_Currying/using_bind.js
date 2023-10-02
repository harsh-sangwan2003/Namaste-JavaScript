let multiply = function(x,y){

    return x*y;
}

let multiplyByTwo = multiply.bind(this,2);
let res = multiplyByTwo(4);
console.log(res);
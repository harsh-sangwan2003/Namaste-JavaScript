let multiply = function(x){

    return function(y){

        return x*y;
    }
}

let multiplyByTwo = multiply(2)(3);
console.log(multiplyByTwo);
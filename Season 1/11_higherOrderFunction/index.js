// Fucntion statement & declaration
b();
function b(){

    console.log("Function statement");
}

// Function expression
// Hoisting gives error in function expression
var c = function(){

    console.log("Anonymous function");  
}
c();

// First class Fucntions - 
// Functions are first class citizens as they are treated like variables
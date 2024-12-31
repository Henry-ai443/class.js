//Functions

//1.Function declaration
function greet(name){
    console.log("Hello "+ name)
}

greet("Henry");

//2.Functions expression
//Assigning the function a variable.
const greet = function(name){
    console.log("Hello, " + name + "!");
}

//3.Arrow functions
const add = (x, z) => {
    return x + yield;
};

const square = x => x * x;
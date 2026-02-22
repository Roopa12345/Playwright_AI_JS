//var, let, const

//var - Function Scoped

var a = 10; //Global Scope

console.log(a);

//Defination of the function
function printHello() {
    console.log("Hello World");
    var a = 20; //Function Scope
    console.log("Inside the function: " + a);
    if (true) {
        var a = 30; //Function Scope
        console.log("Inside the if block: " + a);
    }
    console.log("Outside the if block: " + a);
}

//Calling of the function
printHello();

//let - Block Scoped

let b = 100; //Global Scope

console.log(b);

//Defination of the function
function printHello1() {
    console.log("Hello World");
    let b = 200; //Function Scope
    console.log("Inside the function: " + b);
    if (true) {
        let b = 300; //Function Scope
        console.log("Inside the if block: " + b);
    }
    console.log("Outside the if block: " + b);
}

//Calling of the function
printHello1();

//var nn = "Roopa";
//let nn = "Roopa";

const pi = 3.14;
console.log(pi);
//pi = 3.1416; //Error - Cannot reassign the value of a constant



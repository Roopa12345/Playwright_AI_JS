// console.log(name1);
// var name1 = "John";
// console.log(name1);

// -- Phase 1 : Memory Creation -----
// var a = undefined;
// var b = undefined;

console.log(a);
var a = "Roopa";
console.log(b);

// -- Phase 2 : Execution -----

console.log(a); // undefined
var a = "Roopa"; // Roopa
console.log(a); // Changed to Roopa

//Hoisting
//Hoisting is the process of moving the declaration of a variable to the top of the scope.
//Hoisting is only applicable to var variables.
//Hoisting is not applicable to let and const variables.
//Hoisting is not applicable to function declarations.

console.log(greeting); // Output : undefined
var greeting = "Hello World";
console.log(greeting); // Output : Hello World

//Behind the scene
// var greeting;   <--- Hoisted with undefined value
// console.log(greeting); // Output : undefined
// greeting = "Hello World"; <--- Assigned the value
// console.log(greeting); // Output : Hello World









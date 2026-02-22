console.log("Will see if later");

if (true) {
    console.log("Inside the if block");
    var a = 10;
    console.log(a);
}

console.log("Outside the if block");
console.log(a);

//Behind the scene
// var a; // undefined
// console.log(a); // undefined
// a = 10; // 10
// console.log(a); // 10

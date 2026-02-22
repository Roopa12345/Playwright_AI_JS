let amul = null;
let val = amul ?? "Nandini Milk"
let val2 = null ?? "default"; // "default" ( ?? returns right hand value if left hand value is null or undefined)
//Modern JS - Typescript.

val = "which milk? ->" + val;
console.log(val);
// Very useful in test data handling
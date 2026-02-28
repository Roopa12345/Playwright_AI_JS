let name1 = "" ? "Has name" : "No name";
console.log("n1 " + name1); //No name, because "" is false

let name2 = "" || "No name";
console.log("n2 " + name2); //No name, because "" is false

let name3 = "" ?? "No name";
console.log("n3 " + name3); //No name, because "" is false

let name4 = "" || "Default";
console.log("n4 " + name4); //Default, because "" is false

let name5 = 0 ?? "Default";
console.log("n5 " + name5); //0, because 0 is false

let name6 = 0 || "Default";
console.log("n6 " + name6); //Default, because 0 is false

let name7 = undefined ?? "Default";
console.log("n7 " + name7); //Default, because undefined is false



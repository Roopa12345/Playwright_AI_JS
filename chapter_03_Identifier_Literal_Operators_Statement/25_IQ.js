0 == ""; // true (both converted to 0)
0 == "0"; // true (both converted to 0)
0 == false; // true (both converted to 0)
null == undefined; // true (special rule, they only equal each other)
" \t\n" == 0; // true (all whitespace is converted to 0)

//Rule breaker (all below are false)

null == 0; //false
null == ""; //false
null == false; //false
undefined == 0; //false
undefined == ""; //false
undefined == false; //false
NaN == NaN; //false

//IQ Questions
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 == ""); //true
console.log(0 === ""); //false
console.log(0 == "0"); //true
console.log(0 === "0"); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log("0" == false); //false
console.log("" == "0"); //false
console.log("" === "0"); //false
console.log(null == 0); //false
console.log(null === 0); //false
console.log(null == ""); //false
console.log(null === ""); //false
console.log(null == false); //false
console.log(null === false); //false
console.log(undefined == 0); //false
console.log(undefined === 0); //false
console.log(undefined == ""); //false
console.log(undefined === ""); //false
console.log(undefined == false); //false
console.log(undefined === false); //false
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false


console.log(0 == "");
console.log(0 == "0");
console.log(0 == false);
console.log(null == undefined);
console.log(" \t\n" == 0);
console.log(null == 0);
console.log(null == "");
console.log(null == false);
console.log(undefined == 0);
console.log(undefined == "");
console.log(undefined == false);
console.log(NaN == NaN);






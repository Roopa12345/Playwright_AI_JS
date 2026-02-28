let value = "5";
switch (value) {
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String 5");
        break;



}
// Output: String 5
//Switch uses strict equality (===) for comparison, so "5" is not equal to 5
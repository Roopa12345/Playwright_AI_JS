// Step 1  - Defination of functions
function getUserStatus() {
    // var status_Code; // undefined; - Not shown to you. But it is there.
    console.log(status_Code);
    var status_Code = "Active";
    console.log(status_Code);
}

// Step 2 - Calling of the function
getUserStatus();

//Note : var is function-scoped, so status is hoisted to
//the top of getUserStatus(), NOT the global scope.
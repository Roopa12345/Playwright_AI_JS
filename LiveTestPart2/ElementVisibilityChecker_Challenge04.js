// Initialize the variables
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

// Determine element state
let state;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
}
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
}
else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
}
else if (isPresent === false) {
    state = "NOT FOUND";
}

// Determine severity using ternary operator
let severity = (isPresent === false)
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

// QA Action based on state
let action;

if (state === "READY") {
    action = "Proceed with interaction.";
}
else if (state === "DISABLED") {
    action = "Element is visible but disabled. Wait for enable state or check preconditions";
}
else if (state === "HIDDEN") {
    action = "Check visibility conditions or wait for UI update.";
}
else if (state === "NOT FOUND") {
    action = "Fail test immediately and log defect.";
}

// Print Report
console.log("----- UI Element Validation Report -----");
console.log("Status:", state);
console.log("Severity:", severity);
console.log("Action:", action);
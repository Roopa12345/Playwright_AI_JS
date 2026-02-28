// Array of test results
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

//initialize the variables
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Loop through test results
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

// A test report with Total tests
let totalTests = testResults.length;

// Pass rate percentage
let passRate = ((passCount / totalTests) * 100).toFixed(2);

// Verdict logic
let verdict;

if (failCount === 0) {
    verdict = "Ready for Release";
} else if (failCount <= 2) {
    verdict = "Minor failures. Review before release";
} else {
    verdict = "Major failures,Block Release";
}

// Print report
console.log("----- Test Report -----");
console.log("Total Tests:", totalTests);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Skipped:", skipCount);
console.log("Pass Rate:", passRate + "%");
console.log("Verdict:", verdict);
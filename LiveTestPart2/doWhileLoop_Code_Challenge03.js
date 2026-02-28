//initialize the variables
let MAX_ATTEMPTS = 5;
let attempt = 0;
let success = false;

//do while loop
do {
    attempt++;
    console.log(`Attempt ${attempt}:`);

    // Simulate API call (40% success chance)
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        success = true;
        console.log("✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempts(s)");
    } else {
        console.log("❌ FAILED (Timeout/Error)");
    }

} while (!success && attempt < MAX_ATTEMPTS);

// Final Result
console.log("\n----- Final Result -----");

if (success) {
    console.log(`Success after ${attempt} attempt(s).`);
} else {
    console.log(`Failed after ${MAX_ATTEMPTS} attempts. Blocking further retries.`);
}
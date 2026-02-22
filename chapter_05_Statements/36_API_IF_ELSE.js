let statusCode = 200;

if (statusCode == 200) {
    console.log("Working Fine!");
}
else if (statusCode === 201) {
    console.log("Created - OK");
}
else if (statusCode === 400) {
    console.log("Bad Request - OK");
}
else if (statusCode === 401) {
    console.log("Unauthorized - OK");
}
else if (statusCode === 403) {
    console.log("Forbidden - OK");
}
else if (statusCode === 404) {
    console.log("Not Found - OK");
}
else if (statusCode === 500) {
    console.log("Internal Server Error - OK");
}
else {
    console.log("Unknown status code");
}

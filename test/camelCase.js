const {camelCase} = require("../utilsverse")


// Test Case - 1
if (camelCase("abkl efgh") === "abklEfgh") {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (camelCase("abcd efgh iikl") === "abcdEfghIikl") {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (camelCase("abcd") === "abcd") {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}
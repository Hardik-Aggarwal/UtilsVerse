const {isLeap} = require("../utilsverse")

// Test Case - 1
if (!isLeap(2021)) {
    console.log("Test Case 1 passed.");
} else {
    console.log("Test Case 1 failed.");
}

// Test Case - 2
if (!isLeap(2022)) {
    console.log("Test Case 2 passed.");
} else {
    console.log("Test Case 2 failed.");
}

// Test Case - 3
if (isLeap(2020)) {
    console.log("Test Case 3 passed.");
} else {
    console.log("Test Case 3 failed.");
}
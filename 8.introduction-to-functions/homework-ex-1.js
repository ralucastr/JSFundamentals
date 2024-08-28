// Function declaration to determine if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Check and log the result for 10, -5, and 0
const ex1 = checkNumber(10);
console.log(`10 is ${ex1}.`); // Output: positive
console.log(`-5 is ${checkNumber(-5)}.`); // Output: negative
console.log(`0 is ${checkNumber(0)}.`);   // Output: zero

// Final Output:
// 10 is positive.
// -5 is negative.
// 0 is zero.

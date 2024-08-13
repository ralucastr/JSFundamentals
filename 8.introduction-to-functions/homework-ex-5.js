// Array of numbers
const numbers = [10, 25, -3, 7, 15];

// Use some with an arrow function to check if there's a negative number
const hasNegative = numbers.some(num => num < 0);

// Log the result
console.log(`Is there a negative number? ${hasNegative}`);

// Final Output
// Is there a negative number? true
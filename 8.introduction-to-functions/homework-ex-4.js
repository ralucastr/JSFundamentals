// Array of numbers
const numbers = [3, 7, 11, 18, 21, 30];

// Use find with an arrow function to find the first even number
const firstEven = numbers.find(num => num % 2 === 0);

// Log the result
console.log(`The first even number is: ${firstEven}`);

// Final Output
// The first even number is: 18

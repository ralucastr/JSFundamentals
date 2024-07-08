// 1. Example of string concatenation using the Plus Operator (+) in JavaScript

// Define two strings
let firstName = "John";
let lastName = "Doe";

// Concatenate the strings with a space in between
let fullName = firstName + " " + lastName;

// Output the concatenated string
console.log(fullName); // "John Doe"


// 2. Example of string concatenation using the Plus Equals Operator (+=) in JavaScript

// Define the initial string
let message = "Hello";

// Append more strings to the initial string
message += ", ";
message += "World";
message += "!";

// Output the concatenated string
console.log(message); // "Hello, World!"


// 3. Example of string concatenation using Template Literals (Backticks) in JavaScript

// Define variables
let firstName = "Jane";
let lastName = "Doe";
let age = 28;

// Concatenate strings and variables using template literals
let userDetails = `Name: ${firstName} ${lastName}, Age: ${age}`;

// Output the concatenated string
console.log(userDetails); // "Name: Jane Doe, Age: 28"


// 4. Example of string concatenation using the concat() method in JavaScript

// Define three strings
let greeting = "Hello";
let separator = ", ";
let name = "Alice";

// Use the concat() method to join the strings
let completeMessage = greeting.concat(separator, name, "!");

// Output the concatenated string
console.log(completeMessage); // "Hello, Alice!"

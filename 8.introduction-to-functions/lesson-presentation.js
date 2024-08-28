// Function Declaration
// greet("Alex"); // Output: Hello, Alex!
// greet(); // Output: Hello, Felix!

// function greet(
//     name = "Felix", 
//     id = 1,
//     age = 28
// ) {
//     console.log("Hello " + name);
// }


// // Encapsulation [ not ok ]
// function exampleFunction() {
//     // some code executes

//     function otherAction() {
//         return 2;
//     }

//     // here we need to make another action
//     otherAction();
//     return 1;
// }


// Encapsulation [ ok ]
// function exampleFunction() {
//     // some code executes

//     const otherAction = function() {
//         return 2;
//     }

//     // here we need to make another action
//     otherAction();
//     return 1;
// }



// Function Expression
// const greet = function(name = "Felix") {
//     console.log("Hello, " + name + "!");
// };
  
// greet(); // Output: Hello, Bob!



/// Functions IIFE
// function greet(name = "Felix") {
//     console.log("Hello " + name);
// }

// greet();

// (function() {
//     console.log("This is an IIFE"); 
// })();
    

// Arrow Functions
// Basic Expression
// const greet = (name) => {
//     console.log("Hello, " + name + "!");
// };

// greet("Charlie"); // Output: Hello, Charlie!

// const isNumberOne = (number) => number == 1 && number > 0; // without "return"
// console.log(isNumberOne(2)); // Output: false


// // Multi line expression ( requires return )
// const isNumberOne = (number) => {
// 	return number == 1;
// }

// console.log(isNumberOne(2)); // Output: false


// Multi line expression ( requires return )
// const isString = (number) => {
// 	if (number === "1") {
// 		return "Is string";
// 	}

// 	return "Is not string";
// }

// console.log(isString(1)); // Output: "Is not string"


// Single Line - Find Expression Example
// const array = [1, 2, 3, 4];
// const result = array.find((number) => number === 4);
// console.log(result); // Output: 4

// Single Line - Some Expression Example
// const array = [1, 2, 3, 4];
// const haveFour = array.some((number) => number === 4);
// console.log(haveFour);  // Output: true

// Single Line - Every Expression Example
// const array = [1, 2, 3, 4];
// const haveOnlyFour = array.every((number) => number === 4);
// console.log(haveOnlyFour); // Output: false


// Single Line - ForEach Expression Example [ Not Working ]
// const array = [1, 2, 3, 4];
// array.forEach((number) => number + 1);
// console.log(array); // Output: [1, 2, 3, 4]

// Single Line - ForEach Expression Example [ Not Working ]
// const array = [1, 2, 3, 4];
// array.forEach((number) => number = number + 1);
// console.log(array); // Output: [1, 2, 3, 4]

// Single Line - ForEach Expression Example [ Working ]
// const array = [
//     {number: 1},
//     {number: 2},
//     {number: 3},
//     {number: 4}
// ];

// array.forEach((object) => object.number = object.number + 1);
// console.log(array); 
// Output: [ { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 } ]


// const array = [
//     {number: 1},
//     {number: 2},
//     {number: 3},
//     {number: 4}
// ];

// array.forEach((object) => {
//     object.number = object.number + 1;
//     object.message = "Object with the new number " + object.number; 
// });

// console.log(array); 
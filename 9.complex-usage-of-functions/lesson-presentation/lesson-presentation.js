// function higherOrderFunction(callback) {
//     callback();
// }
  
// higherOrderFunction(function() {
//     console.log("Callback function executed!");
// });


// /// Example 1
// function higherOrderFunction(callback) {
//     callback();
// }
  
// function example() {
//     console.log("Example text");
// }

// higherOrderFunction(example);


//// Other example
// const colorButton = (indexButton) => {
//     if (indexButton === 1) {
//         return "color-red-button";
//     } 

//     return "color-default-button";
// }

// const changeData = (changeButtonColor) => {
//     // ... loading data
//     const defaultIndex = 2;
//     const data = {};

//     changeButtonColor(data.index ?? defaultIndex)
//     if (data) {
//         changeButtonColor(data.index);
//     } else {
//         changeButtonColor(defaultIndex);
//     }
// }

// changeData(colorButton);

// // Ex 1
// changeData(function(data) {
//     if (data) {
//         colorButton(data.index);
//     } else {
//         colorButton(defaultIndex);
//     }
// })

// // Ex 2
// changeData(function(index) {
//     if (index === 1) {
//         return "color-red-button";
//     } 

//     return "color-default-button";
// })


// function fetchData(callback) {
//     // Simulate a data fetch
//     setTimeout(() => {
//       const data = { name: "Alice" };
//       callback(data);
//     }, 1000);
// }
  
// function handleData(data) {
//     console.log("Data received:", data);
// }
  
// fetchData(handleData); // Output: Data received: { name: 'Alice' }

// function printResponse(data) {
//     console.log(data);
// }

// async function fetchData(callback) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     printResponse(data);
// }
  
// fetchData();

// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }
  
// greet(); // Output: Hello, Guest
// greet("Alice"); // Output: Hello, Alice

// function greet() {
//     console.log("Hello, " + this.numbers);
// }
  
// const person = { name: "Alice", numbers: [1,2,3,4]};
// greet.call(person); // Output: Hello, Alice

import { PI } from './example-for-export.js';

console.log(PI);
// Numbers
let num1 = 3;
let num2 = 3.14;

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
console.log(3 / 0); // Infinity
console.log(-3 / 0); // -Infinity
console.log(0 / 0); // NaN
console.log(3 / 0 === Infinity); // true 
console.log(3 / 0 === -Infinity); // false
console.log(0 / 0 === NaN); // false
console.log(3 / 0 === NaN); // false
console.log(3 / 0 === 3 / 0); // false

// Strings
let str1 = "Hello, World!";
let str2 = 'Hello, World!';
let str3 = `Hello, World!`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);
console.log(str1 === str2); // true
console.log(str1.length); // 13
console.log(str1[0]); // H
console.log(str1[12]); // !
console.log(str1[13]); // undefined
console.log(str1[13] === undefined); // true
console.log(str1[13] === str2[13]); // true
console.log(str1[13] === str3[13]); // true
console.log(str1[13] === str1[13]); // true



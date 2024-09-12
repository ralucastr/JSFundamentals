// example 1
// let message = "Hello, World!";
// console.log(message); // Output: "Hello, World!"

// message = 42;  // No type error, now the variable is a number
// console.log(message); // Output: 42

let message: string = "Hello, TypeScript!";
console.log(message); // Output: "Hello, TypeScript!"

// This will cause a compile-time error in TypeScript
// message = 42; // Error: Type 'number' is not assignable to type 'string'


// example 2
// Typescript Variant
interface User {
    name: string;
    age: number;
}

function greet(user: User): string {
    return `Hello, ${user.name}. You are ${user.age} years old.`;
}

let user: User = {
    name: "Alice",
    age: 25 
};
console.log(greet(user)); // Output: Hello, Alice. You are 25 years old.

// Javascript variant
// function greet(user) {
//     return `Hello, ${user.name}. You are ${user.age} years old.`;
// }
  
// let user = { name: "Alice", age: 25 };
// console.log(greet(user)); // Output: Hello, Alice. You are 25 years old.



// Example 3
// Typescript
class Person {
    name: string;
    age: number;
  
    // Constructor to initialize properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the class
const person1 = new Person("Alice", 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
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
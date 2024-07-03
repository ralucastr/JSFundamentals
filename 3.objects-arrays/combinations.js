// Array in an object
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    booksRead: ['The Alchemist', 'The Power of Now', 'The Art of War'] // We use the : operator to assign an array to a property
};


booksRead = ['The Alchemist', 'The Power of Now', 'The Art of War']; // We use the assignment operator when defining an array

console.log(person.booksRead[1]); // The Power of Now


// Objects in an array
const students = [
    {
        name: "Alice Johnson",
        age: 21,
        grades: [85, 92, 88]
    },
    {
        name: "Bob Smith",
        age: 22,
        grades: [78, 85, 90]
    },
    {
        name: "Charlie Brown",
        age: 20,
        grades: [92, 91, 89]
    }
];

// Accessing properties of objects in the array
console.log(students[0].name); // Output: Alice Johnson
console.log(students[1].age); // Output: 22
console.log(students[2].grades); // Output: [92, 91, 89]

// Accessing specific grades
console.log(students[0].grades[1]); // Output: 92
console.log(students[1].grades[2]); // Output: 90
console.log(students[2].grades[0]); // Output: 92

let person = {
    name: 'John',
    age: 30,
    isStudent: false
};

person.lastName = 'Doe';

// Access the properties of an object
console.log(person.name); // John
console.log(person['name']); // John
console.log(person);
console.log(`${person.name} ${person.lastName}`);
console.log(`The person's name is ${person['name']}.`); // The person's name is John.
console.log(`The person's name is ${person.name}.`);

// // Loop through the properties of an object
// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }

// // Add a new property
// person.email = 'john.doe@example.com';

// // Modify an existing property
// person.age = 31;

// // Add a new property with a name that includes a space
// person['phone number'] = '123-456-7890';

// // Modify an existing property
// person['isStudent'] = true;

// console.log(person);

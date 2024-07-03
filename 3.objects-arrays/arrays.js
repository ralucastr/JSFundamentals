let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
console.log(fruits[0]);
// console.log(fruits[]); // Error
console.log(fruits[3]); // Undefined

// Add an element to the end of the array
fruits.push('Orange');
console.log(fruits);

// Remove the last element from the array
fruits.pop();
console.log(fruits);

fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits);
fruits.push('Banana');

fruits.splice(1, 0, 'Mango'); // Adds 'Mango' at index 1 without removing any element
fruits[1] = 'Pear'; // Replaces the element at index 1
console.log(fruits);

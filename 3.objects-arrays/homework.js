// Step 1: Define Animals
const lion = {
    name: "Lion",
    foodType: "Meat",
    dailyRequirement: 5,
    foodStock: 20
};

const elephant = {
    name: "Elephant",
    foodType: "Vegetables",
    dailyRequirement: 10,
    foodStock: 50
};

const monkey = {
    name: "Monkey",
    foodType: "Fruits",
    dailyRequirement: 3,
    foodStock: 15
};

// Step 2: Create Zoo Array
const zoo = [lion, elephant, monkey];

// Step 3: Check initial food stock for all animals
console.log(`${zoo[0].name} has ${zoo[0].foodStock} units of ${zoo[0].foodType}.`);
console.log(`${zoo[1].name} has ${zoo[1].foodStock} units of ${zoo[1].foodType}.`);
console.log(`${zoo[2].name} has ${zoo[2].foodStock} units of ${zoo[2].foodType}.`);

// Step 4: Feed the animals and update stock
zoo[0].foodStock -= zoo[0].dailyRequirement;
console.log(`${zoo[0].name} has been fed. Remaining ${zoo[0].foodType} stock: ${zoo[0].foodStock}`);

zoo[1].foodStock -= zoo[1].dailyRequirement;
console.log(`${zoo[1].name} has been fed. Remaining ${zoo[1].foodType} stock: ${zoo[1].foodStock}`);

zoo[2].foodStock -= zoo[2].dailyRequirement;
console.log(`${zoo[2].name} has been fed. Remaining ${zoo[2].foodType} stock: ${zoo[2].foodStock}`);

// Step 5: Check food stock after feeding
console.log(`${zoo[0].name} now has ${zoo[0].foodStock} units of ${zoo[0].foodType}.`);
console.log(`${zoo[1].name} now has ${zoo[1].foodStock} units of ${zoo[1].foodType}.`);
console.log(`${zoo[2].name} now has ${zoo[2].foodStock} units of ${zoo[2].foodType}.`);

//---------------------------------------------------------------------------------------------------------------------//

// // Creating a book object
// let book = {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     pages: 180
// };

// // Modify the properties
// book.title = "Brave New World - Updated Edition";
// book.pages = 300;

// // Print the modified book properties
// console.log("Book:");
// console.log(`Title: ${book.title}`);
// console.log(`Author: ${book.author}`);
// console.log(`Pages: ${book.pages}`);

// Creating a library object
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "Gone With The Wind", author: "Margaret Mitchell" }
    ]
};

// // Update the book list
// library.books.push({ title: "War and Peace", author: "Lev Tolstoi" });

// // Print the library information
// console.log("\nLibrary:");
// console.log(`Name: ${library.name}`);
// console.log("Books:");
// library.books.forEach((book, index) => {
//     console.log(`${index + 1}. ${book.title} by ${book.author}`);
// });

// Create an object representing John with a list of books he has read
let john = {
    name: "John Smith",
    readBooks: [
        { title: "1984", author: "George Orwell" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "Gone With The Wind", author: "Margaret Mitchell" }
    ]
};

// // Access and print the 2nd book read by John
let secondBookReadByJohn = john.readBooks[1];
console.log(`Title: ${secondBookReadByJohn.title}`);
console.log(`Author: ${secondBookReadByJohn.author}`);


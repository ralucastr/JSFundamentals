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

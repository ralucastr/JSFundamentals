let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "Gone With The Wind", author: "Margaret Mitchell" }
    ]
};

console.log("First Book Object:", library.books[0]);

// Store the 1st book in a variable
let firstBook = library.books[0];

// Print the whole book object
console.log("First Book Object:", firstBook);

console.log(`First Book Object: ${library.books}`);


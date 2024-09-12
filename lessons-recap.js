// async replace method
function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { userId: 1, name: 'Alice' };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Data received:", data);
}
  
fetchData(displayData);



// callback with high order function
function readLargeFile(callback) {
    setTimeout(() => {
      const fileContent = "This is the content of a large file.";
      callback(fileContent);
    }, 3000);
}
  
readLargeFile((content) => {
    console.log(content);
});



// method of handling events
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button was clicked!');
});


// Error handling
function fetchData(callback) {
    setTimeout(() => {
      const error = false; // Simulate an error condition
      if (error) {
        callback('An error occurred', null);
      } else {
        callback(null, { userId: 1, name: 'Alice' });
      }
    }, 2000);
}

fetchData((err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Data received:', data);
    }
});


// Callbacks are fundamental to JavaScript, especially for managing asynchronous behavior.
// With the advent of Promises and async/await, some callback use cases (like handling asynchronous flows)
// can now be handled differently, but callbacks remain crucial for:
// - Event handling
// - Array methods
// - Customizable functions
// - Legacy code patterns



const name = "Alex";
const mentorName = "Alex"; // camel case
const mentor_name =  "2";
const MENTOR_NAME = "Felix"; // snake case

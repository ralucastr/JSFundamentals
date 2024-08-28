// Async function to fetch data from an API
async function fetchData() {
    console.log("Fetching data...");

    // Simulate fetching data from an API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    return data;
}

// Async function to display the fetched data
async function displayData() {
    const data = await fetchData(); // Wait for the data to be fetched
    console.log("Fetched Data:", data);
}

// Call the function to display data
displayData();

// Function that simulates downloading a file
function downloadFile(url, callback) {
    console.log(`Starting download from ${url}...`);

    // Simulate a download delay
    setTimeout(() => {
        const fileData = "File content from " + url;
        console.log("Download complete.");

        // Call the callback function with the file data
        callback(fileData);
    }, 2000); // Simulates a 2-second download time
}

// Callback function to process the downloaded file
function processFile(fileData) {
    console.log(`Processing file: ${fileData}`);
}

// Call the downloadFile function with a URL and the processFile function as the callback
downloadFile("http://website.com/file.txt", processFile);

// Output:
// Starting download from http://website.com/file.txt...
// Download complete.
// Processing file: File content from http://website.com/file.txt

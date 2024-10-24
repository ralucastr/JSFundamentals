const simulatedData = "Once the download is complete, call the callback function with a string representing the file data.";
const url ="http://website.com/file.txt";
  console.clear();  
async function downloadFile(url,callback) {
    console.log(`Starting download from ${url}`);
    setTimeout(() => { 
    callback(simulatedData)
    }, 2000);
    
    }
    async function processFile(data){
        console.log('Download complete');
        console.log(`Procesing file: File content from ${url} is:\n "${data}"`)
    };
   
   await downloadFile(url,processFile);
   
  

   

   
    
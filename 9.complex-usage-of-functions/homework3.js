console.clear();
async function fetchData() {
    console.log('Fetching data...')
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return (response);
}

async function displayData(data) {
    let toJson = await data.json();
    console.log(JSON.stringify(toJson, null, 2));
};

displayData(await fetchData());

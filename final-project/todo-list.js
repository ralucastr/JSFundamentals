const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the todo list
let todoList = [];

// Function to add a new item to the todo list
function addItem(item) {
    todoList.push({ task: item, completed: false });
}

// Function to mark an item as completed
function completeItem(index) {
    if (todoList[index]) {
        todoList[index].completed = true;
    }
}

// Function to display the todo list
function displayList() {
    todoList.forEach((item, index) => {
        let status = item.completed ? 'completed' : 'not completed';
        console.log(`${index + 1}. ${item.task} [${status}]`);
    });
}

function askQuestion() {
    rl.question('Enter a new todo item, type "done" to finish, type "list" to display the list, or type "complete" followed by the item number to mark as completed: ', (answer) => {
        if (answer.toLowerCase() === 'done') {
            displayList();
            rl.close();
        } else if (answer.toLowerCase() === 'list') {
            displayList();
            askQuestion();
        } else if (answer.toLowerCase().startsWith('complete')) {
            let index = parseInt(answer.split(' ')[1]) - 1;
            if (!isNaN(index)) {
                completeItem(index);
            }
            askQuestion();
        } else {
            addItem(answer);
            askQuestion();
        }
    });
}

askQuestion();

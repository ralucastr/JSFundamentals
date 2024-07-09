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

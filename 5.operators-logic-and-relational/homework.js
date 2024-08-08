// 1
const temperature = 32;
(temperature > 30) && console.log("It's hot outside")

// 2
const speed = 100;
const inCityZone = true;
(speed > 50 && inCityZone) && console.log("You're going over the speed limit");

// 3
const price = 30;
const budget = 40;
const credit = 10;
(price < budget || price < credit) && console.log("I can afford this");

// 4
const hoursSlept = 7;
const sleepQuality = 4;
(hoursSlept >= 7 && sleepQuality > 3) && console.log("Had a good sleep");

// 5
const age = 10;
(age >= 18 || age <= 70) && console.log("You're hired");

// 6
const isNight = false;
(isNight) && console.log("There's still time left");

// 7
const name = "Billy";
const address = "Eminescu 4";
(name == "Billy" && address == "Eminescu 4") && console.log("Your order is here");

// 8
const encounteredAnimal = "bion";
(encounteredAnimal != "bear") && console.log("It's just a *encounteredAnimal*, hope there's no bears in this forest");
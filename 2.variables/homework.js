// Exercise 1
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400; // Corrected to the actual distance
const milesPerKm = 0.621;

// Exercise 2
console.log(typeof shuttleName);        // string
console.log(typeof shuttleSpeedMph);    // number
console.log(typeof distanceToMarsKm);   // number
console.log(typeof distanceToMoonKm);   // number
console.log(typeof milesPerKm);         // number

// Exercise 3: Calculate a space mission
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Exercise 4: Print out the results
console.log(`${shuttleName} will take ${daysToMars.toFixed(2)} days to reach Mars.`);

// Exercise 5: Calculate a trip to the Moon
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print out the results for the Moon trip
console.log(`${shuttleName} will take ${daysToMoon.toFixed(2)} days to reach the Moon.`);

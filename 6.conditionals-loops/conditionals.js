// ## if Statement
if (condition) { 
    // code to be executed if condition is true 
}  
// Example
let age = 18; 
if (age >= 18) { 
  console.log("You are an adult."); 
}


// ## else if Statement
if (condition1) { 
    // code to be executed if condition1 is true 
} else if (condition2) { 
    // code to be executed if condition1 is false and condition2 is true 
}
// Example
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
}


// ## else Statement
if (condition1) { 
    // code to be executed if condition1 is true 
} else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true 
} else { 
    // code to be executed if condition1 and condition2 are false 
}
// Example
let score2 = 65;
if (score2 >= 90) {
  console.log("Grade: A");
} else if (score2 >= 80) {
  console.log("Grade: B");
} else if (score2 >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
  

// ## switch Statement
// example 1
let score3 = 65;
switch (true) {
  case (score3 >= 90):
    console.log("Grade: A");
    break;
  case (score3 >= 80):
    console.log("Grade: B");
    break;
  case (score3 >= 70):
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: D");
}
// example 2
let trafficLight = "red";
switch (trafficLight) {
  case "green":
    console.log("The light is green, go!");
    break;
  case "yellow":
    console.log("The light is yellow, be cautious");
    break;
  case "red":
    console.log("The light is red, stop and wait for it to be green");
    break;
  default:
    console.log("The color is invalid");
}


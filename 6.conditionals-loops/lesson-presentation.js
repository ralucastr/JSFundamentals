// const condition = true;
// const playerValue = 10;

// if (condition !== true) { 
//     console.log("condition met");
// } else if (condition !== true && playerValue < 9) {
//     console.log("condition met in else if 1");
// } else if (condition === true) {
//     console.log("condition met in else if 2")
// } else {
//     console.log("condition not met");
// }
  
// let score = 65;
// switch (true) {
//   case (score >= 90):
//     console.log("Grade: A");
//     break;
//   case (score >= 80):
//     console.log("Grade: B");
//     break;
//   case (score >= 70):
//     console.log("Grade: C");
//     break;
//   default:
//     console.log("Grade: D");
// }

// let trafficLight = "red";
// switch (trafficLight) {
//   case "green":
//     console.log("The light is green, go!");
//     break;
//   case "yellow":
//     console.log("The light is yellow, be cautious");
//     break;
//   case "red":
//   case "blue":
//     console.log("The light is red, stop and wait for it to be green");
//     break;
//   default:
//     console.log("The color is invalid");
// }

// Example
// let age = 18; 
// let canVote = age >= 18 ? "Yes" : "No"; 
// console.log(canVote); // Output: Yes

// Example
// let score = 68;
// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" : "D";
// console.log(grade); // Output: B


// Example
// let score = 85;
// let grade = score >= 90 ? "A" : (
//                 score >= 80 ? "B" : (
//                     (score >= 70) ? "C" : "D"
//                 )
//             );
// console.log(grade); // Output: B


// Example
// let name = undefined;
// let defaultName = null;
// let userName = name ?? defaultName ?? 1;
// console.log(userName); // Output: Guest

const x = {
    array: [1,2,3],
    objectX: {
        id: 1,
        name: "dqwdq"
    }
};

// console.log(x.array2?.[0]);
// console.log(x.objectY?.id);

// if (x.objectX?.id) {
//     console.log("we have the id");
// } else {
//     console.log("object is undefined");
// }

// console.log(x?.array);

// function x2() {
//     return {
//         monster: 1,
//     }
// }

// console.log(x2()?.monster)

// Example
// for (let i = 0; i < 5; i++) { 
//     console.log("The number is " + i); 
// }
  
// Example
// let i = 0;
// while (i < 5) {
//   console.log("The number is " + i);
//   i++;
// }

// Example
let i = 0; 
do { 
    console.log("The number is " + i); 
    i++; 
} while (i < 5);

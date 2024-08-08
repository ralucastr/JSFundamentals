///// ###### About Foreach
// const mentors = [
// 	{
//         id: 1,
// 		name: "Alex"
// 	},
// 	{
//         id: 2,
// 		name: "Felix"
// 	}
// ]; 

// let count = 0;

// mentors.forEach((mentor) => { 

//     if (!mentor.count) {
//         mentor.count = 0;
//     }
    
//     mentor.count += count;

//     ++count;

//     console.log(mentor);
//   //console.log(`Mentor name is ${mentor.name}`); 
// });

// console.log(mentors);



///// ###### About Find
// const mentors = [
// 	{
//         id: 1,
// 		name: "Felix",
// 	},
// 	{
//         id: 2,
// 		name: "Felix",
//         bankAccount: {
//             name: "BRD",
//             amount: 10000
//         }
// 	}
// ]; 

// const found = mentors.find(mentor => mentor.name === "Felix" && mentor.id === 1);

// if (!found) {
//     console.log("not found")
// } else {
//     console.log(found);
// }

// console.log(found.name);

// if (found && found.bankAccount && found.bankAccount.name) {
//     console.log(found.bankAccount.name);
// } else {
//     console.log("Mentor not found")
// }



///// ###### About Some
// const mentors = [
// 	{
//      id: 1,
// 		name: "Alex"
// 	},
// 	{
//      id: 2,
// 		name: "Felix"
// 	}
// ]; 

// const found = mentors.some(mentor => mentor.id === 3);
// console.log(found); // Output: true



///// ###### About Every
// const mentors = [
// 	{
//         id: 1,
// 		name: "Felix"
// 	},
// 	{
//         id: 2,
// 		name: "Felix"
// 	}
// ]; 

// const found = mentors.every(mentor => mentor.name === "Felix");
// console.log(found); // Output: false



///// ###### About Map
// const mentors = [
// 	{
//         id: 1,
// 		name: "Alex",
// 		money: 100000,
// 	},
// 	{
//         id: 2,
// 		name: "Felix",
// 		money: 200000,
// 	}
// ]; 

// const result = mentors.map((mentor) => {
//   return mentor.name; 
// });

// console.log(result); // Output: [200000, 400000]





///// ###### Foreach vs Map
// const mentors = [
// 	{
//         id: 1,
// 		name: "Alex",
// 		money: 100000,
// 	},
// 	{
//         id: 2,
// 		name: "Felix",
// 		money: 200000,
// 	}
// ]; 

// const newValues = [];
// mentors.forEach((mentor) => {
//     mentor.money -=10;

//     const newMentor = {
//         id: mentor.id,
//         name: mentor.name
//     };

//     newValues.push(newMentor);
// });

// console.log(newValues);
// // Define a class
// class Car {
//     constructor(make, year, model = "Yaris", cp) {
//         this.make = make; // Property
//         this.model = model; // Property
//        // this.year = year; // Property

//         if (year > 2010) {
//             this.isNew = true;
//         } else {
//             this.isNew = false;
//         }
//     }

//     // changeYear(year) {
//     //     this.year = year;
//     // }

//     // Method
//     displayInfo() {
//         console.log(`${this.make} ${this.model}`);
//     }
// }

// // Create an object (instance of Car)
// const myCar = new Car('Toyota', 2010);

// myCar.displayInfo(); // Output: "2020 Toyota Corolla"
// console.log(myCar);
// // myCar.changeYear(2023);
// myCar.displayInfo();


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age; // Private property
//     }
        
//     // Getter method for age
//     getAge() {
//         return this.age;
//     };

//     // Setter method for age
//     setAge(newAge) {
//         if(newAge > 0) {
//             this.age = newAge;
//         } else {
//             console.log('Please enter a valid age');
//         }
//     };
//     // Method
//     introduce() {
//         return `Hi, I'm ${this.name} and I'm ${this.getAge()} years old.`;
//     }
// }
    
// const person = new Person('Alice', 25);
// console.log(person.introduce()); // Output: "Hi, I'm Alice and I'm 25 years old."
// console.log(person.name);
// console.log(person);
// person.setAge(30);
// console.log(person.introduce()); // Output: "Hi, I'm Alice and I'm 30 years old."


// Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }
    
// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class's constructor
//         this.breed = breed;
//         // this.speak();
//     }

//     // speak() {
//     //     console.log(`${this.name}, the ${this.breed}, barks.`);
//     // }
// }
    
// const myDog = new Dog('Rex', 'Golden Retriever');
// myDog.speak(); // Output: "Rex, the Golden Retriever, barks."
// console.log(myDog);




// class Bird {
//     constructor(name) {
//         this.name = name;
//     }

//     fly() {
//         console.log(`${this.name} is flying.`);
//     }
// }

// class Penguin extends Bird {
//     fly() {
//         console.log(`${this.name} can't fly.`);
//     }
// }

// const bird = new Bird('Eagle');
// const penguin = new Penguin('Penguin');

// bird.fly(); // Output: "Eagle is flying."
// penguin.fly(); // Output: "Penguin can't fly.

class CoffeeMachine {
	#privateBrand = "Nescafé";
	static normalBrand = "Yuban";

        constructor(brand) {
      	    this.brand = brand;
    	}
  
    	// Public method
    	makeCoffee() {
            this._boilWater();
            this._brewCoffee();
            this.#trulyPrivateCoffee();
            console.log(this.#privateBrand);
            console.log(this.normalBrand);
            console.log(`Coffee is ready!`);
    	}
  
    	// Private methods (conventionally)
    	static _boilWater() {
      	    console.log('Boiling water...');
    	}
  
    	_brewCoffee() {
      	    console.log('Brewing coffee...');
    	}

        // Private methods (truly private)
        #trulyPrivateCoffee() {
            console.log('Truly private method');
        }
}
  
// const machine = new CoffeeMachine('JavaBrew');
// machine.makeCoffee();
//machine.#trulyPrivateCoffee();
// Output:
// Boiling water...
// Brewing coffee...
// Coffee is ready!

// machine.trulyPrivateCoffee(); // error
// machine.#trulyPrivateCoffee(); // error
// console.log(machine.#privateBrand); // error
// console.log(machine.privateBrand); // Output: undefined
// console.log(machine.normalBrand); // Output: Yuban
console.log(CoffeeMachine.normalBrand);
CoffeeMachine._boilWater();
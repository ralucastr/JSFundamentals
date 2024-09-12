class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Rex', 4);
const cat = new Cat('Whiskers', 2);

dog.speak(); // Output: "Rex barks."
cat.speak(); // Output: "Whiskers meows."
  
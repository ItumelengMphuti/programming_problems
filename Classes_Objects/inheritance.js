// Inheritance nad overriding

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      return `${this.name} makes a sound.`;
    }
  }
  
  class Dog extends Animal {
    makeSound() {  // Overriding the parent method
      return `${this.name} barks!`;
    }
  }
  
  const dog = new Dog("Buddy");
  console.log(dog.makeSound()); // "Buddy barks!"
  
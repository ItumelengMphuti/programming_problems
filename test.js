class Person {
  // Declare properties
  constructor(name = 'John Doe', age = 0) {
      this._name = name;
      this._age = age;
  }

  // Getters and Setters
  getName() {
      return this._name;
  }
  
  setName(name) {
      this._name = name;
  }

  getAge() {
      return this._age;
  }
  
  setAge(age) {
      this._age = age;
  }

  // Public Methods
  addBirthday() {
      this._age++; 
  }

  toString() {
      return `My name is ${this.getName()} and I am ${this.getAge()} years old.`;
  }
}

// Example usage:
const person1 = new Person("Alice", 25);
console.log(person1.toString()); // Output: My name is Alice and I am 25 years old.

person1.addBirthday();
console.log(person1.toString()); // Output: My name is Alice and I am 26 years old.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
  // Creating multiple instances
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Verify they are distinct objects
  console.log(person1 === person2); // false
  console.log(person1.name); // "Alice"
  console.log(person2.name); // "Bob"
  
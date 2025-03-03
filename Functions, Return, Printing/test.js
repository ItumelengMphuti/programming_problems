// ==========================================
// Topic 1: Functions and Return Statements
// ==========================================

// Function to calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height; // Return the calculated area
  }
  
  // Function to check if a number is even
  const isEven = (number) => {
    return number % 2 === 0; // Return true if even, false otherwise
  };
  
  // ==========================================
  // Topic 2: Printing to the Terminal
  // ==========================================
  
  // Call the calculateArea function and print the result
  const area = calculateArea(10, 5);
  console.log("The area of the rectangle is:", area); // Output: The area of the rectangle is: 50
  
  // Call the isEven function and print the result
  console.log("Is 7 even?", isEven(7)); // Output: Is 7 even? false
  console.log("Is 8 even?", isEven(8)); // Output: Is 8 even? true
  
  // ==========================================
  // Topic 3: Hoisting
  // ==========================================
  
  // Example 1: Hoisting with var
  console.log("Value of x before declaration:", x); // Output: Value of x before declaration: undefined
  var x = 42;
  console.log("Value of x after declaration:", x); // Output: Value of x after declaration: 42
  
  // Example 2: Hoisting with let (temporal dead zone)
  // Uncommenting the following line will cause a ReferenceError
  // console.log("Value of y before declaration:", y); // ReferenceError: Cannot access 'y' before initialization
  let y = 100;
  console.log("Value of y after declaration:", y); // Output: Value of y after declaration: 100
  
  // Example 3: Hoisting with function declarations
  sayHello(); // Output: Hello! (function is fully hoisted)
  function sayHello() {
    console.log("Hello!");
  }
  
  // Example 4: Hoisting with function expressions
  // Uncommenting the following line will cause a TypeError
  // sayHi(); // TypeError: sayHi is not a function
  var sayHi = function () {
    console.log("Hi!");
  };
  sayHi(); // Output: Hi! (works after the function expression is assigned)
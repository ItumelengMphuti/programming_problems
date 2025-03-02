// Fucntional Scope
function myFunction() {
    if (true) {
      var x = 10; // x is functionally scoped
    }
    console.log(x); // 10 (x is accessible here)
  }
  myFunction();
  console.log(x); // Error: x is not defined (x is not accessible outside the function)

  // Block Scope
  function myFunction() {
    if (true) {
      let y = 20; // y is block-scoped
      const z = 30; // z is also block-scoped
      console.log(y); // 20 (y is accessible here)
      console.log(z); // 30 (z is accessible here)
    }
    console.log(y); // Error: y is not defined (y is not accessible outside the block)
    console.log(z); // Error: z is not defined (z is not accessible outside the block)
  }
  myFunction();
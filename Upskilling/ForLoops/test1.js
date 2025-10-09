// Iterate through an array
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Breaking early
for (let i = 0; i < 10; i++) {
    if (i === 6) break; // Stops at 5
    console.log(i);
}

// Continue -skipping iterations
for (let i = 0; i < 5; i++) {
    if (i === 1) continue; // Skips 2
    console.log(i); // Prints 0, 1, 3, 4
}

arr = ['a','b','c']

for (let i = 0; i< arr.length; i++){
    console.log(i)    // this does not print a, b or c ever
}

for (let i = 1; i <= 5; i++) {  
    for (let j = 1; j <= 5; j++) {  
      console.log(`${i} x ${j} = ${i * j}`);
    }  
    console.log("----------");  // Separator for each number
  }
  
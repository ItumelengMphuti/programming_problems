function largestOfFour(arr) {
    let array = [];
    let i = 0
      while(i < arr.length) {
        array.push(Math.max(...arr[i]));
        i++;
      }
    return array;
  }
  
  console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]));
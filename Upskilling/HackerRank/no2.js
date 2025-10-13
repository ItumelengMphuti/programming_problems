function hourglassSum(arr) {
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = 0; j < arr[i].length - 3; j++) {
            const hourGlass = [arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i + 1][j + 1], arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]];

            const sum = hourGlass.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            if(sum > maxSum) {
                maxSum = sum;
            }

        }

    }
    return maxSum
}

const arr = [
  [-9, -9, -9,  1, 1, 1],
  [ 0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [ 0,  0,  8,  6, 6, 0],
  [ 0,  0,  0, -2, 0, 0],
  [ 0,  0,  1,  2, 4, 0]
];

console.log(hourglassSum(arr));

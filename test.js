function diagonalDiff (arr) {
    let firstSum = 0;
    let secondSum = 0;

    for(i = 0; i < arr.length;i++) {
        firstSum += arr[i][i]
        secondSum += arr[i][arr.length - i -1]
    }
    if (firstSum > secondSum) {
        firstSum - secondSum;
    } else {
        return secondSum - firstSum
    }

}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDiff(arr)); // Output: 15

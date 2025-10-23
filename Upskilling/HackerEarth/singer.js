function singer(arr) {
    let count = 0;
    // let max = 0;
    for(let i = 0;i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            count++;
        }
    }
    return count;
}

console.log(singer([1, 1, 1, 2, 2, 4]))
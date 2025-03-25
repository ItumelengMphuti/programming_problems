function inclusiveRange(arr) {
    let sum = 0;
    let start = arr[0];
    let end = arr[1];
    let result = [];

    if(end < start) {
        [start, end] = [end, start];
    }
    for(let i = start; i <= end; i++) {
        result.push(i)
    }
    for(let j = 0; j < result.length; j++) {
        sum += result[j]
    }
    return sum;
}
console.log(inclusiveRange([4, 1]))
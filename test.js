function combine(arr1, arr2) {
    const comb = [];
    let i = 0;
    
    while (i < arr1.length || i < arr2.length) {
        if (i < arr1.length) {
            comb.push(arr1[i]);
        }
        if (i < arr2.length) {
            comb.push(arr2[i]);
        }
        i++;
    }
    return comb;
}

module.exports = { combine };
    
    console.log(combine([11, 22, 33, 45], [1, 2, 3]));
    console.log(combine([12, 4, 2], [1, 5, 3]));
    console.log(combine([1, 2, 3], [7, 8, 9, 10, 11]));
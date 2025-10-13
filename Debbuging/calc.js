function multi(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
       product *= arr[i]  
    }
    return product;
}
function add(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
function reverse(str) {
    let newStr = str.split("");
    return newStr.reverse().join("");
}

console.log((multi([8, 2, 5]))); //80
console.log((add([1, 15, 3]))); //19
console.log((add([7, 8, 6, 5, 4, 9]))); // 39
console.log((reverse("Hello Word"))); //"droW olleH"
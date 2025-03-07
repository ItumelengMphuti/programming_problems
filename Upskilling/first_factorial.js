// A function that returns a factorial of n
function firstFactorial (n) {
    result = 1;
    for(let i = 1; i <= n ;i++ ) {
        result *= i;
    }
    return result;
}

console.log(firstFactorial(4));

function factorial (n) {
    let answer = 1;
    for(let i = 2; i <= n; i++) {
        answer *= i
    }
    return answer;
}
// console.log(factorial(4))

// Prime number

function prime(n) {
    if (n < 2) return false;

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

function isPowerTwo(n) {
    if(n < 1) return false;

    for(let i = 0; i <= n; i++) {
        if(n === 2 ** i) {
            return true;
        }
    }
    return false
}
console.log(isPowerTwo(1))
console.log(isPowerTwo(2))
console.log(isPowerTwo(5))

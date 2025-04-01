function divisors(num) {
 let factors = [];
 for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        factors.push(i);
    }
 }
 return factors.length > 0 ? factors : `${num} is prime`;
}

console.log(divisors(13))
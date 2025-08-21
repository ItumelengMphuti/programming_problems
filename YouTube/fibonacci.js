function fibonacci (n) {
    
    const results = [0, 1, ];

    for(let i = 2;i < n; i++) {
        results[i] = results[i - 1] + results[i - 2]
    }
    return results;
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(10))
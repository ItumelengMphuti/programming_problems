function StringChallenge(str) {
    const roman = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    }
    let total = 0;

    for(let i = 0; i < str.length; i++) {
        let current = roman[str[i]];
        let next = roman[str[i + 1]];

        if(next && current < next) {
            total += (next - current)
            i++;
        } else {
            total += current
        }
    }

    return total;
}


// Test cases
console.log(StringChallenge("IV"));    // Output: 4
console.log(StringChallenge("XIX"));   // Output: 19
console.log(StringChallenge("XXIV"));  // Output: 24
console.log(StringChallenge("MCMXCIV"));// Output: 1994



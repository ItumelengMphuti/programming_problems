function hasAdjacentDigits(word) {
    for (let i = 0; i < word.length - 1; i++) {
        // Check if both current and next characters are digits using a regular expression
        if (word[i].match(/[0-9]/) && word[i + 1].match(/[0-9]/)) {
            return true; // Found adjacent digits
        }
    }
    return false; // No adjacent digits
}

// Example usage:
console.log(hasAdjacentDigits("a1b2c3"));   // false (digits are not adjacent)
console.log(hasAdjacentDigits("hello268")); // true (2, 6, and 8 are adjacent)
console.log(hasAdjacentDigits("x5y6z7"));   // false (digits are not adjacent)
console.log(hasAdjacentDigits("abc123"));   // true (1, 2, and 3 are adjacent)

function palindromization(elements, n) {
  // Step 1: Handle error cases
  if (!elements || elements.length === 0 || n < 2) {
    return "Error!";
  }

  // Special case: only one element
  if (elements.length === 1) {
    return elements[0].repeat(n);
  }

  // Step 2: Start palindrome
  let palindrome = elements[0] + elements[0];
  let index = 1;

  // Step 3: Build palindrome
  while (palindrome.length < n) {
    const ch = elements[index];
    const mid = Math.floor(palindrome.length / 2);

    palindrome = palindrome.slice(0, mid) + ch + palindrome.slice(mid);

    // Advance index every two insertions
    if (palindrome.length % 2 === 0) {
      index++;
      if (index === elements.length) {
        index = 0;
      }
    }
  }

  // Step 4: Return the exact length
  return palindrome.slice(0, n);
}

console.log(palindromization("123", 4))
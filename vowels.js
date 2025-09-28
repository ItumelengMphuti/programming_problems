function getConsonantCount(sentence) {
  const vowels = "aeiou";
  const specialsRegex = /[!@#$%^&*()_\+\=\[\]{};':"\\|,.<>\/?~-]/;

  let count = 0;

  for(const char of sentence.toLowerCase()) {
    if(!vowels.includes(char) && char !== ' ' && !specialsRegex.test(char)) {
      count++;
    }
  }
  return count;
}

console.log(getConsonantCount("Hello, World!"))
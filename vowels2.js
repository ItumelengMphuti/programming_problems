function getVowelCount(sentence) {
  let count = 0;
  const vowels = "aeiou";

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(getVowelCount("Apples are tasty fruits"))

function getConsonantCount(sentence) {
  const vowels = "aeiou";
  const specialsRegex = /[!@#$%^&*()_\+\=\[\]{};':"\\|,.<>\/?~-]/;

  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (!vowels.includes(char) && char !== ' ' && !specialsRegex.test(char)) {
      count++;
    }
  }
  return count;
}

console.log(getConsonantCount("Hello, World!"))

function getPunctuationCount(sentence) {
  const specialsRegex = /[!@#$%^&*()_\+\=\[\]{};':"\\|,.<>\/?~-]/;
  let numOfSpecial = 0;

  for (const char of sentence.toLowerCase()) {
    if (specialsRegex.test(char)) {
      numOfSpecial++;
    }
  }
  return numOfSpecial;
}

console.log(getPunctuationCount("What's going on here?"))

function getWordCount(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    return 0;
  }

  const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}
console.log(getWordCount("Hello World"))
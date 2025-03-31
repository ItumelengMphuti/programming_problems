function longest(words) {
  if (words.length === 0) return;

  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  for (let word of words) {
    if (word.length === maxLength) {
      console.log(word);
    }
  }
}
longest([]); 
module.exports = { longest };

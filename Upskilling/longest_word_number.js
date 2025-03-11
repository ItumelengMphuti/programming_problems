function findLongestWordLength(str) {
    const words = str.split(' ');
    let maxNum = 0;
    for(let i = 0;i < words.length; i++) {
      if(words[i].length > maxNum) {
        maxNum = words[i].length;
      }
    }
  
    return maxNum;
  }
  
  console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
// given a string, return the longest word

function longestWord(string) {
    const word = string.split(" ") // This splits the input string into an array of words
    let longest = word[0];

    for(let i = 1; i < word.length; i++) {
        if(word[i].length > longest.length) {
            longest = word[i];
        }
    } 
     return longest;
}

console.log(longestWord("Hello world!"))
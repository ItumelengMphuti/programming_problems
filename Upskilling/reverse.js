function reverseWords(str) {
    let words = str.split(" ");
    let reversed = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("").reverse().join("");
        reversed += word + " ";
    }
    return reversed.trim(); // removes last extra space
}

// let s = readLine();
console.log(reverseWords("hello world"));

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "No";
        }
    }
    return "Yes";
}

console.log(isPalindrome("level"))
// let s = readLine();
// if (isPalindrome(s)) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

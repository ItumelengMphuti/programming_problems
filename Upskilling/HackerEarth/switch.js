function alphabets(alpha) {
    let regEx = /^[a-z]+$/;

    if (regEx.test(alpha)) {
        return "abcdefghijklmnopqrstuvwxyz";
    } else {
        return -1
    }
}

console.log(alphabets("n")) //abcdefghijklmnopqrstuvwxyz
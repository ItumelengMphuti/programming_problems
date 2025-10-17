// REPEAT!!
function fizzbuzz(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        let result = "";
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result += "FizzBuzz";
        } else if (i % 3 === 0) {
            result += "Fizz";
        } else if (i % 5 === 0) {
            result += "Buzz";
        } else {
            result = i.toString();
        }
        output.push(result);
    }
return output;
}

console.log(fizzbuzz(15))
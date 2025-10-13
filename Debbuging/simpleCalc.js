function calculate(a, o, b) {

    if (o === "+") {
        return a + b;
    } else if (o === "-") {
        return a - b;
    } else if (o === "/") {
        return b === 0 ? null : a / b;;
    } else if (o === "*") {
        return a * b;
    } else {
        return null;
    }
        
        
}

console.log((calculate(2, "+", 4)));
console.log((calculate(6, "-", 1)));
console.log((calculate(49, "/", -7)));
console.log((calculate(4, "*", 3)));
console.log((calculate(4,"/",0)));
console.log((calculate(4, "m", 3)));
function palindromization(element, n) {
    if(element === "" || n < 2) return "Error!";

    let elements = element[0]

    for(let i = 0; i < n; i++) {
        
        element.push(elements)
    }
}
console.log(palindromization("123",2))
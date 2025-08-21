process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    const lines = input.trim().split("\n");
    const T = parseInt(lines[0]);
    let currentLine = 1;

    for (let t = 0; t < T; t++) {
        const N = parseInt(lines[currentLine++]);
        const arr = lines[currentLine++].split(" ").map(Number);
        console.log(countValidTriplets(arr));
    }
});

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function countValidTriplets(arr) {
    let countOnes = 0;
    let countPrimes = 0;

    for (let num of arr) {
        if (num === 1) {
            countOnes++;
        } else if (isPrime(num)) {
            countPrimes++;
        }
    }
    let result = Math.floor(countPrimes * (countOnes * (countOnes - 1)) / 2);

    return Math.max(0, result)
}

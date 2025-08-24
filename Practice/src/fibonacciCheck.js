
// Function to check if a number is part of Fibonacci series
function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === 0 || num === 1) return true;

    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b === num;
}

module.exports = isFibonacci;

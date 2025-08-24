//First 10 Fibonacci numbers
function fibonacci() {
    let a = 0, b = 1;
    let result = [a, b];
    for (let i = 2; i < 10; i++) {
        let next = a + b;
        result.push(next);
        a = b;
        b = next;
    }
    return result;
}
module.exports = fibonacci;

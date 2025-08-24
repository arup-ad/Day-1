//Sum of even numbers in an array
function sumEvenNumbers(arr) {
    return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
}
module.exports = sumEvenNumbers;

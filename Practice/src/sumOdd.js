//Sum of odd numbers in an array
function sumOddNumbers(arr) {
    return arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);
}
module.exports = sumOddNumbers;

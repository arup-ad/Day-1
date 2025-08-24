//Print all odd numbers (1–50)
function printOddNumbers() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) console.log(i);
    }
}
module.exports = printOddNumbers;

//Print first 20 odd numbers
function printOddNumbers() {
    let count = 0, num = 1;
    while (count < 20) {
        console.log(num);
        num += 2;
        count++;
    }
}

module.exports = printOddNumbers;

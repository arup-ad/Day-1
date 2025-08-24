//Print first 20 even numbers
function printEvenNumbers() {
    let count = 0, num = 2;
    while (count < 20) {
        console.log(num);
        num += 2;
        count++;
    }
}

module.exports = printEvenNumbers;

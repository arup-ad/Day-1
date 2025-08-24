//Multiplication table of a given number
// Function to print multiplication table of a number
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

module.exports = multiplicationTable;

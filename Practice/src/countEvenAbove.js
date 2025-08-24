//Count even numbers greater than 50 in an array
function countEvenAbove(arr) {
    let count = 0;
    for (let num of arr) {
        if (num > 50 && num % 2 === 0) count++;
    }
    return count;
}

module.exports = countEvenAbove;

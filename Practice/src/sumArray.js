//Sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

module.exports = sumArray;

//Find maximum and minimum in an array (without built-in functions)
// Function to find min and max without built-in functions
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return { min, max };
}

module.exports = findMinMax;

//Check if all elements are even in an arryay
function allEven(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) return false;
    }
    return true;
}

module.exports = allEven;

//Count total even and odd numbers in an array
function countEvenOdd(arr) {
    let even = 0, odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    return { even, odd };
}
module.exports = countEvenOdd;

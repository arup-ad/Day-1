//Sum of all prime numbers in an array
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfPrimes(arr) {
    let sum = 0;
    for (let num of arr) {
        if (isPrime(num)) sum += num;
    }
    return sum;
}

module.exports = sumOfPrimes;

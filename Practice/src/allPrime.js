//Check if all elements are prime in an array
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function allPrime(arr) {
    for (let num of arr) {
        if (!isPrime(num)) return false;
    }
    return true;
}

module.exports = allPrime;

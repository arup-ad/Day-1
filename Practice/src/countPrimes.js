//Count prime numbers in an array
// Helper function to check if number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to count prime numbers in array
function countPrimes(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

module.exports = countPrimes;

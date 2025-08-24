//Prime check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return ` ${num}-This Number is Not Prime `;
    }
    return `${num}-This Number is Prime `;
}
module.exports = isPrime;

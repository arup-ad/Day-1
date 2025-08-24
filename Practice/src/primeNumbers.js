//Print primes (1–100)
function printPrimes() {
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) console.log(i);
    }
}
module.exports = printPrimes;

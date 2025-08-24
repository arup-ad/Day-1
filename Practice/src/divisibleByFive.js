//Find all numbers divisible by 5 between 1 and 100

function divisibleByFive() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

module.exports = divisibleByFive;

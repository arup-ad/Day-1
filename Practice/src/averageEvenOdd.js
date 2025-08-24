//Average of even and odd numbers separately in an array
function averageEvenOdd(arr) {
    let evenSum = 0, evenCount = 0;
    let oddSum = 0, oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
            evenCount++;
        } else {
            oddSum += num;
            oddCount++;
        }
    }

    return {
        evenAvg: evenCount ? evenSum / evenCount : 0,
        oddAvg: oddCount ? oddSum / oddCount : 0
    };
}

module.exports = averageEvenOdd;

//Odd or Even Check
const checkOddEven = require('./src/oddEven');
console.log(checkOddEven(20)); 
console.log(checkOddEven(21)); 

//Print all even numbers (1–50)
const printEvenNumbers = require('./src/evenNumbers');
printEvenNumbers();

//Prime check
const isPrime = require('./src/primeCheck');
console.log(isPrime(7));  
console.log(isPrime(10)); 

//Print all prime numbers (1–100)
const printPrimes = require('./src/primeNumbers');
printPrimes();

//First 10 Fibonacci numbers
const fibonacci = require('./src/fibonacci');
console.log(fibonacci());

//Print first 20 odd numbers
const printOddNumbers = require('./src/firstoddNumbers');
printOddNumbers();

//Count even numbers greater than 50 in an array
const countEvenAbove= require('./src/countEvenAbove');
console.log(countEvenAbove([20, 55, 60, 72, 49, 101]));   




////Print all odd numbers (1–50)
const printOddNumbers = require('./src/oddNumbers');
printOddNumbers();

//Sum of even numbers in an array
const sumEvenNumbers = require('./src/sumEven');
console.log(sumEvenNumbers([1,2,3,4,5,6])); 

//Sum of odd numbers in an array
const sumOddNumbers = require('./src/sumOdd');
console.log(sumOddNumbers([1,2,3,4,5,6]));

//Largest number in an array
const largestNumber = require('./src/largest');
console.log("the largest number is:-",largestNumber([4,7,2,9,1,10])); 

//Smallest number in an array
const smallestNumber = require('./src/smallest');
console.log("the smallest number is:-",smallestNumber([4,7,2,9,1])); 

//Check if a number exists in an array
const existsInArray = require('./src/existsInArray');   
console.log(existsInArray([1,2,3,4,5], 3)); 
console.log(existsInArray([1,2,3,4,5], 6)); 

//Factorial of a number
const factorial = require('./src/factorial');
let num = 5;
console.log(`The factorial of ${num} is`,factorial(num));

//Check if a number is part of Fibonacci series
const isFibonacci = require('./src/fibonacciCheck');
console.log(isFibonacci(8));
console.log(isFibonacci(10));

//Sum of all numbers in an array
const sumArray = require('./src/sumArray');
console.log(sumArray([1,2,3,4,5]));

//Find all numbers divisible by 5 between 1 and 100
const divisibleByFive = require('./src/divisibleByFive');
divisibleByFive();

//Count prime numbers in an array
const countPrimes = require('./src/countPrimes');
console.log(countPrimes([2, 3, 4, 5, 6, 7, 11])); 

//Find maximum and minimum in an array (without built-in functions)
const findMaxMin = require('./src/minMax');
console.log(findMaxMin([3, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

//Check if a string is a palindrome
const isPalindrome = require('./src/string');
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//Check if all elements are even in an arryay
const allEven = require('./src/allEven');
console.log(allEven([2,4,6,8]));
console.log(allEven([2,3,6,8]));

//Check if all elements are prime in an array
const allPrime = require('./src/allPrime'); 
console.log(allPrime([2,3,5,7,]));
console.log(allPrime([2,4,5,7,]));

//Separate odd and even numbers in an array
const separateOddEven = require('./src/separateOddEven');   
console.log(separateOddEven([1,2,3,4,5,6,7,8,9,10]));

//Display only prime numbers from an array
const filterPrimes = require('./src/filterPrimes');
console.log(filterPrimes([2, 3, 4, 5, 10, 11])); 

//Count total even and odd numbers in an array
const countEvenOdd = require('./src/countEvenOdd');
console.log(countEvenOdd([1,2,3,4,5,6,]));


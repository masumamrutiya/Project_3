/* 1. program to find sum of first and last digit of a number. Using while loop */

function sumFirstAndLastDigit(number) {
    number = Math.abs(number);

    let lastDigit = number % 10;
    let firstDigit = lastDigit;
    while (number >= 10) {
        number = Math.floor(number / 10);
        firstDigit = number;
    }

    return firstDigit + lastDigit;
}

const number = parseInt(prompt("Enter a number:"));
const result = sumFirstAndLastDigit(number);
console.log(`Sum of first and last digit of ${number} is ${result}`);

/* 2. program to count number of digits in a number. Using while loop */

function countDigits(number) {
    number = Math.abs(number);

    let count = 0;

    while (number > 0) {
        number = Math.floor(number / 10); 
        count++; 
    }

    return count;
}

const number = parseInt(prompt("Enter a number:"));
const digitCount = countDigits(number);
console.log(`Number of digits in ${number} is ${digitCount}`);

/* 3. Program to Print the Fibonacci Sequence */

function fibonacciSequence(numTerms) {
    let fibonacci = [0, 1]; 

    for (let i = 2; i < numTerms; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

const numTerms = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"));
const sequence = fibonacciSequence(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms: ${sequence.join(", ")}`);

/* 4. JavaScript Program to Check Armstrong Number */

function isArmstrongNumber(number) {
    const strNumber = number.toString();
    const numDigits = strNumber.length;

    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(strNumber[i]), numDigits);
    }

    return sum === number;
}


const number = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}

/* 5. JavaScript Program to Find the Palindrome Number or not */

function palindromeCheck(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');
    return numArr.every((num, index) => num === numArr[numArr.length - 1 - index]);
}

console.log(palindromeCheck(121));
console.log(palindromeCheck(12321));
console.log(palindromeCheck(12345));
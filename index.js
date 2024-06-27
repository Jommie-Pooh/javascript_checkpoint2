function reverseString(str) {
  // reverse a string
  let pString = str.split("");
  return pString.reverse().join("");
}

const reversedString = reverseString("Hello")

console.log(reversedString)

// capitalize words
function capitalizeWords(sentence) {
return sentence.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
const capitalizedWords = capitalizeWords("hello world")
console.log(capitalizedWords)

// count characters
function countCharacters(str) {
    
    return str.length;

}
const countedCharacters = countCharacters("Dumbo Octopus")
console.log(countedCharacters)

// array functions

// find maximum and minimum in an array
function findMaximum(arr) {
    if (arr.length === 0) return null;  // Handle empty array case
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMinimum(arr) {
    if (arr.length === 0) return null;  // Handle empty array case
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example usage:
console.log(findMaximum([3, 9, 1, 7, 4, 2]));  // Output: 9
console.log(findMinimum([3, 9, 1, 7, 4, 2]));  // Output: 1


// sum of array
function sumOfArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
console.log(sumOfArray([3, 9, 1, 7, 4, 2]));  // Output: 26
console.log(sumOfArray([10, 20, 30, 40, 50]));  // Output: 150

// filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage: Filter even numbers
let filteredArr1 = filterArray([3, 9, 1, 7, 4, 2], num => num % 2 === 0);
console.log(filteredArr1);  // Output: [4, 2]

// Example usage: Filter numbers greater than 25
let filteredArr2 = filterArray([10, 20, 30, 40, 50], num => num > 25);
console.log(filteredArr2);  // Output: [30, 40, 50]


// mathematical functions
// factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1


// prime number check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Example usage:
console.log(isPrime(23));  // Output: true
console.log(isPrime(10));  // Output: false


// fibonacci series
function fibonacciSequence(count) {
    let sequence = [0, 1];
    if (count === 1) return [0];
    else if (count === 2) return sequence;

    for (let i = 2; i < count; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacciSequence(7));  // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSequence(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





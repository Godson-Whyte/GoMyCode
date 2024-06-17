// Function that reverses a String
function reverseString(str) {
    let rev = str.split('').reverse().join('');
    console.log(rev);
}
reverseString("Hello");


// Function that counts the characters in a string
function countCharacters(str) {
    let count = str.length;
    console.log(count);
}
countCharacters("Hello");


//  Implement a function that capitalizes the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    let sen = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log(sen);
}
capitalizeFirstLetter("the quick brown fox");


// Write functions to find the maximum and minimum values in an array of numbers
// Max values
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
findMax([1,3,4,5,7,8,17])

// Min values
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
findMin([1,3,4,5,7,8,17])


// Create a function that calculates the sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum;
}
console.log(sumArray([1,3,4,5,7,8,17]));


//  Implement a function that filters out elements from an array based on a given condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Condition to filter array
let isEven = function(num) {
    return num % 2 === 0;
};

let isOdd = function(num) {
    return num % 2 !== 0;
};

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven));

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isOdd));


//  Write a function to calculate the factorial of a given number
function factorial(n) {
    let result = 1;
        for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
console.log(factorial(7));


// Create a function to check if a number is prime or not

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(isPrime(5));


//  Implement a function to generate the Fibonacci sequence up to a given number of terms

function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

console.log(fibonacci(10));
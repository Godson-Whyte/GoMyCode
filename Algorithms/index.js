// The formula to convert from celcius to fahrenheit is the temperature in celcius times 9/5, plus 32
  // You are given a variable celcius representing a temperature in celcius.
  // Use the variable fahrenheit already defind and assign it the fahrenheit temperature equivalent to the given celcius temperature.
  // Use the formula mentioned above to help convert the celcius temperature to fahrenheit 
function Celsius (deg) {
    let fahrenheit = (deg * 9/5) + 32;
    return fahrenheit + 'F'
  }
  // console.log(Celsius(0))
  

  //Write a function that does the multiplication of a number up to 12
  // and returns the result, having the number, its multiplier and the result
  function Multiplication (num) {
   let result = []
    for (i = 0; i<=12; i++){
      let multiply  = num * i;
      result.push(`${num} x ${i} = ${multiply}`);
    }
    return result;
  }
  // console.log(Multiplication(5))

//Return the factorial of the provided integer.
  // If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
  // Factorials are often represented with the shorthand notation n!
  // For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
  // Only integers greater than or equal to zero will be supplied to the function.
  //will start the loop from the value of i
  function Factorial (num) {
    let result = 1;
    for (i = 1; i <= num; i++){
      result *= i;
    }
    return result;
  }
// console.log(Factorial(5));

// console.log('1' + 1);
// console.log(isNaN('hello'))
// console.log(5 ** 3);

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending

function truncateString(str, num){
  if (str.length > num){
    return str.slice(0, num) + '...';
  }
  else{
    return str;
  }
}

// console.log(truncateString('Hello', 3));

//check if a value is classified as a boolean primitive. return true or false.
//Boolean primitives are true and false
//true = (true or false), false = (null, string,number,undefined)
function isBoolean(str){
  return typeof str === 'boolean';
}
// console.log(isBoolean(false));

//Reverse a string
//Reverse the provided string
//You may need to turn the string into an array before you can reverse it
//Your result must be a string
function reverseString(str){
  let arr = str.split("");
  let result = arr.reverse();
  let ans = result.join(" ");
  return ans;
}
// console.log(reverseString('hello,how are you'));

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//The arguments ["hello", "hey"] should return false because the string hello does not contain a 'y'
//Lastly, ["Alien", "line"] should return true because all of the letters in line are present in Alien.

//wrong
function checkString(word1, word2){
  let arr1 = word1.split("")
  let arr2 = word2.split("")
  for (i = 0; i <arr1.length; i++){
    return arr2[i] === arr1[i];
  }
}

// console.log(checkString("hello", "help"));

//correct
function checkAlphabets(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
// console.log(checkAlphabets(['jesus', 'USe']));

// Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

function filterNegative(arr){
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] >= 0){
    ans = [...ans, arr[i]]
    }
  }
  return ans
}
// console.log(filterNegative([-1,0,3,5,-6]));
// console.log(filterNegative([-1,0,3,5,-7,9,56,-63,50]));

//Return a Boolean if a number is divisible by 10
// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

function divide(num){
  // if (num % 10 > 0){
  //   return false;
  // } return true

  return (num % 10 === 0);
}
// console.log(divide(20));

// Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays.
function sortArr(arr){
  return arr.sort(function(a,b){
    return (a - b)
  });
}
// console.log(sortArr([1,4,56,72,3,65,5,4,8]));

//Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed.
function rmvSpace (str){
  return str.split(" ").join("")
}

console.log(rmvSpace("This is a boy"));
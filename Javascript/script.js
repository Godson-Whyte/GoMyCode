// let a = "Boy and Girl ";
// let b = "Girl and Boy";
// console.log(a+b);
console.log('Hello World');

function ret(){
    alert("Hello, you're welcome")
}

// alert('GoMyCode')
// prompt('GoMyCode') interactive alert
// confirm('Do you want to proceed?'); //interactive alert eg yes or no

// const age = 32;
// // age = 23;
// console.log(age);


//Basic Data Types
//Numbers
let age = 30
console.log(age);

//Strings
let name = 'John'
console.log(name);

//Boolean
let isMarried = true
console.log(isMarried);

//Null
let job = null
console.log(null);

//Undefined
let city;
console.log(city);


//Arrays
let hobbies = ['Sports', 'Cooking', 'Dancing'];
console.log(hobbies.length);
console.log(hobbies[2]);

hobbies.unshift('Music');
hobbies.push('Reading');
// console.log(hobbies);

// hobbies.shift();
// hobbies.pop();

// console.log(hobbies);

const person = {
    name: 'John',
    age: 33,
    isMarried: true,
    info: null,
    state: 'Benin',
    profession: {
        jobTitle: 'Software Engineer',
        company: 'Apple',
        startDate: '20/5/2018',
        endDate: '20/4/2020',
        jD: {
            task1: 'Build App',
            task2: 'Connect Database'
        }
    }
}

console.log(person.profession.startDate, person.profession.endDate);

const properties = [
    'phone',
    'laptop',
    'charger',
    'earpiece',
]


//Arrayed objects
const players = [
    {
        name: 'Lionel Messi',
        age: 36,
        club: 'Inter Miami',
        country: 'Argentina',
    },
    {
        name: 'Christino Ronaldo',
        age: 38,
        club: 'Al Nassr',
        country: 'Portugal',
    },
    {
        name: 'Phil Foden',
        age: 25,
        club: 'Manchester City',
        country: 'England',
    },
    {
        name: 'Cole Palmer',
        age: 22,
        club: 'Chelsea FC',
        country: 'England',
    },
]

console.log(players[1].name, 'is the GOAT')

const timetable = new Date().getDate()
const time = new Date().getMonth() + 1
const table = new Date().getFullYear()
console.log(timetable + '/' + time + '/' + table)

//Arithmetic operators
console.log(1 + 3);
console.log(5 - 3);
console.log(9 / 3);
console.log(4 * 3);

console.log(7 % 3); //modulos operator
console.log(5 ** 3); //exponetial operator

//NaN
console.log(0 / 0);
console.log('string' * 2);

//Infinity
console.log(1 / 0);
console.log(Infinity * Infinity);
console.log(1e+309);

//Increment and Decrement operators
let num = 5
num++ //increase by 1
num-- //decrease by 1
console.log(num);

//Comparison operators
let x = 5;

console.log((x == 8)); //just checks value
console.log((x == 5));

console.log((x === 5));  //checks value and data types
console.log((x === 8));  //checks value and data types
console.log((x === '5'));

console.log(((x != 8)));  //not equal to
console.log(((x !== 8)));  //not equal to or not equal type

console.log((x > 3)); //greater than
console.log((x < 3)); //less than

console.log((x >= 3)); //greater than or equal to
console.log((x <= 3)); //less than or equal to

//Logical operators, AND, OR, NOT Gates

//String Concatenation
let computer = 'I am ' + 'a Windows laptop,' + 'I can be used to write code.'
let school = 'Gomycode'
let fullSen = `${computer} A lot of people use me at ${school}`
console.log(computer);
console.log(fullSen);

//Functions
function add(a, b){
    return console.log(a * b);
}
add(2, 3);
add(3, 4);


function james(x,y){
    x = 12
    y = 4
    return console.log(x / y);
}
james()

//If Statement: if statement will only execute the logic in its block of code if the condition is true
function checkScore(){
let marks = prompt('Enter your score');
    if(marks <= 30){
        alert(`you failed the test`);
    }

    else if (marks >= 31 && marks <= 50){
        alert(`you passed the test`);
    }

    else if (marks >= 51 && marks <= 75){
        alert(`you did great`);
    }

    else if (marks >= 76 && marks <= 100){
        alert(`you did excellently`);
    }

    else{
        alert('Enter a valid score');
    }
}
//Switch Statement
// let day = prompt('Enter a day');
// switch(day){
//     case 'Monday':
//         alert('Its Monday');
//         break;
//     case 'Tuesday':
//         alert('Its Tuesday');
//         break;
//     case 'Wednesday':
//         alert('Its Wednesday');
//         break;
//     case 'Thursday':
//         alert('Its Thursday');
//         break;
//     case 'Friday':
//         alert('Its Friday');
//         break;
//     case 'Saturday':
//         alert('Its Saturday');
// }

function decodeColor(color){
    switch (color) {
        case 1: console.log('Red is your color');
            break;
        case 2: console.log('Blue is your color');
            break;
        case 'x': console.log('Yellow is your color');
            break;
        case 'y': console.log('Black is your color');
            break;
    
        default:
            console.log('Color is not defined');
    }
}

decodeColor(3);

//Ternary Operators
let marks = 75;
let result = (marks >= 60)? 'passed' : 'failed';
console.log(result);

let numb = -6
let ans = (numb < 0)? 'Negative' : (numb > 0) ? 'Positive' : 'equal number';
console.log(ans);




//Chained Tenary Operators
let number1 = 5;   // Positive number
let number2 = -3;  // Negative number
let number3 = 0;   // Zero

let result1 = number1 > 0 ? number1 :
              number1 < 0 ? number1 :
              0;

let result2 = number2 > 0 ? number2 :
              number2 < 0 ? number2 :
              0;

let result3 = number3 > 0 ? number3 :
              number3 < 0 ? number3 :
              0;

console.log(result1); // Output: 5
console.log(result2); // Output: -3
console.log(result3); // Output: 0


//DOM Operators
let but = document.getElementsByTagName("button");

console.log(but);

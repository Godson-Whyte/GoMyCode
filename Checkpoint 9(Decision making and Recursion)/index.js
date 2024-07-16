//Leap Year Checker
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


// Ticket Pricing
function getTicketPrice() {
    // Prompt the user to enter their age
    let age = prompt("Please enter your age:");

    // Convert the age to a number
    age = parseInt(age);

    // Determine the ticket price based on the age
    let ticketPrice;
    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else if (age >= 18) {
        ticketPrice = 20;
    } else {
        ticketPrice = "Invalid age";
    }

    // Display the ticket price
    if (ticketPrice !== "Invalid age") {
        console.log(`The ticket price is $${ticketPrice}.`);
    } else {
        console.log("Please enter a valid age.");
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    // Base cases: if n is 0 or 1, return n
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case: return the sum of the two preceding numbers
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


// Power Function
function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        // Recursive case: multiply the base by the result of the base raised to (exponent - 1)
        return base * power(base, exponent - 1);
    } else {
        // Handle negative exponents by using the reciprocal of the base raised to the absolute value of the exponent
        return 1 / power(base, -exponent);
    }
}

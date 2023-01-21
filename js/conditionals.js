"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

console.log("Problem 1 below");

function analyzeColor(color) {
    const formattedColor = color.toLowerCase()
    if (formattedColor === "blue") {
        return "Blue is the color of the sky!";
    } else if (formattedColor === "red") {
        return "Red is the color of an apple!";
    } else if(formattedColor === "green") {
        return "Green is the color of grass!";
    } else {
        return `Sorry, I don't know anything about ${formattedColor}...`;
    }
}
console.log(analyzeColor("Blue"));
console.log(analyzeColor("rEd"));
console.log(analyzeColor("greEN"));
console.log(analyzeColor("Cyan"));




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log("Problem 2 below");

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
console.log("Problem 3 below");

function analyzeColorRefactor(color) {
    let formattedColorRefactor = color.toLowerCase();
    switch(formattedColorRefactor) {
        case "red" :
            console.log("Apples are red");
            break;
        case "blue" :
            console.log("Blue whale");
            break;
        case "green" :
            console.log("Apples are also green");
            break;
        default:
            console.log(`${formattedColorRefactor} isn't in my vocabulary`);
            break;
    }
}
analyzeColorRefactor("red");
analyzeColorRefactor("BLUE");
analyzeColorRefactor("greEN");
analyzeColorRefactor("mARoon");

// OR
// WE CAN ALSO DO THIS (see below).. sorry, I'm learning and trying out new things

console.log("Problem 3 secondary function below");

function analyzeColorRefactor2(color) {
    let formattedColorRefactor2 = color.toLowerCase();
    let value;
    switch(formattedColorRefactor2) {
        case "red":
            value = `Apples are ${formattedColorRefactor2}, take 2`
            break;
        case "blue":
            value = `${formattedColorRefactor2} whale, take 2`
            break;
        case "green":
            value = `Apples are also ${formattedColorRefactor2}, take 2`
            break;
        default:
            value = `Sorry, ${formattedColorRefactor2} isn't in my vocabulary, take 2`
            break;
    }
    return value
}
console.log(analyzeColorRefactor2("red"));
console.log(analyzeColorRefactor2("blue"));
console.log(analyzeColorRefactor2("green"));
console.log(analyzeColorRefactor2("MAROON"));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
console.log("Problem 4 is the alert");

let userColorInput = prompt("Please input any color of your choice");
alert(analyzeColor(userColorInput));   // used the original function from the first problem in this set
alert(analyzeColorRefactor2(userColorInput)); // refactored function


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
console.log("Problem 5 below");

function calculateTotal(totalAmount, luckyNumber) {
    if (luckyNumber === 0) {
        return (totalAmount - 0);
    } else if (luckyNumber === 1) {
        return (totalAmount - (totalAmount * .10));
    } else if (luckyNumber === 2) {
        return (totalAmount - (totalAmount * .25));
    } else if (luckyNumber === 3) {
        return (totalAmount - (totalAmount * .35));
    } else if (luckyNumber === 4) {
        return (totalAmount - (totalAmount * .50));
    } else if (luckyNumber === 5) {
        return (totalAmount - totalAmount);
    } else {
        return `Sorry, ${luckyNumber} is not one of our lucky numbers.`
    }
}
let newTotal = (calculateTotal(100, 5));
console.log(newTotal);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
console.log("Problem 6 below");

let luckyNum = Math.floor(Math.random() * 6);
alert(`Your lucky number is ${luckyNum}!`);
let userTotalBill = prompt("What is the total of your bill?");
alert(`The price before your discount is ${userTotalBill}!`);
let newUserTotal = calculateTotal(userTotalBill, luckyNum);
alert(`The price AFTER your discount is now ${newUserTotal}`);
console.log(calculateTotal(userTotalBill, luckyNum));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
console.log("Problem 7 are the alerts");

let userConfirm = confirm("Would you like to enter a number?")
if (userConfirm === true) {
    let userNum = prompt("please enter a number.");
    let userNumInteger = parseInt(userNum);
    if (isNaN(userNumInteger)) {
        alert(`${userNum} is the incorrect input data type`);
    } else {
        if ((userNumInteger % 2) === 0) {
            alert(`${userNumInteger} is even!`);
        } else {
            alert((`${userNumInteger} is odd!`));
        }
        alert(`${userNumInteger + 100}`);
        if (userNumInteger >= 0) {
            alert(`${userNumInteger} is a positive number`);
        } else {
            alert(`${userNumInteger} is a negative number`);
        }
    }
}

// refactoring my code to use functions...

function codeRefactor() {
    function evenOdd(number) {
        if (number % 2 === 0) {
            alert(`${number} is even`);
        } else {
            alert(`${number} is odd`);
        }
    }
    function positiveNegative(number) {
        if (number >= 0) {
            alert(`${number} is a positive number`);
        } else {
            alert(`${number} is a negative number`);
        }
    }
    let userConfirm2 = confirm("Would you like to enter a number?");
    if (userConfirm2 === true) {
        let userNum2 = prompt("Please enter a number.");
        let userNum2Integer = parseInt(userNum2);
        if (isNaN(userNum2Integer)) {
            alert(`${userNum2} is the incorrect input data type`);
        } else {
            evenOdd(userNum2Integer);
            alert(`${userNum2Integer + 100}`)
            positiveNegative(userNum2Integer)
        }
    }
}
codeRefactor();


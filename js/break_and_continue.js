"use strict";

let userOdd = prompt("Please input an odd integer between 1 and 50.");
let userOddToInt = parseInt(userOdd);
console.log(`Number to skip is ${userOddToInt}`);
for (let i = 1; i < 50; i += 2) {
    if (userOddToInt % 2 === 0) {
        prompt(`${userOddToInt} is not an odd number, please try again.`);
        break;
    }
    if (i === userOddToInt) {
        console.log(`Yikes! Skipping number ${userOddToInt}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}











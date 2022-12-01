"use strict";

// BREAK AND CONTINUE NUMBER 1

let numberToSkip = parseInt(prompt("Please enter an odd number between 1 and 50."))

while (isNaN === numberToSkip || numberToSkip < 1 || numberToSkip > 50 || numberToSkip % 2 === 0) {
    numberToSkip = parseInt(prompt("Try again, Please enter an odd number between 1 and 50."));
} console.log(`Number to skip is: ${numberToSkip}`);

for (let i = 1; i < 50; i++) {
    if (i === numberToSkip) {
        console.log(`Yikes, skipping number ${numberToSkip}!`);
        continue;
    }
    if (i % 2 === 0) {
        continue;
    }
    if (i >= 50) {
        break;
    } console.log(`Here is an odd number: ${i}`);
}

console.log(`\n`);
















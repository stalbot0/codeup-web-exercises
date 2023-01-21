"use strict";

//
// // FOR LOOPS NUMBER 1 WAS CREATING THE JS AND HTML FILES FOR THIS EXERCISE
// // FOR LOOPS NUMBER 2
function showMultiplicationTable(userNumber) {
   for (let i = 1; i <= 10; i++) {
      console.log(`${userNumber} x ${i} = ${userNumber * i}`);
   }
}
showMultiplicationTable(7);

console.log(`\n`);

// FOR LOOPS NUMBER 3
for (let i = 1; i <= 10; i++) {
   let randomNum = Math.floor(Math.random() * (200-20+1) + 20); // ...(Math.random() * (MAX-MIN + 1) + MIN;
   if (randomNum % 2 === 0) {
      console.log(`${randomNum} is even`);
   }
   if (randomNum % 2 !== 0) {
      console.log(`${randomNum} is odd`);
   }
}

console.log(`\n`);

// FOR LOOPS NUMBER 4

let pyramidOfNumbers = "";
for (let i = 1; i <= 9; i++) {   // external loop
   for (let j = 1; j <= i; j++) {
      pyramidOfNumbers += i;
   }
   pyramidOfNumbers += "\n";
}

console.log(pyramidOfNumbers);

console.log(`\n`);
// used "https://www.tutorialstonight.com/number-pattern-programs-in-javascript" in order to build this code. Was stuck for a long time.


// // FOR LOOPS NUMBER 5
for(let i = 100; i >= 5; i -= 5) {
   console.log(i);
}

console.log(`\n`);
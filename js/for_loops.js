"use strict";

function showMultiplicationTable(userNumber) {
   for (let i = 1; i <= 10; i++) {
      console.log(`${userNumber} x ${i} = ${userNumber * i}`);
   }
   console.log("This table does not multiply past 10");
}
showMultiplicationTable(6);

var randomNum = Math.floor(Math.random() * 181) + 20; // ...(Math.random() * (MAX-MIN + 1) + MIN;
// console.log(randomNum);

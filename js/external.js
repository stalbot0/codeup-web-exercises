// JavaScript with HTML exercises - Codeup

"use strict";
console.log("Hello from external JavaScript");

// No. 1 SOLUTION BELOW;
alert("Welcome to my Website!"); // this is ALSO how you irritate your users


// No . 2 SOLUTION BELOW;
let newPrompt = prompt('What is your favorite color?');
console.log(newPrompt);
alert(`Great, ${newPrompt} is my favorite color too!`);
confirm(`Are you sure that ${newPrompt} is your favorite?`); // Threw this one in for practice


// No. 3 SOLUTION BELOW;
let costOfMoviePerDay = prompt("In USD, what's the cost of each movie per day? (Numerical values only)");
    // console.log(costOfMoviePerDay); could be used to produce the value in the console
let littleMermaid = prompt("How many days did you rent The Little Mermaid? (Numerical values only)");
let brotherBear = prompt("How many days did you rent Brother Bear? (Numerical values only)")
let hercules = prompt("How many days did you rent Hercules? (Numerical values only)");
let totalCostMovies = (`${((costOfMoviePerDay)*(littleMermaid))+((costOfMoviePerDay)*(brotherBear))+((costOfMoviePerDay)*(hercules))}`)
totalCostMovies = Number(totalCostMovies);
console.log(totalCostMovies, typeof totalCostMovies);
alert(`The total cost of your movies is ${totalCostMovies} USD!`); // The answer should be 27.

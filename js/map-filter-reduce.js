"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
var threeLanguages = users.filter(function(user) {
    return user.languages.length >= 3;
});
console.log(threeLanguages);

// TODO: Use .map to create an array of strings where each element is a user's email address
var emailAddress = users.map(function(user) {
    return user.email;
});
console.log(emailAddress);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

var totalExperience = users.reduce(function (totalYears, yearsPerPerson) {
    return totalYears + yearsPerPerson.yearsOfExperience;
}, 0);
console.log(totalExperience);

// TODO: Use .reduce to get the longest email from the list of users.
var longestEmail = users.reduce(function (longest, user) {
    return longest.email.length > user.email.length
}, 0);
console.log(longestEmail);
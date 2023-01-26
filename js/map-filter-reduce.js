"use strict";

(function () {

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
    var threeLanguagesArr = users.filter(function (user) {
        if (user.languages.length >= 3) {
            return user.languages
        }
    });
    console.log(threeLanguagesArr);

// TODO: Use .map to create an array of strings where each element is a user's email address
    var emailAddress = users.map(function (user) {
        return user.email;
    });
    console.log(emailAddress);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    var totalExperience = users.reduce(function (totalYears, yearsPerPerson) {
        return (totalYears + yearsPerPerson.yearsOfExperience);
    }, 0);
    var avgYears = (totalExperience / users.length);
    console.log(avgYears);

// TODO: Use .reduce to get the longest email from the list of users.
    var longestEmail = users.reduce(function (longestEmailSoFar, user) {
        // console.log(longestEmailSoFar);
        if (user.email.length >= longestEmailSoFar.length) {
            return user.email;
        } else {
            return longestEmailSoFar;
        }
    }, '');
    console.log(longestEmail);

    // TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    var userNames = users.reduce(function (accumulatedUser, user) {
        return `${accumulatedUser}, ${user.name}`;
    }, `Your instructors are:`);
    console.log(userNames);

    ///////BONUS////////


    // const uniqueLanguages = users.reduce(function(languages, user) {
    //     user.languages.forEach(language => {
    //         if (!languages.includes(language)) {
    //             languages.push(language);
    //         }
    //     });
    //     return languages;
    // }, []);
    // console.log(uniqueLanguages);



}());
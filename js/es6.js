(function() {
    /*
     * Complete the TODO items below
     */

    const users = [
        {
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash']
        },
        {
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript']
        },
        {
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php']
        },
        {
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql']
        },
        {
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php']
        }
    ];


// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
    const name = 'stephen';
    const email = 'stephen.clark.talbot@gmail.com';
    const languages = ['html', 'css', 'javascript'];

// languages = "blah blah blah"; <-- can't reassign


// TODO: rewrite the object literal using object property shorthand
    users.push({
        name,
        email,
        languages
    });
    console.log(users, "OBVAS");
    console.log('\n');


// TODO: replace `var` with `let` in the following variable declarations
    let emails = [];
    let names = [];


// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
    users.forEach((user) => {
        return emails.push(user.email);
    });
    console.log(emails, "arrow fxn #1");
    console.log('\n');

// users.forEach(function(user) {
//     return names.push(user.name);
// });
    users.forEach((user) => {
        names.push(user.name)
    });
    console.log(names, "arrow fxn #2");
    console.log('\n');


// TODO: replace `var` with `let` in the following declaration
    let developers = [];


    users.forEach(function (user) {
        // TODO: rewrite the code below to use object destructuring assignment
        //       note that you can also use destructuring assignment in the function
        //       parameter definition
        // const name = user.name (old)
        // const email = user.email (old)
        // const languages = user.languages (old)

        const {name, email, languages} = user // destructing happens by taking out the old variables and just re-structuring to make our lives easier

        // TODO: rewrite the assignment below to use template strings
        // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
        developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
    });
    console.log(developers);
    console.log('\n');


////////COULD ALSO DO IT THIS WAY BY PLUGGING STRAIGHT INTO THE PARAMETERS!!!!/////////
    // TODO: replace `var` with `let` in the following declaration
    let developers2 = [];
    users.forEach(function ({name, email, languages}) {
        // TODO: rewrite the code below to use object destructuring assignment
        //       note that you can also use destructuring assignment in the function
        //       parameter definition ( we dont need to do this if we are using the objects as parameters )
        // const name = user.name (old)
        // const email = user.email (old)
        // const languages = user.languages (old)

        // TODO: rewrite the assignment below to use template strings
        // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
        developers2.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
    });
    console.log(developers2);
    console.log('\n');


// TODO: Use `let` for the following variable
    let list = '';


// TODO: rewrite the following loop to use a for..of loop

// developers.forEach(function (developer) {
    for (const developer of developers) { // const what we want the parameter to be of 'developers' which is the array we want to function through

        // TODO: rewrite the assignment below to use template strings
    list += `'<li>${developer}</li>`;
}
list = `<ul>${list}</ul>`;

    console.log(list);
})();

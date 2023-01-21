(function() {
    "use strict";
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: "Stephen",
        lastName: "Talbot"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    console.log('\n');

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return (`Hello from ${this.firstName} ${this.lastName}`);
    }
    console.log(person.sayHello());

    console.log('\n');
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with
     * the name of the person
     * the amount before the discount
     * the discount, if any
     * and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper) {
        if(((shopper.amount)) > 200) {
            console.log(`${shopper.name}, your total is $${shopper.amount}. Since you spent over $200, you get a 12% discount! Making your new total $${shopper.amount - (shopper.amount * .12)}`);
        } else if(((shopper.amount) <= 200)) {
            console.log(`${shopper.name}, your total is $${shopper.amount} and since you did not spend over $200, you do not qualify for the discount. Your total is still $${shopper.amount}`);
        }
    });

    console.log('\n');




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // could do this to push information to the array
        // let books = [];
        // books.push({
        //      title: "insert title",
        //      author: {
        //          firstName: "insert first name",
        //          lastName: "insert last name"
        //      }
        //  });
    let books = [
        {
            id: 1,
            title: "The Slippery Slope",
            author: {
                firstName: "Jimminy",
                lastName: "Cricket"
            }
        },
        {
            id: 2,
            title: "Who told my Grandma that I am an Alien Robot",
            author: {
                firstName: "Zeeb",
                lastName: "Zorb"
            }
        },
        {title: "This is a book",
            author: {
                firstName: "Sleepy",
                lastName: "Boi"
            }
        },
        {title: "This is NOT a book",
            author: {
                firstName: "Smol",
                lastName: "Baby"
            }
        },
        {title: "Is this a book?",
            author: {
                firstName: "Confused",
                lastName: "Gremlin"
            }
        }
    ];
    console.log(books[4].author.lastName)

    console.log('\n');



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


books.forEach(function(book) {
    if(book.title === "The Slippery Slope") {
        console.log(`Book # ${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        console.log(`-----`);
    } if(book.title === "Who told my Grandma that I am an Alien Robot") {
        console.log(`Book # ${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        console.log(`-----`);
    } if(book.title === "This is a book") {
        console.log(`Book # ${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        console.log(`-----`);
    } if(book.title === "This is NOT a book") {
        console.log(`Book # ${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
        console.log(`-----`);
    } if(book.title === "Is this a book?") {
        console.log(`Book # ${books.indexOf(book) + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    }
});
    console.log('\n');

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, fName, lName) {
        let book = {
            title: title,
            author: {
                firstName: fName,
                lastName: lName
            }
        };
        // add a showBookInfo function to each book
        book.showBookInfo = function(index) {
            console.log(`
            Book #${index}
            Title: ${this.title}
            Author: ${this.author.firstName} ${this.author.lastName}
            `)
        }
        return book;
    }
    books = []; // called the array again to push information to it
    books.push(createBook("PeePee", "PooPoo", "Snot"));
    books.push(createBook("Dune", "Frank", "Herbert")); // pushes the book strings from the function being called into the previous books array.
    console.log(books);


    let index = 1; //this is the method to reset the index to 1 and uses a for of loop to call the other function in the create book function to show the info as the indeces keep going up
    for (const book of books) {
        book.showBookInfo(index);
        index++
    }

    //////ANOTHER WAY TO WRITE THE SAME THING BUT AS A REGULAR FUNCTION//////
    function showBookInfo2(book) {
        console.log(`
            Book #${index}
            Title: ${book.title}
            Author: ${book.author.firstName} ${book.author.lastName}
            `)
    }
    let index2 = 1;
    for (const book of books) {
        showBookInfo2(book);
        index2++
    }


})();
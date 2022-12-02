(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Stephen", "Michael", "John", "Ricardo"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    console.log('\n');

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(`The first name is ${names[0]}`);
    console.log(`The second name is ${names[1]}`);
    console.log(`The third name is ${names[2]}`);
    console.log(`The fourth name is ${names[3]}`);

    console.log('\n');
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    console.log('\n');


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (aName) {
        console.log(aName);
    });

    console.log('\n');
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let numArray = [1, 2, 3, 4, 5];

    function returnsFirst(arr) {
        console.log(arr[0]);
    }
    returnsFirst(numArray);

    function returnsSecond(arr) {
        console.log(arr[1]);
    }
    returnsSecond(numArray);

    function returnsLast(arr) {
        console.log(arr.length - 1);
    }
    returnsLast(numArray);

})();
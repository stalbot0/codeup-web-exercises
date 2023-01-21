(function(){
    "use strict";

    ////// WHEN OPENING THE PLANETS-JS.HTML FILE IN THE BROWSER FOR SOME REASON YOU MUST
    ////// REFRESH THE PAGE TO SHOW THE RESULTS OF EACH STEP

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('The Sun');
    console.log(planets);
    console.log('----------');

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);
    console.log('----------');

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);
    console.log('----------');

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);
    console.log('----------');

    console.log('Finding and logging the index of "Earth" in the planets array.');
    let earthIndex = planets.indexOf('Earth');
    console.log(`Earth is at index: [${earthIndex}]`);
    console.log('----------');

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);
    console.log('----------');

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
    console.log('----------');

})();
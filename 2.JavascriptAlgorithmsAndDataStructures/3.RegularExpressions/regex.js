// Using the test method
let testString = "Hello World!";
let testRegex = /Hello/;
let testResult = testRegex.test(testString);
//console.log(testResult);
// ----------------------------------------------
// Match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let waldoResult = waldoRegex.test(waldoIsHiding);
//console.log(waldoResult);
// ----------------------------------------------
// Match a string literal with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
//console.log(petResult);
// ----------------------------------------------
// Ignore case while matching
let ignoreString = "freeCodeCamp";
let ignoreRegex = /freecodecamp/i;
let ignoreResult = ignoreRegex.test(ignoreString);
//console.log(ignoreResult);
// ----------------------------------------------
// Extract matches
let extractString = "Extract the word 'coding' from this string.";
let extractRegex = /coding/;
let extractResult = extractString.match(extractRegex);
//console.log(extractResult);
// ----------------------------------------------
// Find more than the first match
let twinkleString = "Twinkle, twinkle, little star";
let twinkleRegex = /twinkle/gi;
let twinkleResult = twinkleString.match(twinkleRegex);
//console.log(twinkleResult);
// ----------------------------------------------
// Match anything with wildcard period
let wildString = "Let's have some fun with regular expressions!";
let wildRegex = /.un/;
let wildResult = wildRegex.test(wildString);
//console.log(wildResult);
// ----------------------------------------------
// Match a single character with multiple possibilities
let quoteString = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let vowelResult = quoteString.match(vowelRegex);
console.log(vowelResult);
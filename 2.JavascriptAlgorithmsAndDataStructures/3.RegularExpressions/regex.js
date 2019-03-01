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
console.log(petResult);

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
console.log(waldoResult);

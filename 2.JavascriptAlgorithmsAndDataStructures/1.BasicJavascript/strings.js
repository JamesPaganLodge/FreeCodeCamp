// Example
var firstName = "Alan";
var lastName = "Turing";

// Declaring variables
var myFirstName = "Harry";
var myLastName = "Potter";
// ------------------------------------------
// Double quoted string
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// ------------------------------------------
// Single quotes
var myStr = "<a href=\"http://www,example.com\" target=\"_blank\">Link</a>";
var myStrNew = '<a href="http://www.example.com" target="_blank">Link</a>';
// ------------------------------------------
// Escape sequences
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// ------------------------------------------
// Concat strings
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";
// ------------------------------------------
// Concat strings with +=
var ourStr = "I come first. ";
outStr += "I come second.";
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// ------------------------------------------
// Construct strings with variables
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
var myName = "Harry Potter";
var myStr = "My name is " + myName + " and I am well!";
// ------------------------------------------
// Appending variables
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "most excellent!";
var myStr = "Learning to code is ";
myStr += someAdjective;
// ------------------------------------------
// Find the length of String
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
// ------------------------------------------
// Find first char of string
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
// ------------------------------------------
// String immutability
var myStr = "Jello World";
myStr[0] = "H"; // This doesn't change myStr to "Hello World" as you cannot change individual chars
myStr = "Hello World";
// ------------------------------------------
// Find Nth character of string
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
// ------------------------------------------
// Find last character of string
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
// ------------------------------------------
// Find Nth to last character of string
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
var lastName = "LoveLace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// ------------------------------------------

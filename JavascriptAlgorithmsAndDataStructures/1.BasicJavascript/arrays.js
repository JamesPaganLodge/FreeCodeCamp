// Example
var ourArray = ["John", 23];

// Multiple values in one variable
var myArray = ["Jepl", 32];
// ------------------------------------------
// Nested arrays
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["this array"], ["is in another"]];
// ------------------------------------------
// Access arrays with indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70];
var myData = myArray[0];
// ------------------------------------------
// Modify array data with indexes
var ourArray = [18,64,99];
ourArray[1] = 45;

var myArray = [18,64,99];
myArray[0] = 45;
// ------------------------------------------
// access multi-dimension arrays
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[2][1]; // access the value 8
// ------------------------------------------
// Array manipulation: push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray = ["Stimpson", "J", "cat", ["happy", "joy"]]
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// ------------------------------------------
// Array manipulation: pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
// ------------------------------------------

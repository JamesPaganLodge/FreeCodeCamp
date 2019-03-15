// Use an array to store a collection of data
let yourArray = ["one", 2, false, "another string", 100]; // change this line
// ----------------------------------------------
// Access an array's contents using bracket notation
let bracketArray = ["a", "b", "c", "d"];
bracketArray[1] = "not b";
//console.log(bracketArray);
// ----------------------------------------------
// Add items to an array with push() and unshift()
function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

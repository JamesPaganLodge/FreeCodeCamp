// Iterate with while loops
var myArray = [];

// push the values 0,1,2,3,4 to the array
var i = 0;

while(i < 5) {
  myArray.push(i);
  i++;
}
// ------------------------------------------
// Iterate with For loops
var myArray = [];

for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
// ------------------------------------------
// Iterate odd numbers with a for loop
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i)
}
// ------------------------------------------
// Count backwards with a for loop
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// ------------------------------------------
// Iterate through an array with a for loop
var myArray = [2,3,4,5,6];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
  total += myArray[i];
}
// ------------------------------------------
// Nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

//console.log(multiplyAll([[1],[2],[3]])); // 6
//console.log(multiplyAll([[1, 2],[3, 4],[5, 6, 7]])); // 5040
//console.log(multiplyAll([[5, 1],[0.2, 4, 0.5],[3, 9]])); // 54
// ------------------------------------------
// Iterate with do while loops
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 10);

console.log(myArray);

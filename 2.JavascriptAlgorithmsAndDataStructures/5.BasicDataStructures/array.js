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

//console.log(mixedNumbers(["IV", 5, "six"]));
// ----------------------------------------------
// Remove items from an array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();

  return [shifted, popped];
}

//console.log(popShift(["challenge", "is", "not", "complete"]));
// ----------------------------------------------
// Remove items using splice()
function sumOfTen(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}

//console.log(sumOfTen([2,5,1,5,2,1]));
// ----------------------------------------------
// Add items using splice()
function htmlColorNames(arr) {
  arr.splice(0,2,"DarkSalmon", "BlanchedAlmond");
  return arr;
}

//console.log(htmlColorNames(["DarkGolendRod", "WhiteSmoke", "LavenderBlush", "PaleTurqoise", "FireBrick"]));
// ----------------------------------------------
// Copy array items using slice()
function forecast(arr) {
  arr = arr.slice(2,4);
  return arr;
}

//console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));
// ----------------------------------------------
// Copy an array with the spread operator
function copyMachine(arr, num) {
  let newArr = [];

  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }

  return newArr;
}

//console.log(copyMachine([true, false, true], 2));
// ----------------------------------------------
// Combine arrays with the spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];

  return sentence;
}

//console.log(spreadOut());
// ----------------------------------------------
// Check for the presence of an element with indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) == -1)
    return false;
  else
    return true;
}

//console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// ----------------------------------------------
// Iterate through all an array's items using for loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1)
      newArr.push(arr[i]);
  }
  return newArr;
}

//console.log(filteredArray([[3,2,3],[1,6,3],[3,13,26],[19,3,9]], 3));
// ----------------------------------------------
// Create complex multi-dimensional arrays
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array"],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitart", "depth"],
  [
    ["deep"]
  ],
  [
    [
      ["deeper"]
    ]
  ],
  [
    [
      [
        ["deepest"]
      ]
    ]
  ]
];

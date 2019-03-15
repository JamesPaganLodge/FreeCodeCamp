// Use the javascript console to check the value of a variable
let a = 5;
let b = 1;
a++
//console.log(a);
let sumAB = a + b;
//console.log(sumAB);
// ----------------------------------------------
// Understanding the difference between fcc and browser console
let outputTwo = "This will print to the browser console 2 times";
//console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
//console.clear();
//console.log(outputOne);
// ----------------------------------------------
// Use typeof to check the type of a variable
let seven = 7;
let three = "3";
//console.log(seven + three);
//console.log(typeof seven);
//console.log(typeof three);
// ----------------------------------------------
// Catch misspelled variable and function names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables; //recievables - payable;
//console.log(`Net working capital is: ${netWorkingCapital}`);
// ----------------------------------------------
// Catch unclosed parentheses, brackets, braces and quotes
let myArray = [1,2,3]; //[1,2,3;
let arraySum = myArray.reduce((previous, current) => previous + current);
//console.log(`Sum of array values is: ${arraySum}`);
// ----------------------------------------------
// Catch mixed usage of single and double quotes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
//console.log(innerHtml);
// ----------------------------------------------
// Catch use of assignment instead of equality operator
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

//console.log(result);
// ----------------------------------------------
// Catch missing open and closing parenthesis after function call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

//let missing = getNine;
let missing = getNine();
//console.log(missing);
// ----------------------------------------------
// Catch arguements passed in the wrong order when calling a function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
//let power = raiseToPower(exp, base);
let power = raiseToPower(base, exp);
//console.log(power);
// ----------------------------------------------
// Catch off by one errors when using indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;

  //for (let i = 1; i <= len; i++) {
  for (let i = 0; i < len; i++) {
    //console.log(firstFive[i]);
  }
}

countToFive();
// ----------------------------------------------
// Use caution when reinitializing variables inside a loop
function zeroArray(m, n) {
  let newArray = [];
  //let row = [];

  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

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
console.log(innerHtml);

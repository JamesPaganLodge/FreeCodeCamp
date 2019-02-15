// Use arrow functions to write concise anonymous functions
var magic = function() {
  'use strict';
  return new Date();
}

const MAGIC = () => new Date();
// ----------------------------------------------
// Arrow functions with parameters
var myConcat = function(arr1, arr2) {
  'use strict';
  return arr1.concat(arr2);
}

const MYCONCAT = (arr1, arr2) => arr1.concat(arr2);
//console.log(MYCONCAT([1, 2], [3, 4, 5]));
// ----------------------------------------------
// Higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  'use strict';
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) == 0).map((num) => Math.pow(num, 2));
  return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

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
//console.log(squaredIntegers);
// ----------------------------------------------
// Set function default parameters
const increment = (function() {
  'use strict';
  return function increment(number, value = 1) {
    return number + value;
  }
})();

//console.log(increment(5, 2));
//console.log(increment(5));
// ----------------------------------------------
// Using the rest operator with function parameters
const sum = (function() {
  'use strict';
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));
console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
console.log(sum());

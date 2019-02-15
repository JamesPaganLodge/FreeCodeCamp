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
console.log(MYCONCAT([1, 2], [3, 4, 5]));

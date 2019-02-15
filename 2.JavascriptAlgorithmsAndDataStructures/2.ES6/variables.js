// Exploring the differences between var and let keywords
// Original
var catName;
var quote;

function catTalk() {
  'use strict';

  catName = "Oliver";
  quote = catName + " says Meow!";
}

//catTalk();
//console.log(catName);
//console.log(quote);
// Updated
let catName2;
let quote2;

function catTalk2() {
  'use strict';

  catName2 = "Oliver";
  quote2 = catName2 + " says Meow!";
}

//catTalk();
//console.log(catName2);
//console.log(quote2);
// ----------------------------------------------
// Var and Let variable scope
function checkScope() {
  'use strict';

  let i = "function scope";

  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }

  console.log("Function scope i is: ", i);
  return i;
}

//checkScope();
// ----------------------------------------------
// Read-only variables with const
function printManyTimes(str) {
  'use strict';

  const SENTENCE = str + " is cool!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}

//printManyTimes("freeCodeCamp");
// ----------------------------------------------
// Mutate an array declared with const
const S = [5, 7, 2];

function editInPlace() {
  'use strict';

  S[0] = 2;
  S[1] = 5;
  S[2] = 7;
}

//console.log(S);
//editInPlace();
//console.log(S);
// ----------------------------------------------
// Prevent object mutation
function freezeObj() {
  'use strict';

  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

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

checkScope();

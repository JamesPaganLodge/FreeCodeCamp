// Exploring the differences between var and let keywords
var catName;
var quote;

function catTalk() {
  'use strict';

  catName = "Oliver";
  quote = catName + " says Meow!";
}

console.log(catTalk());

// using the conditional (ternary) operator
function checkEqual(a, b) {
  return a == b ? true : false;
}

//console.log(checkEqual(1, 2));
//console.log(checkEqual(1, 1));
//console.log(checkEqual(1, -1));
// ----------------------------------------------
// Using multiple chained conditional (ternary) operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

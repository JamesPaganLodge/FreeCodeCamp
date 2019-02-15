// ParseInt
function convertToInteger(str) {
  return parseInt(str);
}

//console.log(convertToInteger("56")); // 56
//console.log(convertToInteger("77")); // 77
//console.log(convertToInteger("JamesBond")); // NaN
// ----------------------------------------------
// Parse Int with a radix (base numebr type)
function convertToIntegerRadix(str) {
  return parseInt(str, 2);
}

console.log(convertToIntegerRadix("10011")); // 19
console.log(convertToIntegerRadix("111001")); // 57
console.log(convertToIntegerRadix("JamesBond")); // NaN

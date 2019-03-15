// Reverse a string
function reverseString(str) {
  let arr = [];
  
  arr = str.split("");
  arr.reverse();
  str = arr.join("");

  return str;
}

console.log(reverseString("hello"));

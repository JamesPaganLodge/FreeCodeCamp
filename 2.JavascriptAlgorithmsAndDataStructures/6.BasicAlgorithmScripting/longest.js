// Find the longest word in a string
function findLongestWordLength(str) {
  let arr = [];
  let length = 0;
  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length)
      length = arr[i].length;
  }

  return length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

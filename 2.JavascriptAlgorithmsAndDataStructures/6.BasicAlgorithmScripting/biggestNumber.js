// Return the largest number in arrays
function largestOfFour(arr) {
  let bigNums = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i][0];
    
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > num) 
        num = arr[i][j];
    }
    bigNums.push(num);
  }

  return bigNums;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

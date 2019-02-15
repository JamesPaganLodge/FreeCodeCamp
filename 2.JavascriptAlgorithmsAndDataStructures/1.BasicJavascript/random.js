// Generate random fractions
function randomFraction() {
  return Math.random();
}

//console.log(randomFraction());
// ----------------------------------------------
// Generate random whole numbers
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

//console.log(randomWholeNum());
// ----------------------------------------------
// Generate random whole numbers within a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(1, 3));

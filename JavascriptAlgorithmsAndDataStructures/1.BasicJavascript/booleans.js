function welcomeToBooleans() {
  return true;
}
// ------------------------------------------
// Conditional logic with if statements
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }

  return "No, it's false";
}
console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }

  return "No, that was false";
}
console.log("\nTure or False");
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
// ------------------------------------------
// Comparison with equality operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log("\nEquality");
console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12"));
// ------------------------------------------
// Comparison with the strict equality operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log("\nStrict Equality");
console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict("7"));
// ------------------------------------------
// Compare equality
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log("\nCompare Equality");
console.log(compareEquality(10, "10"));
console.log(compareEquality("20", 20));
// ------------------------------------------

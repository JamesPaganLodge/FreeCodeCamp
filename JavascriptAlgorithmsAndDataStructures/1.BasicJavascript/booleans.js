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
// Comparison with inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log("\nInequality Operator");
console.log(testNotEqual(10));
console.log(testNotEqual(99));
console.log(testNotEqual("99"));
console.log(testNotEqual(12));
console.log(testNotEqual("12"));
console.log(testNotEqual("bob"));
// ------------------------------------------
// Comparison with strict inequality operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log("\nStrict inequality operator");
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("bob"));
// ------------------------------------------
// Comparison with greater than operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or under";
}
console.log("\nGreater Than");
console.log(testGreaterThan(10));
console.log(testGreaterThan(0));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));
// ------------------------------------------
// Comparison with greater than or equal operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}
console.log("\nGreater than or equal");
console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(21));
// ------------------------------------------

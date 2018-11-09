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
// Comparison with less than operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}
console.log("\nLess than");
console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));
// ------------------------------------------
// Comparison with less than or equal operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller than or equal to 12";
  }

  if (val <= 24) {
    return "Smaller than or equal to 24";
  }

  return "More than 24";
}
console.log("\nLess than or equal");
console.log(testLessOrEqual(0));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));
// ------------------------------------------
// Logical AND && operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}
console.log("\nLogical AND");
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));
// ------------------------------------------
// Logical OR || operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}
console.log("\nLogical OR");
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));
// ------------------------------------------
// Else statements
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }

  return result;
}
console.log("\nElse statements");
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));
// ------------------------------------------
// Else if statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log("\nElse if statements");
console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));
// ------------------------------------------
// If else logical order
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log("\nIf else logical order");
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));
// ------------------------------------------
// Chaining if else statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
}
console.log("\nChaining if/else statements");
console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));
// ------------------------------------------

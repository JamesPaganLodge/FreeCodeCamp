// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Writing reusable js with functions
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
// ------------------------------------------
// Passing values to functions
function ourFunctionWithArgs(a,b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a,b) {
  console.log(a + b);
}
functionWithArgs(1,2);
functionWithArgs(7,9);
// ------------------------------------------
// Global scope and functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}
fun1();
fun2();
// ------------------------------------------

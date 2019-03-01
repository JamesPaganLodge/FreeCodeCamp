// Use class syntax to define a constructor function
function makeClass() {
  "use strict";

  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carror.name); // should be 'carrot'

// Use class syntax to define a constructor function
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(vegetableName) {
      this.name = vegetableName;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
//console.log(carrot.name); // should be 'carrot'

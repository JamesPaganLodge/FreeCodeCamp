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
// ----------------------------------------------
// Use getters and setters to controla access to an object
function makeClass2() {
  "use strict";
  class Thermostat {
    constructor(temp) {
      this.farenheit = temp;
    }
    get temperature() {
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(temp) {
      this.farenheit = temp * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76); // setting in farenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);

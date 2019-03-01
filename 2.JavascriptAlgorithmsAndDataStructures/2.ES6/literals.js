// Create strings using template literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";

  const resultDisplayarray = arr.map((item) => `<li class="text-warning">${item}</li>`);

  return resultDisplayarray;
}

const resultDisplayarray = makeList(result.failure);
//console.log(resultDisplayarray);
// ----------------------------------------------
// Write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => ({name, age, gender});

//console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
// ----------------------------------------------
// Write concise declarative dunctions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    return this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

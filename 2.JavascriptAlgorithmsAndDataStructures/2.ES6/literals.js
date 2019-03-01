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
console.log(resultDisplayarray);

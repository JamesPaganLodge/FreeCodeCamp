// Destructuring assignment to assign variables from objects
const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  'use strict';
  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}

//console.log(getTempOfTmrw(AVG_TEMPERATURE));
// ----------------------------------------------
// Destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxTempOfTmrw(forecast) {
  'use strict';
  const { tomorrow : { max : maxOfTomorrow } } = forecast;
  return maxOfTomorrow;
}

//console.log(getMaxTempOfTmrw(LOCAL_FORECAST));
// ----------------------------------------------
// Destructuring assignment to assign variables from arrays
let a = 8, b = 6;
(() => {
  'use strict';
  [b, a] = [a, b];
})();

//console.log(a);
//console.log(b);
// ----------------------------------------------
// Destructuring assignment with rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  'use strict';
  const [a,b,...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
//console.log(arr); // should be [3,4,5,6,7,8,9,10]
//console.log(source); // should be [1,2,3,4,5,6,7,8,9,10]
// ----------------------------------------------
// Destructuring assignment to pass an object as a functions parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
  'use strict';

  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

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

console.log(getTempOfTmrw(AVG_TEMPERATURE));

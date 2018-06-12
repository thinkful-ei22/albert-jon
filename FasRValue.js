'use strict';
const hazardWarningCreator = function (typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter ++;
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
  };

};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water on the road');
const tornadoWarning = hazardWarningCreator('High winds today');

hazardWarningCreator(rocksWarning);

rocksWarning('Los Angeles');
floodWarning('New Orleans');
tornadoWarning('Kansas');
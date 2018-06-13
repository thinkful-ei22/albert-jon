'use strict';

const sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function modifyString(str) {
  return str.split(' ').reduce(function(accum, currentElement) {
    console.log(accum);
    if (currentElement.length === 3) {
      accum += ' ';
    }
    else {
      accum += currentElement[currentElement.length - 1].toUpperCase(); 
    };
    return accum;
  }, '');
}

console.log(modifyString(sentence));

'use strict';

const repeat = function (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
};

const hello = function () {
  console.log('Hello World');
};

const goodbye = function() {
  console.log('Goodbye World');
};

repeat(hello, 5);
repeat(goodbye, 5);
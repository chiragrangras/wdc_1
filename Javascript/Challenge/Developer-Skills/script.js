'use strict';
// Coding Challenge #1

// 1) Undersating the problem
// - Array transformed to string, separated by ...
// What  is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transfrom array into string
// - Transfrom each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// = Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);

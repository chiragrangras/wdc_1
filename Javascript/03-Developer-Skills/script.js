// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const tempertures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowers temp
// How to compute max and min temperatures?
// What's a sensor error ? And what to do ?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Finds max value in temp array
// - Finds min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  let i;

  for (i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return (max = min);
};

const amplitude = calcTempAmplitude(tempertures);
console.log(amplitude);

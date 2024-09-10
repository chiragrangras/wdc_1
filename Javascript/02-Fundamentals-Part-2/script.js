"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can driver');

// const interface = 'Audio';
// const private = 534;

/* function logger(){
    console.log('My name is Joans.');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    const juise = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juise;
}

const appleJuise = fruitProcessor(5,0);
console.log(appleJuise);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declarartion 
function calcAge1 (birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}

const age2 = calcAge2(1993);

console.log(age1,age2);
*/

// Arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yeasrUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yeasrUntilRetirement(1993, 'Jonas'));
console.log(yeasrUntilRetirement(1980, 'Bob'));

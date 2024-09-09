'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can driver');

// const interface = 'Audio';
// const private = 534;

function logger(){
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
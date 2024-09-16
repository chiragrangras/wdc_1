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

/////////////////////////////////////////////
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

/////////////////////////////////////////////
// Function Calling Other Functions 
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juise = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juise;
}

console.log(fruitProcessor(2,3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yeasrUntilRetirement = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has retires already`);
    return -1;
  }
};
console.log(yeasrUntilRetirement(1991, "Jonas"));
console.log(yeasrUntilRetirement(1970, "Mike"));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Mehul";
console.log(friends);
// friends = ['Bob','Alice'];

const firstName = "Joans";
const joans = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(joans);
console.log(joans.length);

// Excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add Elements
const newLength = friends.push("Mehul");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

const jaonsArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Micharl','Peter','Steven']
];

const joans = {
  firstName : 'Joans',
  lastName : 'Schmedtmann',
  age : 2037 -1991,
  job : 'teacher',
  friends : ['Micharl','Peter','Steven']
};
*/
const joans = {
  firstName: "Joans",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micharl", "Peter", "Steven"],
};
console.log(joans);

console.log(joans.lastName);
console.log(joans["lastName"]);

const nameKey = "Name";
console.log(joans["first" + nameKey]);
console.log(joans["last" + nameKey]);

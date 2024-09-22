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

// exercise
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

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Micharl','Peter','Steven']
];


//////////////////////////////////
// Dot vs. Brackets Notations
const joans = {
  firstName : 'Joans',
  lastName : 'Schmedtmann',
  age : 2037 -1991,
  job : 'teacher',
  friends : ['Micharl','Peter','Steven']
};

const joans = {
  firstName: "Joans",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(joans);

console.log(joans.lastName);
console.log(joans["lastName"]);

const nameKey = "Name";
console.log(joans["first" + nameKey]);
console.log(joans["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Joans? Choose between firstName,lastName,age,job and friends"
);

if (joans[interestedIn]) {
  console.log(joans[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Joans? Choose between firstName,lastName,age,job and friends"
  );
}

joans.location = 'Portugal';
joans['twitter'] = '@joansschmedtman';
console.log(joans);

console.log(`${joans.firstName} has ${joans.friends.length} friends, and his best friend is called ${joans.friends[0]}`);
const joans = {
  firstName: "Joans",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   //console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      joans.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(joans.calcAge());
console.log(joans.age);
console.log(joans.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is highter than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is highter than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4]);

for (let i = 0; i < jonas.length; i++) {
  // Rading from joans array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

let i;
for (i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('----Only String----');
for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('----Break with Number----');
for (let i = 0; i < jonas.length; i++) {
  if(typeof jonas[i] === 'number') break;
  
  console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

let i;
for (i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

let exercise;
for (exercise = 1; exercise <= 3; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);
  
  let rep;
  for (rep = 1; rep < 4; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop ia aboout end........");
}

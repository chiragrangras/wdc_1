// const massMark = 78;
// const heightMark = 1.69; // meters
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88; // meters
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn , markHigherBMI);

// const massMark = 95;
// const heightMark = 1.88; // meters
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`)
// }
// else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`)
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy !');
// } else if ( scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy !");
// } else if ( scoreKoalas === scoreDolphins) {
//     console.log("Both win the trophy !");
// }

// Bouns 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >=100 && scoreKoalas >= 100) {
//   console.log("Both win the trophy");
// } else {
//     console.log("No one win the trophy");
// }


const bill = 275;

const tip = bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the trip was ${tip}, and the total value ${bill + tip}`);
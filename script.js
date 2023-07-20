"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 🚗");
*/

// ************************    FUNCTIONS      ************************
/*
function logger() {
  console.log("My name is Faiz");
}
logger();

function carSpeed(gear, speed) {
  const car = `car is on ${gear} gear and speed of car is ${speed} kph.`;
  return car;
}
// const speedCheck=carSpeed(6, 285);
console.log(carSpeed(6, 285));


function swim(distance, time) {
  const swimmer = `faiz has completed ${distance} km in time ${time} minutes.`;
  return swimmer;
}
const faiz = swim(5, 59);
console.log(faiz);
*/

// ************************FUNCTIONS DECLARATION************************
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

// ************************FUNCTIONS EXPRESSION************************

const calcAge2 = function (birthYear) {
  return 2307 - birthYear;
};
// const age2=calcAge1(1998);
console.log(age1, calcAge1(1998));
*/

// ************************ ARROW FUNCTIONS  ************************
/*
const calcAge3= birthYear => 2037-birthYear;
const age3=calcAge3(1998);
console.log(age3);

const dadAge= birthYear=>2023-birthYear
const age=dadAge(1969);
console.log(age);

const yearUntilRetirement = (firstName, birthYear) => {
  const age = 2023 - birthYear;
  const rerirementAge = 65 - age;
  // return rerirementAge;
  return `${firstName} retiers in ${rerirementAge} years`;
};
console.log(yearUntilRetirement("faiz", 1969));
console.log(yearUntilRetirement("faisal", 1980));
*/

// ***************FUNCTION CALLING OTHER FUNCTIONS********************

// const carBrand= function(){
//     console.log('lambo');
// }
// // carBrand();

// function carSpeed(gear, speed) {
//     const brand =carBrand();
//     const car = `${carBrand()} is on ${gear} gear and speed of car is ${speed} kph.`;
//     return car;
//   }
// //   const speedCheck=carSpeed(6, 285);
//   console.log(carSpeed(6, 285));

/*
function cutFruitPieces(fruit) {
  return 4 * fruit;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `juice with ${applePieces} pices of apple and ${orangePieces} pices of orange`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

// ************************    ************************

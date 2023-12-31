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

// ********************** REVIEWING FUNCTION    ************************
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const rerirement = 65 - age;

  if (rerirement > 0) {
    console.log(`${firstName} retires in ${rerirement} years`);
    return rerirement;
  } else {
    console.log(`${firstName}has already rettired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Faiz"));
console.log(yearsUntilRetirement(1950, "Faisal"));
*/

// ************************ CHALLENGE #01   ************************
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins wins  ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins  ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No one wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// ************************ ARREY INTRO  ************************
/*
const friend1 = "Faiz";
const friend2 = "Faisal";
const friend3 = "Fareen";

const friends = ["Faiz", "Faisal", "Fareen"];
console.log(friends);

const year = new Array(1995, 1998, 2001);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = "Faiz";
const faiz = [firstName, "Khan", 2023 - 1998, "Developer", friends];
console.log(faiz);
console.log(faiz.length);

// EXCERCISE

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1995, 1998, 2001, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

// ************** BASIC ARRAY OPERATIONS (METHODS)  ********************
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements

const newLength = friends.push("Faiz");
console.log(friends);
console.log(newLength);

friends.unshift("Arfaz");
console.log(friends);

// Remove elements

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

// Index location check

console.log(friends.indexOf("Peter"));
console.log(friends.indexOf("faiz"));

// Check element is present in list or not

console.log(friends.includes("Peter"));
console.log(friends.includes("faiz"));

if (friends.includes("Steven")) {
  console.log("friend Steven is there in your List");
}
*/

// ************************ CHALLENGE #02   ************************
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
*/

// ************************ INTRO TO OBJECTS   ************************
/*
const faizArray = [
  "faiz",
  "khan",
  2023 - 1998,
  "developer",
   [("faiz", "faiasl", "fareen")],
];

const faiz = {
  firstName: "faiz",
  lastName: "khan",
  agr: 2023 - 1998,
  job: "developer",
  friends: ["faiz", "faiasl", "fareen"],
};

console.log(faizArray, faiz);
*/

// ****************** Dot vs. Bracket Notation ************************
/*
const faiz = {
  firstName: "faiz",
  lastName: "khan",
  agr: 2023 - 1998,
  job: "developer",
  friends: ["Arfaz", "Faiasl", "Fareen"],
};

console.log(faiz);

console.log(faiz.lastName);
console.log(faiz["lastName"]);

const nameKey = "Name";
console.log(faiz["first" + nameKey]);
console.log(faiz["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Faiz? Choose between firstName, lastName, age, job, and friends"
);

if (faiz[interestedIn]) {
  console.log(faiz[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

faiz.location = "India";
faiz["LinkedIn"] = "@Faizkhan";
console.log(faiz);

console.log(
  `${faiz.firstName} has ${faiz.friends.length} friends and his best friends is ${faiz.friends[0]}`
);
*/

// ****************** OBJECT METHODS ************************
/*
const faiz = {
  firstName: "faiz",
  lastName: "khan",
  birthYear: 1998,
  job: "developer",
  friends: ["Arfaz", "Faiasl", "Fareen"],
  hasDriversLicesence: true,

  // calcAge:function(birthYear){
  //     return 2023-birthYear;
  // }

  //   calcAge: function () {
  //     console.log(this);
  //     return 2023 - this.birthYear;
  //   }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    } , and he has ${this.hasDriversLicesence ? "a" : "no"} drivers license`;
  },
};

console.log(faiz.calcAge());

console.log(faiz.age);

console.log(faiz.getSummary());
*/

// ************************ CHALLENGE #03   ************************
/*
const mark = {
  fullNAme: "Mark Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullNAme: "John Smith",
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
    `${mark.fullNAme} BMI ${mark.calcBMI()} is heigher than ${
      john.fullNAme
    } BMi ${john.calcBMI()}`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullNAme} BMI ${john.calcBMI()} is heigher than ${
      mark.fullNAme
    } BMi ${mark.calcBMI()}`
  );
} else if (mark.bmi === john.bmi) {
  console.log(
    `${mark.fullNAme} BMI ${mark.calcBMI()} and ${
      john.fullNAme
    } BMi ${john.calcBMI()} is equal`
  );
}
*/

// ************************ FOR LOOP   ************************
/*
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights reptition ${rep} 🏋️`);
}
*/

// ************************ LOOPING ARRAY   ************************
/*
const faiz = [
  "Faiz",
  "Khan",
  2023 - 1998,
  "Developer",
  ["Faiz", "Faisal", "Fareen"],
  true,
];

const types = [];

for (let i = 0; i < faiz.length; i++) {
  console.log(faiz[i], typeof faiz[i]);

  types.push(typeof faiz[i]);
}

console.log(types);

const years = [1991, 1998, 2001, 2008];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// Continue loop

console.log("-----ONLY STRINGS-----");

for (let i = 0; i < faiz.length; i++) {
  if (typeof faiz[i] !== "string") continue;

  console.log(faiz[i], typeof faiz[i]);
}

// Break loop

console.log("-----BREAK WITH NUMBER-----");

for (let i = 0; i < faiz.length; i++) {
  if (typeof faiz[i] === "number") break;

  console.log(faiz[i], typeof faiz[i]);
}
*/

// ****************LOOPING BACKWARDS and LOOPS in LOOPS****************
/*
// LOOPING BACKWARDS

const faiz = [
  "Faiz",
  "Khan",
  2023 - 1998,
  "Developer",
  ["Faiz", "Faisal", "Fareen"],
  true,
];

for (let i = faiz.length - 1; i >= 0; i--) {
  console.log(i, faiz[i]);
}

// LOOPS in LOOPS

for (let stroke = 1; stroke < 4; stroke++) {
  console.log(`Starting stroke ${stroke} 🏊`);

  for (let laps = 1; laps < 6; laps++) {
    console.log(`: Free style laps ${laps}🏊‍♀️`);
  }
}
*/

// ************************ WHILE LOOP   ************************
/*
for (let lap = 1; lap <= 10; lap++) {
  console.log(`Free style lap ${lap} 🏊`);
}

let lap = 1;
while (lap <= 10) {
  console.log(`Free style lap ${lap} 🏊`);
  lap++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

// ************************ CHALLENGE #04   ************************
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  total.push(tip + bill[i]);
}

console.log(bill, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum+arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 4]));
console.log(calcAverage(total));
console.log(calcAverage(tips));
*/

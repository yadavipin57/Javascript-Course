// ---------Numbers------------

const score = 400;  // browser detects it as Number on its own
console.log(score);

const balance = new Number(100.1564); // Here datatypes has been declared as Number using the "new" keyword
console.log(balance);

console.log(balance.toString()); //Now balance acts as a string and it can have all the protoypes of strings

console.log(balance.toString().length); // gives the length of the balance which is 3

console.log(balance.toFixed(2)); // 100.16

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(5));// 23.897

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')); // the commas are given in Indian style, if the paranthesis of toLocaleString() is left empty then commas are given in American style


// ----------Maths-------------

// console.log(Math);
console.log(Math.abs(-4)); // -ve nums becomes +ve

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(121)) // 11 
console.log(Math.min(4,6,8,2,4)); // 2
console.log(Math.max(4,6,8,2,4)); // 8

console.log(Math.random()); //values always from 0 to 1
console.log((Math.random()*10) + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);























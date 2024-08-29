// String can we declared in both single and double quotes

// Concatenating string is outdated, in modern times its not recommended

// String interpolation example

const name = "Vipin Yadav";
let age = 22;
let place = "Mumbai";

console.log(`Hello my name is ${name}, I am ${age} years old, I live in ${place}`);

// line 11 is one way of declaring string, but thers another way as well, which is shown below

const myName = new String('Vipin Yadav');
console.log(myName);

// in line 15 " new " is a keyword

console.log(`First letter of the name is ${myName[0]} and last letter of the name is ${myName[10]}.`);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
// in line 24 and 25 the string myName is converted onto the uppercase and lowercase respectively, but the original value of the string is knot changed as it is stored in the STACK memory
console.log(myName.charAt(2));
console.log(myName.indexOf('a')); //gives the place of first 'a' in the string
const newName = myName.substring(0, 4);
console.log(newName); //print--> Vipi
const anotherName = myName.slice(2, 6); // more explanation required
console.log(anotherName);
console.log(myName.trim()); // trim() removes starting and ending spaces but not the spaces between the strings

const url = "https://vipin.com/vipin%20yadav";
console.log(url);
console.log(url.replace('%20', '-'));
// in line 36 the "%20" of the url is replaced by "-"
 

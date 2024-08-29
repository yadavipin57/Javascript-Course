// Array: Its a collection of multiple datatypes in a single variable
// JavaScript array-copy operations create shallow copies. Not Deep Copy.
// Shallow copy means it changes the original value of array when new copy is made with different elements

const myArray = [1, 2, 3, true, "Vipin"]; 

const myHeroes = ["IronMan", "SpiderMan", "BatMan"];

const myArray2 = new Array(1, 2, 3, 4);
console.log(myArray[0]);


// Array Methods


// 1. push, pop
myArray.push("Yadav"); // It adds the value defined inside the push paranthesis at the last index of array
myArray.push(77);
myArray.push(157)
myArray.pop(); // It pops out the any value from the array which at the very last index of the array
console.log(myArray);

// 2. unshift, shift
myArray.unshift(84); // This adds the value in the very first index of the array
myArray.unshift(23); 
myArray.shift(); // This removes the value from the very first index of the array
console.log(myArray);


console.log(myArray.includes(24)); // Searches if 24 exists in the array or not, returns boolean value
console.log(myArray.indexOf ("Vipin")); // Searches if "Vipin" exist in which index and returns index otherwise returns -1

const newArray = myArray.join(); // This binds the array and makes them into an String
console.log("newArray", newArray); 
console.log(typeof newArray)


// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3); // include index from 1 to 2 and exclude index 3

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3); // this removes the elemnts from index 1 to index 3
console.log("C", myArray);
console.log(myn2);

const anotherArray = [0,1,2,3,4,5,6,7,8,9]
const changedAnotherArray = anotherArray.slice(2, 5, 12, 13, 14 )
console.log("changedAnotherArray: ", changedAnotherArray, "-----", anotherArray);







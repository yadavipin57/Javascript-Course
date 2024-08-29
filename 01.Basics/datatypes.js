"use strict"; // treats all JS code as newer version of the JS


// Types of datatypes: Primitive Data types
// Number
// bigint 
// string 
// boolean 
// null 
// undefined 
// symbol 

// Object  its also a datatypes not primitive

console.log(typeof "Vipin"); // string
console.log(typeof("Vipin")); // string
console.log(typeof null); // Object  (we can say that null is a object)
console.log(typeof undefined);  //undefined
//

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); //converts score which is the string in line 21 into a number
console.log(typeof valueInNumber);
console.log(valueInNumber, "valueInNumber");






function fact(a){
    if(a==0 || a==1){
    return 1;
    }
    else{
    return a*fact(a-1);
    }
}

const n=5;
const result = fact(n);
// console.log(`The result is: ${result}`);     -------> line 12 and line 13 produce similar result in the console
console.log("The result is: " + result);

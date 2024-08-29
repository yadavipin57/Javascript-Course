// CONTROL FLOW

//#1 if, else if, else

if(2=="2"){ // "==" only checks the values
    console.log("Executed");
}

if(2==="2"){ // "===" strictly cehcks the values as well as datatypes
    console.log("Executed");
} else{
    console.log("Datatypes are not same");
} 

const balance = 1000
if(balance>500) console.log("more than 500");


//#2 Switch

// Syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//Example 1
const month=7
switch(month){
    case 1: console.log("Jan");
    break;
    case 2: console.log("Feb");
    break;
    case 3: console.log("March");
    break;
    case 4: console.log("April");
    break;
    case 5: console.log("May");
    break;
    default: console.log("Month not present");
    break;
}

// if "break" is not written then it executes all the statements below the true case except the default case

//#3 Truthy and Falsy Values

    // Falsy values 
    // false, 0, -0, BigInt 0n, "", null, undefined, Nan

    // Truthy values
    // Eg: all non falsy values, "0", 'false', " ", [], {}, function(){} ---> empty function

const userEmail = []
if(userEmail.length === 0){
    console.log("userEmail array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Given below some examples of true statements
// false == 0 --> true, false == '' --> true, 0 == '' --> true

// ----------- Nullish Coalescing Operator (??): null undefined --------------

let val1;

val1 = 5 ?? 10
console.log("1: ", val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);

val1 = null ?? 7 ?? 18
console.log(val1);

// -------- Terniaty Operator --------

//Its shorthand for if else statement
// codition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80");






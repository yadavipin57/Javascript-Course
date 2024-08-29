// Data types are categorised into two types based on how the data is stored in the memory and how its accessed

// Two categories are 1. Primitive Data types    2. Reference (Non Primitive data types)

// 1. Primitive data types are of 7 types: number, bigint, undefined, string, symbol, null, boolean

// 2. Non primitive data types are: Objects, Arrays, Functions

//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time. Eg. const pi = 3.14; here pi has been assigned the number data type without manually assigning it


//declaring symbol data types
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId); //false


//declaring bigint data types

const bigNumber = 9454432132165464n;


// Non primitive data types examples

//Array
const superHeroes = ["spiderman", "ironman", "batman"];

//Object
let myObj = {
    // key : value,  pairs
    name: "Vipin",
    age: 22,
}

//Functions

const myFunction = function(){
    console.log("Hello World");
}

// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // this is named IIFE
    console.log("Database Connected");
})();

// Its manadoty to write semicolon in the end when writing the IIFE or it will show error

// In the first paranthesis we write the definition of the fuction and by second paranthesis we execute the function 

//IIFE is used to immediately execute the function to avoid pollution the from the global scope

// IIFE can also be written as arrow function
// Below examples are simple/unnamed IIFE
// Example 1
( () => {
    console.log("Database Connected Two");
})();

//Example 2
( (name) => {
    console.log(`The name is ${name}`);
})('Vipin');
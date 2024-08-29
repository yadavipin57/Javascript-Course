const user = {
    username: "Vipin",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); // "this" in browser refers to "Window" and in node environment it refers to an empty object ---> "{}"

// In browser the global object is "Window"  

function chai(){
    let username = "Vipin"
    console.log(this.username); // Prints "undefined", this works in Objects not in functions
}
chai()

//++++++++++++++++++++++++++++++++++++++++++//

// Arrow function example

//Exmample 1
const coffee = ( /**parameters*/) => {
    let username = "Vipin"
    console.log(this, "this in arrow function");
}
coffee()

//Example 2
const addTwo= (num1, num2) => num1+num2 // This is called "Implicit Return"
//"Explicit Return" means when "return" keyword is used to return the value
console.log(addTwo(3,4));

//Example 3
const objReturn = () => ({username: "Vipin"}) // When returning the object in arrow function then writting the object inside the paranthesis is mandatory


// this Binding:

// Normal Function:
// Has its own this context, which is determined by how the function is called. The value of this inside a normal function depends on the context in which the function is invoked (e.g., the object it is a method of or the global object).
// Arrow Function:
// Inherits the this value from the enclosing scope (lexical scoping). Arrow functions do not have their own this context; instead, they capture the this value from the surrounding code when the function is created.

// Arguments Object:

// Normal Function:
// Has access to the arguments object, which contains all the parameters passed to the function.
// Arrow Function:
// Does not have its own arguments object. Instead, it inherits the arguments object from its containing scope (lexical scoping).
// Use of new:

// Normal Function:
// Can be used as constructor functions with the new keyword to create instances of objects.
// Arrow Function:
// Cannot be used as constructors. Attempting to use an arrow function with new will result in a runtime error.
// prototype Property:

// Normal Function:
// Has a prototype property, which is used for prototype-based inheritance.
// Arrow Function:
// Does not have its own prototype property. It cannot be used as a constructor function to create objects with a shared prototype.
// arguments Binding:

// Normal Function:
// Binds its own arguments object.
// Arrow Function:
// Does not bind its own arguments object; it inherits it from the surrounding scope.


// function normalFunction() {
//     console.log(this); // Refers to the calling context (can be the global object or an object)
//     console.log(arguments); // Refers to the arguments passed to the function
// }

// const arrowFunction = () => {
//     console.log(this); // Inherits 'this' from the surrounding lexical scope
//     console.log(arguments); // ReferenceError: arguments is not defined in arrow functions
// };

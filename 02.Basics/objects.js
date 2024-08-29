// singleton
// Object.create

// object literals
// below is the example of object, it takes values in key: value pairs

    // declaring Symbol datatype
const mySym = Symbol("key1")
const jsUser = {
    name: "Vipin", // in key: value pairs, key is always stored as a string
    "full name": "Vipin Yadav", // here "full name" is declared as string as well, which can only be accesses using the second method given below
    age: 22,
    [mySym]: "myKey1",
    location: "Mumbai",
    email: "yadavipin57@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed"]
}

// To access the object elements there are two ways, given below
console.log(jsUser.email) // method 1
console.log(jsUser["email"]) // method 2
console.log(jsUser["full name"]) // method 2
console.log(jsUser[mySym]) // this is how symbol is accessed from the object
console.log(typeof jsUser[mySym])

jsUser.email = "yadavipin57@yahoo.com" // to change the value of email key
jsUser.greetings = function(){ // to add new key and value, here be are adding function as a value
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greetings);
console.log(jsUser.greetings());

console.log(jsUser.email);
Object.freeze(jsUser) // to freeze the values of object, and it cant be changed letter
jsUser.email = "yadavipin57@microsoft.com" // attempting to change the email value, but it wont be implemented
console.log(jsUser.email);
console.log(jsUser);


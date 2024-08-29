// Javascript has a default behaviour of Prototypal behaviour. Which means if it has to find any thing it will go to parents then its parents an so on until it gets it or it gets the null value

// Arrow functions doest have axis of "this" because of this prototypal behaviour

// End of the day everything in JS is an object. And any property which is available to Object is also available to other things like Array, String etc because of inheritance. Whether those proprties are usable or not its a different thing

// Function is a function but it is also a object. Which means function can also be used or acccessed as object

function multipleBy5(num){
    return num*5
}

// multipleBy5(5)
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // {}

function createUser(username, score){
    this.username = username
    this,score = score
}

createUser.prototype.increment = function(){ // creating are own prototype
    this.score++ // Jisne bhi bola hai uska score badha do
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); // Jisne bhi bola hai uska score dikha do
}

const user1 = new createUser('user1', 25) // Without 'new' there is an error
const user2 = createUser('user2', 250)

user1.printMe() // instead of writting "user1.prototype.printMe()" we only wrote "user1.printMe()", because JS gives us this syntactical sugar

// This file mainly explains about the "new" keyword
/*

Here's what happens behind the scenes when the 'new' keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
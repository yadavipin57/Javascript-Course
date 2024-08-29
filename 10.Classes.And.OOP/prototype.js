// let myName = "vipin     "

// console.log(myName.length); // Prints 10 because of spaces, even though length of the name is 5, we can use trim(), but here we will make out ow prototype similar to trim

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

// Creating an vipin property in a prototype of object
Object.prototype.vipin = function(){
    console.log(`Vipin is present in all objects`);
}

heroPower.vipin()
myHeroes.vipin()

Array.prototype.heyVipin = function(){
    console.log(`Vipin says hello`);
}

myHeroes.heyVipin()
// heroPower.heyVipin() // Since heyVipin property is given in the prototype of Array, which is not accessbile by objects or strings or anything else


// INHERITANCE

// Every objects is an unique instance

// Below is the old approach 

const user = {
    name: "Chai",
    email: 'chai@google.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
    // __proto__: teachingSupport // Its a prototypal inheritance
}

teacher.__proto__ = user // Its a prototypal inheritance

// Modern Approach

Object.setPrototypeOf(teachingSupport, teacher) // teachingSupport can access all the property of teacher

console.log(teachingSupport.makeVideo); // Prints true due to line 63, makeVideo of 'teacher' can be accessed by 'teachingSupport'

console.log("------------------------");
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

console.log(anotherUsername.length);
anotherUsername.trueLength()

"Vipin     ".length
"iceTea     ".trueLength()

// ++++++++++++ Akshay Saini +++++++++++++

let arr = ["Vipin", "Yadav"]
let object = {
    name: "Vipin",
    city: "Mumbai",
    getIntro: function(){
        console.log(`I am ${this.name} from ${city}.`);
    }
}

function fun(){
    //
}

let object2 = {
    name: "Vipin"
}

// Never do this, its not good practice
object2.__proto__ = object;



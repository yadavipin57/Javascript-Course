//  #1  for of

//  ["", "", ""]
//  [{}, {}, {}]

const arr = [1,2,3,4,5]

console.log("-----------FOR OF---------");
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet === " ") continue  // continue andbreak statement can be used
    console.log(`Each char is ${greet}`);
}

// Maps

console.log("-----------MAPS---------");
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "Bharat") // Since the key is same as previous one that is why its value is updated as "Bharat".

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ": ",value);
}


//  #2 for in
console.log("-----------FOR IN---------");
//  Using for in for objects
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'
}

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(`${key}:  ${programming[key]}`);
}

for (const key in map) {
    console.log(key); // Maps are not iteratable
}

// For arrays use "for of" loop
// For objects use "for in" loop

//  #3 for each
console.log("-----------FOR EACH---------");
const coding = ["js","rb","py","java","cpp"]

// normal function
coding.forEach( function (val /**this is parameter, its callback function so it does not have a name */) { 
    console.log(val);
})

//arrow function
coding.forEach( (item, index, arr) => { // forEach takes parameters: 1. The item of array, 2. The index of that item in array, 3. Complete array
    console.log(item, index, arr);
} )

//calling a function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item}  ${item.langFileName}: ${item.langName}`);
} )








































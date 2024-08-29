// Scope

let a=100
const b=200

if(true){ // curly braces is scope
    let a=10 // cant be accessed from out of the scope
    const b=20 // cant be accessed from out of the scope
    var c=30
}

console.log(a); 
console.log(b); 
console.log(c);
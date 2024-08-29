
// Recursion 
const a=5;
function factorial(a){
    if(a==0)
    return 1;
    else
    return a*factorial(a-1);
}

const result = factorial(a);
console.log(`The factorial of 5 is ${result}.`);

// Using for loop 

const b=5;
let result2=1;
for(var i=1; i<=b; i++){
    result2 = result2*i;
    console.log(result2);
}


// ther are two types of memory, STACK (Primitive type are stored in this) and HEAP (Non primitive values are stored in this)

var x=5;
console.log(x);
var y=x;
y=7;
console.log(x);
console.log(y);

//Above example is example of Stack memory
// in the above code y is equated to x in line 7, but in line 8 the value of y is changed to 7. But the value of x is not changed, because in line 7 when y was euquated to x, that x was the copy of original x, that is why when value of y is changed to 7 in line 8 the original value of x in line 5 didnt change




// below example is example of Heap memory
let myEmailId = {
    email: "yadavipin57@gmail.com",
    username: "yadavipin57",
}

let newEmailId = myEmailId;

newEmailId.email = "yadavipin747@gmail.com";

console.log(newEmailId);
console.log(myEmailId);

//in above example new copy of myEmailId is not created, that is why the value of the myEmailId is changed and is equal to newEmailId
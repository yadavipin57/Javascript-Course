// function to calculate cart price
function calculateCartPrice(val1, val2, ...num1) {
  // "..." is rest operator, this is also the syntax for spread operator
  return val1, val2, num1;
}
console.log(
  calculateCartPrice(200, 440, 500, 600, 700, 800, 900, 1000, 1100, 1200)
); // prints all the values inside the arrays, using rest operator many arguments can be passed

// Passing object in function

const user = {
  username: "Vipin",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}.`
  );
}

handleObject(user); // we can also directly pass the object in the argument

// Passing array in function

const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[3]; // 800
}

console.log(returnSecondValue(myNewArray));

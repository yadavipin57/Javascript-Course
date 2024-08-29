function myName() {
  console.log("v");
  console.log("i");
  console.log("p");
  console.log("i");
  console.log("n");
}

myName; // This is the reference to that function
myName(); // This is the execution of that function
console.log("1 ", myName());

//------------------------------------//

// Example 1 of function

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result; // if anything is returned then anything written after the return line is not executed
}

addTwoNumbers(3, 4);

const result = addTwoNumbers(5, 6);
console.log(`The result is ${result}`); // here the value of result is printed as "undefined"

// Example 2

function loginUserMessage(username) {
  return `${username} just logged in`;
}

console.log(loginUserMessage("Vipin")); // When in the arguments no value is passed then it gives undefined value

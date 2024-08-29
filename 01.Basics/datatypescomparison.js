

console.log(2>1);//false

console.log("2">1);// true, here "2" is first converted into number then its value is compared with the number 1

console.log("1"===1);// false, because "1" is a string but its not convereted into a number because we are strict checking it  with the help of === operator

// Usually dont use the below comparisons, they are little unpredictable

console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined = 0);
console.log(undefined < 0);
console.log(undefined > 0);

                     
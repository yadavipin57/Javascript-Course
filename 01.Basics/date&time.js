// -------Dates--------

let myDate = new Date(); // more explanation is required about this "new" keyword
console.log("1", myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log("JSON:", myDate.toJSON());
console.log(typeof myDate); //Date is an object in js

console.log("-----------------");

let myCreatedDate = new Date(2001, 4, 13, 1, 45); // Format (yyyy, mm(starts from zero), dd, hh(hour), mm(minute) )
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myNewDate = new Date("2024-01-12");
console.log(myNewDate);
console.log(`The new date in dd/mm/yyyy format is ${myNewDate.toLocaleString()}.`);

const pi = 3.14;
console.log(`The value of pi is ${pi}.`)

console.log("-----------------");

let myTimeStamp = Date.now();

//Date.now() give the time elapsed in milliseconds from 1st Jan 1970
console.log(Math.round((myTimeStamp)/1000));
console.log(myTimeStamp)
console.log("myCreatedDate",myCreatedDate.getTime())

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // begins with 0=Jan,
console.log(newDate.getDay());

newDate.toLocaleString('default', {
	weekday: "long"
}) // more explanation required





















// 1. Promise takes a call back function inside,  /**It has two parts ie resolve and reject */
// Promise is eventual completion (or failure) object which means it is still an type of object of an asynchronous operation and its resulting value.

// 2. States:
// Pending: Initial state of a Promise. The operation has not yet been completed.
// Fulfilled: The operation has been completed successfully.
// Rejected: The operation has failed.

// 3. Promise Lifecycle:
// Creation: A promise is created using the new Promise() constructor. This constructor takes a function as an argument, which in turn takes two parameters: resolve and reject. Inside this function, the asynchronous operation is performed, and resolve or reject is called based on the outcome.

// Consumption: Promises can be consumed using .then() and .catch() methods:
    // .then() is called when the promise is fulfilled. It takes a callback function that receives the resolved value.
    // .catch() is called when the promise is rejected. It takes a callback function that handles the error.

// Chaining: Promise methods can be chained together to perform multiple asynchronous operations sequentially or in parallel.

// 4. Error Handling:
// Promises provide a standardized way to handle errors using the .catch() method.
// Errors that occur within a Promise, either during the asynchronous operation or in the subsequent .then() handlers, are automatically caught and propagated to the nearest .catch() handler.

// 5. Composition:
// Promises support composition, allowing you to chain multiple asynchronous operations together.
// This enables more readable and maintainable code compared to using nested callbacks (a pattern known as "callback hell").

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
        // DB calls, cryptography, network
    setTimeout(function(){
        console.log("1: Async task is complete");
        resolve() // when this 'resolve()' is written then it is connected to then()
    }, 1000)
})

promiseOne.then(function (){
    console.log("1: Promise consumed");
}) // resolve has direct connection with then(), then() has a call back function

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('2: Async task 2');
        resolve()
    }, 1500)
}).then(function(){ // Promise was not used in variable thus then() is directly connected here
    console.log('2: Async 2 is resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@example.com'}) //  Datas can be passed as parameters in resolve like arrays, objects, functions but mostly Objects
    }, 2000)
})

promiseThree.then(function(user){
    console.log('3: ',user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // if 'false' is written then "Vipin" will be printed
        if(!error){
            resolve({username: 'Vipin', password: '12345'})
        } else{
            reject('4: ERROR: Something went wrong')
        }
    }, 2500)
})

promiseFour.then((user) => {
    console.log('4: ',user);
    return user.username
}).then((username) => { // This is chaining, which means any value which is return from the previous then() will go into the new then()
    console.log('4: ',username);
}).catch(function(error){ // catch() is for error
    console.log('4: ',error);
}).finally(() => console.log("4: The promiseFour is either resolved or rejected")) // finally() is always there in the end

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: '12345'})
        } else{
            reject('5: ERROR: JS went wrong')
        }
    }, 3000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log('5: ',response);
    } catch (error){
        console.log('5: ',error);
    } 
}

consumePromiseFive()   

// Using try(), catch() method for promiseFive

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch() generally needs an URL
//         const data = await response.json() // converting the incoming String values into JSON, response.json also takes time thats why its been awaited
//         console.log(data);
//     } catch(error){
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

// Using then(), catch() format for promiseFive

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log('5: ',data);
}).catch((error) => console.log(error))
.finally(() => console.log("5: promiseFive is eighter resolved or rejected"))

// Error 404 is always given in response (Interview question)
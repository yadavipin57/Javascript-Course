const user = {  // This is itself an object literal
    username: 'vipin',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
        console.log(`Username is ${this.username}`); // 'this' keyword specifies that the username is from this context
        console.log(this);
    }
    //Above all key value pairs are properties of object 'user
}

// // console.log(user.username);
// console.log(user['loginCount']);
// console.log(user.getUserDetails());

// console.log(this); // this in global context is window itself for browser ie its same as console.log(window);

// const promiseOne = new Promise() // 'new' keyword is a Constructor function
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    // const username = username // This line is similar to line 24. In line 24 this.username is a variable and username on RHS is value which is passed in parameter

    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // This line is implicitly defined which means even if we dont write this line 30, "this" will still be returned
}

const userOne = new User("Vipin", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) // This userTwo overwrights the values of userOne, that is why we use 'new' keyword

// "new": When we use 'new' keyword then a empty object is created which is called a "Instance". When this new object is created then the "Constructor function" is called due to 'new' keyword. This constructor function packs all the arguements and gives to us. Then all the arguments are injected in 'this' keyword. And finally we get all those things in a function.

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); // Constructor is a reference to itself only

// More explanation needed on "instance of"

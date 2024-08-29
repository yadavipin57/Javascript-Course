// consider a function given below

function outerFunction(){

    // Here 'this' refers to the exeution context of this function itself

    function innerFunction(){
        // Here 'this' keyword refers to Global Execution Context which means it refers to 'window'
    }

}

// In browser environment: window = {this = window}
// In node environment: window = {} --> empty object

function setUsername(username){
    // Complex DB calculations
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    // setUsername(username) // This function is not getting called in this way

    setUsername.call(this, username) // .call is used to hold the reference of that fucntion, but this is not enough, so first parameter of call is optionally 'this' so that it knows which username to hold

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 123)
console.log(chai);

// --------------------------------------

function playerUsername(username){
    this.username = username
}

function newPlayer(username, level, rank){

    playerUsername.call(this, username)
    this.level = level
    this.rank = rank
}

const player = new newPlayer("yadavipin57", 54, 1)
console.log(player);
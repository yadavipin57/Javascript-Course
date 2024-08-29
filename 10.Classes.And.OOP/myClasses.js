// // CLASSES

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "12345")

// console.log(chai.encryptPassword()); // 12345abc
// console.log(chai.changeUsername());

// Behind the scene, the above code is same as the below code, comment one of them to get the output

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "12345")

console.log(tea.encryptPassword()); // 12345abc
console.log(tea.changeUsername());
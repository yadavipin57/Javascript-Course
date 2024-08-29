// Class based syntax
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // If defining a getter then also define the setter

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
        // setter never return any value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
    // _password is the new varaible
}

const vipin = new User('vipin@gmail.com', '12345abcde')

console.log(vipin.password);
console.log(vipin.email);

// There was also a older way (syntax) example of which is given below
// This is a function based syntax

function anotherUser(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const anotherVipin = new anotherUser('anotherVipin@gmail.com', 'chai.123')

console.log(anotherVipin.email);
console.log(anotherVipin.password);

// This is a object based syntax

const thirdUser = {
    // 'Underscore' shows that the key is being defined in an Private property
    _email: 'thirdVipin@gmail.com',
    _password: 'third.123',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const thirdVipin = Object.create(thirdUser) // Creating an object on the basis of thirdUser and refer it to the variable thirdVipin

console.log(thirdVipin.email);

// More understanding is needed on getter and setter
// We have direct access of Object

// Value of PI in js cannot be changed

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);
// Line 7 printed below
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
// configurable: false
// enumerable: false
// value: 3.141592653589793
// writable: false
// [[Prototype]]
// :
// Object

//Below is also a way to create a object
const myNewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`Chai nahi bani`);
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // Its writable, enumerable and configurable

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // Its name is not writable and enumerable but its configurable

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
} // forof loop

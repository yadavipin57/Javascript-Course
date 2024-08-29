const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNumbers.map( (num) => num+10 )
console.log(newNums);

// Chaining

let anotherNums = myNumbers.map( (num) => num*10 ).map( (num) => num+1 ).filter( (num) => num>= 40 )
console.log(anotherNums);


// REDUCE

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price, 0 )

console.log(priceToPay);
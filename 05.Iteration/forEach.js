const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
}) // storing theforEach in a varialbe

console.log(values); // forEach always returns undefined

//--------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10]

const evenNums = myNums.filter( (num) => num%2===0) // filter also takes callback function

const oddNums = myNums.filter( (num) =>  {
    return num%2===1 // When scope is opened then return has to be written, this is a explicit return
} ) 

console.log(`${oddNums} & ${evenNums}`);

// Now doing the same thing using forEach instead filter

const newNums=[]
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);

//+++++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooksGenre = books.filter( (bk) => bk.genre ==='History' )
const userBooksPublish = books.filter( (bk) => bk.publish >= 1990 && bk.genre === 'Science')
console.log(userBooksGenre);
console.log(userBooksPublish);


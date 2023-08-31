// Link : https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
// Topic : Filter map and reduce in javascript

const coding = ["js", "ruby", "java", "python", "cpp"]

/**** Assigning forEach value inside a variable, let's see the result ****/
const values = coding.forEach((item) => {
    //console.log(item);
    return item
})
//console.log(values) // undefined => forEach doesn't return any value

/**** filter() method can returns values ****/
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (item) => item > 4) // YOu can add conditions to filter method as well
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

/**** filter() method is not working after using curly brackets {} ****/
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (item) => { 
//     item > 4
// }) 
// console.log(newNums); //[]

/**** filter() method is not working after using curly brackets {}, so add a retrun statement ****/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (item) => { 
//     return item > 4 // Adding curly backets means introducing a new scope, for a new scope u must have a return statement
// }) 
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

/**** না না ভাইয়া আমি forEach() দিয়েই value রিটার্ন ও  filter() এর কাম করতে চাই  !! ****/

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


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

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);

/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
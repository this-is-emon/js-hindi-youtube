// Link : https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
// Topic : Filter map and reduce in javascript

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map is the super set of filter
//const newNums = myNumers.map( (num) => { return num + 10})

/****** Nested Map ******/

// Returns 10 times of all the num
// const newNums = myNumers.map((num) => num * 10 )
// console.log(newNums);

// Returns 10 times of all the num plus added 1 to each
// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)

// Returns 10 times of all the num + added 1 to each + all the values greater then or equal 40
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
// Link : https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14&t=387s
// Topic : Array in Javascript
// Key topic name : Array literal notation, Arrray Constructor, push(), pop(), unshift(), shift(), includes(),
// indexOf(), join(), slice(), splice()

/***** Array *****/
// "array literal notation"
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","maagraj"]
//"array creation using the Array constructor"
const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0])

/* -----Array methods----- */

// myArr.push(6)
// myArr.push(7)
// console.log(myArr); //[ 0, 1, 2, 4, 5, 6,7]
// console.log(myArr.pop()); //7

// myArr.unshift(9)
// console.log(myArr) //[ 9, 0, 1, 2, 4, 5 ]
// myArr.shift()  // 'shift()' returns a value like 'pop()'
// console.log(myArr);  //[ 0, 1, 2, 4, 5 ]

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // "0, 1, 2, 4, 5"

// console.log(myArr); // [ 0, 1, 2, 4, 5 ]
// console.log(typeof myArr); // object
// console.log(newArr); //  0,1,2,4,5
// console.log(typeof newArr); // string


/* -----slice, splice (Difference?)----- */
//console.log("A ",myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) //[ 1, 2 ] 
//console.log(myn1); //
//console.log("B ",myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
//console.log("C ",myArr); //C  [ 0, 4, 5 ]
//console.log(myn2) // [ 1, 2, 3 ]



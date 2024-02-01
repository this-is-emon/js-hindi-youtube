// Link : https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9
// Topic : Data types of javascript summary

//Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // False

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/***************  Q&A  *****************/

// does js is statically typed or dynamically typed ?
/*
    JavaScript is a dynamically typed language, which means that 
    data types of variables are determined by the value they hold
    at runtime and can change throughout the program as we assign
    different values to them.
*/



/***************  Memory: Heap vs Stack  *****************/
// Link : https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10
// Topic : Stack and Heap memory in javascript

// See the "heap_stack.png" file to understand the code below

//Stack(Primitive Type), 
let myYoutubeName = "Hitesh Chawdhury"

let anotherName = myYoutubeName
anotherName = "Chai aur Code"

// Stack memory send a copy of values from one variable-memory to another
console.log(myYoutubeName) //Hitesh Chawdhury
console.log(anotherName) // Chai aur Code

//Heap(Non-Primitive Type)
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// Heap memory refer value of an variable-memory to another
console.log(userOne) // { email: 'hitesh@google.com', upi: 'user@ybl' }
console.log(userTwo) // { email: 'hitesh@google.com', upi: 'user@ybl' }

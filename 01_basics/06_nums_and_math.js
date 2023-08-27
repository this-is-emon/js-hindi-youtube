// Link : https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12
// Topic : Number and Maths in Javascript

const score = 400
// console.log(score) 
//400 -- type is difined automatically defined according to the value of the variable

const balance = new Number(100)
// console.log(balance) 
//[Number: 100] -- defined the value in a new object of Number type

//practicing different methods of the "Number type Object"
// console.log(balance.toString().length) //3
//console.log(balance.toFixed(2)) //100.00 => 2 decimal places after doshomic

// Careful!! while using "toPrecision()" method
// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5)); //123.90
// console.log(otherNumber.toPrecision(4)); //123.9
// console.log(otherNumber.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(2)); //1.2e+2

const hundreds = 1000000
//console.log(hundreds.toLocaleString()) //1,000,000


/****************************** Maths ***********************************/

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,5,6,7)); //4
// console.log(Math.max(4,5,6,7)); //7



console.log(Math.random()); // any random value between 0.01 and 0.9999 (or between 0 and 1)
console.log(Math.random()*10); // any random value between 0.1 and 9.999 
console.log(Math.random()*10 + 1); // any random value between 1.1(0.1+1) and 10.999(9.999+1) (avoiding 0.1)
console.log((Math.random()*10) + 1); // any random value between 1.1(0.1+1) and 10.999(9.999+1)
console.log(Math.floor(Math.random()*10) + 1); // any random value between 1 and 10

// Formula to find any random number between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);
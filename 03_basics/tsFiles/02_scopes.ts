// Link : https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=21
// Part 01 : Global and Local scope Introduction

/* No problem Eexecuting the following code */
// let a: number = 10;
// const b: number = 20;
// var c: number = 30;

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

/* -------------------------------------------------------- */

/* Problem starts while Eexecuting the following code */
// if (true) {
//   let a2: number = 10;
//   const b2: number = 20;
//   var c2: number = 30;
// }

// console.log(a2); //Cannot find name 'a2'
// console.log(b2); //Cannot find name 'b2'
// console.log(c2); //30

//Summary:
// 1. let and const are in local scope and var is Golbal scope
// 2. Try to avoid using "var" all the time

/* -------------------------------------------------------- */

/* Watch out the following code */
// let a: number = 300;
// if (true) {
//   let a: number = 10;
//   const b: number = 20;
//   console.log(`Inner 'a' : ${a}`); //INNER:  10 => block scope
// }

// console.log(`Outer 'a' : ${a}`); //300 => global scope

/* -------------------------------------------------------- */

// Reminder:
// => "global-scope" in the "cosole of browser" and "node evironment" are different

/* -------------------------------------------------------- */

// Link : https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22
// Part 02 : Scope level and mini hoisting in javascript
// Topics : Global scope, Local scope, Hoisting

/***** As a child 'two()' can access 'one()' variable, but vice-versa doesn't happens *****/
/** This is a kind of closure example **/

/*
function one(): void {
  const username = "hitesh";

  function two(): void {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); //Cannot find name 'website'

  two();
}
one(); //hitesh
*/

/* -------------------------------------------------------- */

/***** Another example of the difference between Global and Local scopes     *****/

// if (true) {
//   const username: string = "hitesh";
//   if (username === "hitesh") {
//     const website: string = " youtube";
//     console.log(username + website); //hitesh youtube
//   }
//   //console.log(website); ////ReferenceError: website is not defined
// }

// console.log(username); ////ReferenceError: username is not defined
/* -------------------------------------------------------- */

/***** Interesing Example (Concept : Hoisting) *****/

// console.log(addOne(5)); //5

// function addOne(num: number) {
//   //basic funcion
//   return num + 1;
// }

// console.log(addTwo(5)); //Block-scoped variable 'addTwo' used before its declaration

// // Expression (a kind of function that is assigned to a variable)
// const addTwo = function (num: number) {
//   return num + 2;
// };

// Learning:
// => Cannot call a expression before declaring it
/* -------------------------------------------------------- */

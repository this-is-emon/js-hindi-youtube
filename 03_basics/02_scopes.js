// Link : https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=21

/* No problem Eexecuting the following code */
// let a = 10
// const b = 20
// var c = 30

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

/* -------------------------------------------------------- */

/* Problem starts while Eexecuting the following code */
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //30

//Summary:
// 1. let and const are in local scope and var is Golbal scope
// 2. Try to avoid using "var" all the time

/* -------------------------------------------------------- */

/* Watch out the following code */
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  //INNER:  10 => block scope
    
}

console.log(a); //300 => global scope

/* -------------------------------------------------------- */

// Reminder:
// => "global-scope" in the "cosole of browser" and "node evironment" are different

/*****      *****/

/* -------------------------------------------------------- */





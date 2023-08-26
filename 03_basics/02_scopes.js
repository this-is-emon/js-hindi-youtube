// Link : https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=21
// Part 01 : Global and Local scope Introduction

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
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);  //INNER:  10 => block scope
    
// }

// console.log(a); //300 => global scope

/* -------------------------------------------------------- */

// Reminder:
// => "global-scope" in the "cosole of browser" and "node evironment" are different

/*****      *****/

/* -------------------------------------------------------- */


// Link : https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22
// Part 02 : Scope level and mini hoisting in javascript

/***** As a child 'two()' can access 'one()' variable, but vice-versa doesn't happens *****/
// This is a kind of closure example
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); //ReferenceError: website is not defined

    two()

}
one() //hitesh

/* -------------------------------------------------------- */

/***** Another example of the difference between Global and Local scopes     *****/
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); //hitesh youtube
    }
    // console.log(website); ////ReferenceError: website is not defined
}

// console.log(username); ////ReferenceError: username is not defined
/* -------------------------------------------------------- */


/***** Interesing Example (Concept : Hoisting) *****/

console.log(addone(5)) //5

function addone(num){ //basic funcion
    return num + 1
}



addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){ // Expression (a kind of function that is assigned to a variable)
    return num + 2
}

// Learning: 
// => Cannot call a expression before declaring it 
/* -------------------------------------------------------- */


// Link : https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24
// Topic : Immediately Invoked Function Expressions (IIFE)

// Why need IIFE ?
// 1. Some times there maybe a file, that only creates an db connection, as long as the file starts
// 2. To prevent polution of a scope variables from a global variable 

/*++++++++++++++++++++++++ Froming a IIFE function step by step +++++++++++++++++++++++++ */

//Step 01: An normal function
    //Declaring the funtion
    // function chai() {
    //     console.log(`DB1 connected!`);
    // }
    //Invoking the function
    //chai();

//Step 02: Converting the above function into IIFE 
    //Declaring the function (inside parenthesis)
    // (function cha() {
    //     console.log(`DB2 connected!`);
    // })(); // Invoking the function by a blank parenthesis

    
/* -------------------------------------------------------- */



/*++++++++++++++++++++++++ Froming a IIFE function with an arrow function +++++++++++++++++++++ */
//Named IIFE
(function chai() {
    console.log(`DB1 connected!`);
})(); //DB1 connected!

//Un-named IIFE (also arrow IIFE)
(() => {
    console.log(`DB2 connected!`);
})(); //DB1 connected!

// Passing parmeter inside an IIFE
((name) => {
    console.log(`DB connected at ${name}`);
})("Port:3000"); //DB connected at Port:3000
    
/* -------------------------------------------------------- */
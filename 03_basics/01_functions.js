// Link1: https://www.youtube.com/watch?v=Bn56WahG_t0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=19
// Link2: 

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName /*'Referencing' a function*/
// sayMyName() /*'Executing' a function*/

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

/* What is the difference between "Parameters" and "Arguments", explain from the above code */
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


/* Functions with objects and array Starts */
// Link: https://www.youtube.com/watch?v=t7ZHPhgdA4U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=20

//Normal function
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200)) //200

// What if we pass more then 1 arguments in the above function ?
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500)) //200

// Using rest operator to see all the passing arguments value
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500)) //[ 200, 300, 400, 500 ]

// What is the output of the code below?
function calculateCartPrice(value1,value2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500)) //[ 400, 500 ]

/* handle object inside a function */
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

/* Passing the object directly inside a function */
handleObject({
    username: "sam",
    price: 399
}) //Username is sam and price is 399


/* handle Array inside a function */
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

/* Passing the object directly inside a function */
console.log(returnSecondValue([200, 400, 500, 1000])); //400





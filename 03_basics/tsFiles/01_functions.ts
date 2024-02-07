// Link1: https://www.youtube.com/watch?v=Bn56WahG_t0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=19
// Link2:

function sayMyName2(): void {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName2; /*'Referencing' a function*/
// sayMyName2(); /*'Executing' a function*/

/******----------**---------------------**----------******/

/* What is the difference between "Parameters" and "Arguments", explain from the code below */
// function addTwoNumbers2(number1: number, number2: number): void {
//   console.log(number1 + number2);
// }

function addTwoNumbers2(number1: number, number2: number): number {
  let result = number1 + number2;
  return result;
  // return number1 + number2;
}
const finalResult: number = addTwoNumbers2(3, 5);

// console.log("Result: ", finalResult);

/******----------**---------------------**----------******/

/* Guess the output of the following function program */
function loginUserMessage2(username: string = "sam"): void | string {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage2());
// console.log(loginUserMessage2("hitesh"));

/******----------**---------------------**----------******/

/* ----------Functions with objects and array Starts---------- */
// Link: https://www.youtube.com/watch?v=t7ZHPhgdA4U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=20

//Normal function
function calculateCartPrice2(num1: number): number {
  return num1;
}
//console.log(calculateCartPrice2(200)); //200

/* What if we pass more then 1 arguments in the above function ? */
// function calculateCartPrice3(num1:number):number{
//     return num1
// }
// console.log(calculateCartPrice3(200,300,400,500)) //200

/* Using rest operator to see all the passing arguments value */
function calculateCartPrice3(...num1: number[]): number[] {
  return num1;
}
//console.log(calculateCartPrice3(200, 300, 400, 500)); //[ 200, 300, 400, 500 ]

/* What is the output of the code below? */
function calculateCartPrice4(
  value1: number,
  value2: number,
  ...num1: number[]
) {
  return num1;
}
//console.log(calculateCartPrice4(200, 300, 400, 500)); //[ 400, 500 ]

/******----------**---------------------**----------******/

/* handleing object inside a function */
interface User {
  username: string;
  price: number;
}
const user2: User = {
  username: "hitesh",
  price: 199,
};

function handleObject2(anyobject: User): void {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

//handleObject2(user2);

/* Passing the object directly inside a function */

// handleObject2({
//   username: "sam",
//   price: 399,
// });

//OUTPUT : Username is sam and price is 399

/* handle Array inside a function */
const myNewArray2: Array<number> = [200, 400, 100, 600];

function returnSecondValue2(getArray: Array<number>) {
  return getArray[1];
}

//console.log(returnSecondValue2(myNewArray2));

/* Passing the Array directly inside a function */
//console.log(returnSecondValue2([200, 400, 500, 1000])); //400

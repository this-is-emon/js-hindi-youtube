// Link : https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23
// Topic : THIS and arrow function in javascript

/*++++++++++++++++++++++++ .this +++++++++++++++++++++++++++++++ */

//'this' => denotes the current context(ex:'user' object)
const user = {
    userName: "Emon",
    price:999,

    welcomeMessage: function () {
        //console.log(`${this.userName}, welcome to website`);
        //console.log(this);
        /*
        {
            userName: 'Emon',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }

}

// user.welcomeMessage() //Emon, welcome to website
// user.userName = 'Hitesh'
// user.welcomeMessage() //Hitesh, welcome to website
// console.log(this); //{} => In browser it shows global 'Window' as current context

/* -------------------------------------------------------- */

// Can 'this' be called inside a funtion() ?

//Normal function
// function chai() {
//     let userName = 'Hitesh'
//     console.log(this) // shows lots of value of the global object 'Node'
//     console.log(this.userName); // {} => 'this' can only be used in object not in function
// }
// chai()

//Expression 
const chai = () => {
    let userName = "Hitesh"
    console.log(this.userName); //undefined --> shows '.this" doesn't work in arrow function
    console.log(this); //{} --> shows '.this" doesn't work in arrow function
}

//chai()

/* -------------------------------------------------------- */

/*++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++ */

//Normal arrow function
// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4)); //7


// To eliminate curly brackets {}, 'return' should also be eliminate
// They name it 'Implicit return statement'
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4)); //7

//It is a good practice to use first bracket in the above code
// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4)); //7

// Returning an object impicitly in an arrow function
const addTwo = (num1,num2) => ({name : 'Emon'})
console.log(addTwo(3,4)); //{ name: 'Emon' }



// Object Literal
const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor Function
function Username(userName,loginCount,isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.userName}`);
    }

    return this
}

const userOne = new Username('Hitesh',4,true) // What if we do not use the 'new' keyword here?
const userTwo = new Username('Emon',5,false)

console.log(userOne.constructor); // [Function: Username]
console.log(userTwo);

/* 4 Things happens while we call 'new' key word */
//Step 01: An empty object created, named 'instance'
//Step 02: A constructor functionis called, This constructor function packs all the arguments  
//Step 03: The argumets is assigned into the 'this.somthing' variables
//Step 04: You get the arguemts

// Read it : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


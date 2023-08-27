// Link : https://www.youtube.com/watch?v=yY0bKZNYmJs&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=4
// Topic : Let, const and var ki kahani

const accountId = 144553
let accountEmail = "emon@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let acconuntState;

// accountId = 3 // Not Allowed

accountEmail = "hc@gmail.com"
accountPassword = "957923"
accountCity = "Dhaka"


console.log(accountId)
/*
Prefer no to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,acconuntState]);
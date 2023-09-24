// Creating a Promise using 2 part
/*
const promiseOne = new Promise(function (resolve,reject) {
    // Do and async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})
*/

// Crating a Promise combining the above 2 parts into 1 part
/*
new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task2 is complete");
        resolve()
    },1000)
}).then(function () {
    console.log("Promise of task2 resolved");
})
*/

// Crationg a Promise and passing parameter inside 'resolve' method
/*
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function name() {
        resolve({userName:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user)
})
*/

// 4th Promise
/*
const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName:"Hitesh",pass:"123"})
        }else{
            reject('ERROR: Something went wrong!')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.userName
})
.then((userName) => {
    console.log(userName);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))
*/


// Promise 5 with async function
/*
const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName:"Hitesh",pass:"123"})
        }else{
            reject('ERROR: Something went wrong!')
        }
    },1000)
})

// for 'error = false' the scope below works fine, but for 'error = true' it shows error msg like below:

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong!".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

//To avoid the above error, we use try-catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
*/

// try-catch, The scope below shows output: "Promise { <pending> }", why?
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch takes time, so we use 'await'
//         const data = response.json() // converting to jSON also takes time, but we didn't put an 'await' here
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// After putting 'await' while converting to JSON , ✔️
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//         const data = await response.json() 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

// Redoing the above code using fetch and then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("ERROR: ",error);
})

// promise.all
// yes this is also available, kuch reading aap b kro.
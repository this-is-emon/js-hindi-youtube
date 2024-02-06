// Link1:  https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17
/* KeyTopics : constructor object; Object lateral; nested object; 
joining object using- `{obj,obj}`,Object.assign({},obj1,obj2),{...obj1,...obj2}; */

// Link2:  https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18
/* Key Topics : Objects.keys(); Object.values(); Object.entries();objectName.hasWonProperty("propertyName");
   Destructuring, JSON Type: 'Object type', 'Array object Type' */



/* Singleton Object `OR` Declaring object using Constructor */
//const tinderUser = Object()

/* Non-Singleton Object `OR` Object Lateral  */
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIN = false

//console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIN: false }

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userFullName:{
            firstName:"hitesh",
            lastName:"Choudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName) //hitesh

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }

//const obj3 = Object.assign({},obj1,obj2) // {} => Target Object, where 'obj1' and 'obj2' values are assigned
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3 = {...obj1,...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"j@gmail.com"
    }  
]

// console.log(users[1].email);  //i@gmail.com
// console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIN: false }
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIN' ] => *data Type: Array
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ] => *data Type: Array
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIN', false ] ]


// Looping through an object and check, if an property exists?
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //false

/* ------------------------------Link 01 code done------------------------------ */

/*************** Object de-structure and JSON API intro *****************/

const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); //hitesh

/*--De-structuring Object--*/

// Way : 01
// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh

// Way : 02
const {courseInstructor:instructor} = course
//console.log(instructor); //hitesh

/*--De-structuring Array--*/
let myArray = [1, 2, 3];

let [firstValue, secondValue, thirdValue] = myArray;

// console.log(firstValue);  // Output: 1
// console.log(secondValue); // Output: 2
// console.log(thirdValue);  // Output: 3

/* ****** What is an API? ****** */
//APIs enable different pieces of software to work together, 
//allowing them to share and use each other's functionalities or data.

/* -----There are 2 difference between 'Object and 'JSON Api'----- */ 
// 1. JSON data does not have a 'name' like object(ex: cons myTask = {.....})
// 2. 'Key' of the JSON data always wrapped by double quote("")

/***Incoming data from an api in JSON format (here, object type json)***/
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

/***Incoming data from an api in JSON format (here, Arry object type json)***/
// [
//     {},
//     {},
//     {}
// ]

/***** 2 steps of Calling and using data via API******/
// Calling a URL to get the data using 'fetch()' method in our code
// Convert the incoming 'JSON type data' into 'Object type data'
  
// Link1:  https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17
// Link2:  https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18

/* Singleton Object */
//const tinderUser = Object()

/* Non-Singleton Object */
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


// // Looping through an object and check, if an property exists?
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //false

/*************** Object de-structure and JSON API intro *****************/

const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); //hitesh

/*--De-structuring--*/

// const {courseInstructor} = course
// console.log(courseInstructor); //hitesh

const {courseInstructor:instructor} = course
console.log(instructor); //hitesh

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
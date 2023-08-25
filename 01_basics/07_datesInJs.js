//Dates

// initiating a new date object instance
let myDate = new Date()
// console.log(myDate); //2023-08-25T06:51:06.000Z
// console.log(myDate.toString()); //Fri Aug 25 2023 06:52:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Fri Aug 25 2023
// console.log(myDate.toISOString()); //2023-08-25T06:55:13.496Z
// console.log(myDate.toJSON()); //2023-08-25T06:55:13.496Z
// console.log(myDate.toLocaleDateString); //[Function: toLocaleDateString]
// console.log(myDate.toLocaleString()); //8/25/2023, 6:55:13 AM

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("14-02-2023")
// console.log(myCreatedDate.toLocaleDateString()); // Invalid Date

// let myCreatedDate = new Date("01-14-2013")
// console.log(myCreatedDate.getTime()); //1358121600000

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1692957009230

// console.log(Date.now()) //1692957292113 => in ms
// console.log(Date.now()/1000) //1692957292.119 => in s
// console.log(Math.floor(Date.now()/1000)) //1692957292 => in s

// let newDate = new Date()
// console.log(newDate) //2023-08-25T09:58:12.567Z
// console.log(newDate.getMonth() + 1) //8 => "+1" because month count start from 0 value
// console.log(newDate.getDate()) //25

let newDate = new Date()
newDate.toLocaleDateString('default',{
    weekday: "long",
})
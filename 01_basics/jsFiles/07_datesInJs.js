// Link : https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13
// Topic : Date and time in depth

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

// `{newDate.getDay()} and the time`

let newDate = new Date()
newDate.toLocaleDateString('default',{
    weekday: "long",
})

/*-------------------- InterView Q&A --------------------*/
//Question 1: How can you get the current date and time in JavaScript?
    const currentDate = new Date()
    //console.log(currentDate);

//Question 2: Explain the difference between Date.now() and new Date() in JavaScript.
    const inMiliSecond = Date.now();
    //console.log(inMiliSecond);
    const inObject = new Date();
    //console.log(inObject);
//Question 3: How do you format a date in JavaScript?
    const toBeFormatted = new Date()
    const formattedDate = toBeFormatted.toLocaleDateString("default",{weekday:'long',year:'numeric',month:'long',day:'numeric'})
    //console.log(formattedDate);
//Question 4: Explain how to calculate the difference between two dates in JavaScript.
    const date1 = new Date("2022-01-01")
    const date2 = new Date()
    const timeDifference = date2-date1;
    const dayDifference = Math.floor(timeDifference/(1000*60*60*24))
    //console.log(dayDifference);

//Question 5: How can you set a specific date in JavaScript?
    const specificDate = new Date()
    specificDate.setFullYear(2023)
    specificDate.setMonth(6)
    specificDate.setDate(15)
    console.log(specificDate);
//Question 6: What is the purpose of the getTime() method in JavaScript's Date object?
    const today = new Date()
    const timestamp = today.getTime();
    //console.log(timestamp);
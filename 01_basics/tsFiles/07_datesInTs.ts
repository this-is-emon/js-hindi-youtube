let myDate2: Date = new Date();
//console.log(myDate2);

//console.log("--------------------");

const newDate2: Date = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
};

const formattedDate2: string = newDate2.toLocaleDateString("default", options);

//console.log(formattedDate2);

/*-------------------- InterView Q&A --------------------*/
//Question 1: How can you get the current date and time in TypeScript?
const currentDate2: Date = new Date();
//console.log(currentDate2);

//Question 2: Explain the difference between Date.now() and new Date() in TypeScript.
const dateInMiliSecond2: number = Date.now();
const dateToday2: Date = new Date();
// console.log(dateInMiliSecond2);
// console.log(dateToday2);

//Question 3: How do you format a date in TypeScript?
const toBeFormatted2: Date = new Date();
const formattedDate3: string = toBeFormatted2.toLocaleDateString("default", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
//console.log(formattedDate3);

//Question 4: Explain how to calculate the difference between two dates in TypeScript.
const date3: Date = new Date("2022-12-12");
const date4: Date = new Date();

const timeDifferenceInMs: number = date4.getTime() - date3.getTime();
const timeDifferenceInDay: number = Math.floor(
  timeDifferenceInMs / (1000 * 60 * 60 * 24)
);
//console.log(timeDifferenceInDay);

//Question 5: How can you set a specific date in TypeScript?
const specificDate2 = new Date();
specificDate2.setFullYear(2023);
specificDate2.setMonth(2);
specificDate2.setDate(5);
//console.log(specificDate2);

//Question 6: What is the purpose of the getTime() method in TypeScript's Date object?
const today2: Date = new Date();
const timeStamp2 = today2.getTime();
console.log(timeStamp2);

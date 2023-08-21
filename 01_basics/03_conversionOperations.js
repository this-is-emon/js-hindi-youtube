let score = "33abc"

//console.log(typeof score) //string
//console.log(typeof(score)) //string

let valueInNumber = Number(score)

//console.log(typeof valueInNumber) //number
//console.log(valueInNumber) //NaN

/* Number conversion "Before" => "After" */
// "33" => 33
// "33abc" => NaN
// "True" => 1, "False" => 0
// "Emon" => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn) //ture

/* Boolean conversion "Before" => "After" */
// 1 => true, 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
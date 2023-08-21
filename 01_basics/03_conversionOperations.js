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
// console.log(stringNumber)
// console.log(typeof stringNumber)


//************************** Operations *************************

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);


let str1 = "Hello"
let str2 = "Emon"

let str3 = str1 + str2
//console.log(str3)

// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

// console.log((3+4) * 5 % 3) // To avoid confusion, use parenthesis while needed

//Some more examples of bad practices below
// console.log(+true) // 1
// console.log(+"") // 0

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

/*********** Prefix and Postfix Operator ************/
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//Link To Study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


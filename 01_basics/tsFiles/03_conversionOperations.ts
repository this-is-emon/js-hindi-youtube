let score2: string = "33abc";

//console.log(typeof score2); //string

let valueInNumber2: number = Number(score2);

//console.log(typeof valueInNumber2); //number
//console.log(valueInNumber2); //NaN

/* Number conversion "Before" => "After" */
// "33" => 33
// "33abc" => NaN
// "True" => 1, "False" => 0
// "Emon" => NaN

let isLoggedIn2: number = 1;
let booleanIsLoggedIn2: boolean = Boolean(isLoggedIn2);
//console.log(booleanIsLoggedIn2); //true

/* Boolean conversion "Before" => "After" */
// 1 => true, 0 => false
// "" => false
// "hitesh" => true

let someNumber2: number = 33;

let stringNumber2: string = String(someNumber2);
//console.log(stringNumber2); //33
// console.log(typeof stringNumber2) //string

//************************** Operations *************************

let value2: number = 3;
let negValue2: number = -value2;
//console.log(negValue)

//console.log(2 + 3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);

let str10: string = "Hello";
let str20: string = "Emon";

let str30: string = str10 + str20;
//console.log(str30)

//console.log("1" + 2); //12, type:string
//console.log(1 + "2"); //12, type:string
//console.log("1" + 2 + 2); //122, type:string
//console.log(1 + 2 + "2"); //32, type:stirng

// console.log((3+4) * 5 % 3) // To avoid confusion, use parenthesis while needed

//Some more examples of bad practices below
// console.log(+true) // 1
// console.log(+"") // 0

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

/*********** Prefix and Postfix Operator ************/
let x2: number = 3;
const y2: number = x2++;

console.log(`x2:${x2}, y2:${y2}`);
// Expected output: "x2:4, y2:3"

let a2: number = 3;
const b2: number = ++a2;

console.log(`a2:${a2}, b2:${b2}`);
// Expected output: "a2:4, b2:4"

//Link To Study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

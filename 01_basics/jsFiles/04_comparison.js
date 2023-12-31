// Link : https://www.youtube.com/watch?v=giP2uXMlv4c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=8
// Topic : Comparison of datatypes in javascript

/******** Common Type of comparison **********/
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

/******** Comparison that should be avoided **********/
console.log("2" > 1) //true
console.log("02" > 1) //true

console.log("--------") 

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log("--------")

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false

// ===
console.log("2" === 2) //false
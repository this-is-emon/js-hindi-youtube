// Link : https://www.youtube.com/watch?v=giP2uXMlv4c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=8
// Topic : Comparison of datatypes in javascript

/******** Common Type of comparison **********/
console.log(2 > 1) //true
console.log(2 >= 1) //true
console.log(2 < 1) //false
console.log(2 <= 1) //false
console.log(2 == 1) //false
console.log(2 != 1) //true
console.log("---01-----") 

/******** Comparison that should be avoided **********/
console.log("2" > 1) //true
console.log("02" > 1) //true

console.log("---02-----") 

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log("---03-----")

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false

// ===
console.log("2" === 2) //false
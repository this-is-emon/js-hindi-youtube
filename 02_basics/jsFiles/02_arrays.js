// Link : https://www.youtube.com/watch?v=m6azhgyCi-k&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=15
// Topic : Array part 2 in Javascript Hindi
// Key Topics : concat(), spread, flat(), Array.isArray(), Array.from(), Array.of()

const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["thor","Flash","spiderman"]

/****** 'push()' is not the correct way to merge 2 arrays, use concat(), spread syntax (`...`) ******/
//marvel_heros.push(dc_heros)
// console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'thor', 'Flash', 'spiderman' ] ]
// console.log(marvel_heros[3][1]); //Flash

// const allHeors = marvel_heros.concat(dc_heros)
// console.log(allHeors); //[ 'thor', 'Ironman', 'spiderman', 'thor', 'Flash', 'spiderman' ]

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'thor', 'Flash', 'spiderman' ]

/****** 'flating' nested array ******/
// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")) //false =>"Hitesh" is a string, not an array
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"})); //[] , *interesting 
/*
The Array.from() method in JavaScript is used to create a new array instance from an iterable object 
or an array-like object. The object you're providing in this case, {name: "hitesh"}, is not an iterable object, 
so it won't produce the expected result.
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

// arrayName.methodName() => Array Literals method calling 
// Array.methodName() => Array Constructor method calling

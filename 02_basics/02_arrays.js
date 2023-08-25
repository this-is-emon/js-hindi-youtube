const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["thor","Flash","spiderman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'thor', 'Ironman', 'spiderman' ] ]
// console.log(marvel_heros[3][1]); //Flash

// const allHeors = marvel_heros.concat(dc_heros)
// console.log(allHeors); //[ 'thor', 'Ironman', 'spiderman', 'thor', 'Flash', 'spiderman' ]

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'thor', 'Flash', 'spiderman' ]

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"})); //[] , *interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]


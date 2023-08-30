// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// 'for-of' prints the 'value' and 'for-in' prints the 'key', in 'key-value' pair object
for (const num of arr) {
    //console.log(num); // 1 2 3 4 5 -> values
}
for (const num in arr) {
    //console.log(num); // 0 1 2 3 4 -> keys(indexces)
}

//Another example of 'for-of'
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

//Map -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map is a 'key-value' paired object type Data Structure
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Map doesn't store duplicate values

// console.log(map); //{----}
// console.log(map.get('USA')); //United States of America
// console.log(map.size); //3

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// Object can not be iterated like Map above
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    //console.log(key, ':-', value); //TypeError: myObject is not iterable
    
}
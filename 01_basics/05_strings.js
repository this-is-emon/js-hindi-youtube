const name = "Emon"
const repoCount = 50

/* Not preferable */
// console.log(name + repoCount + " Value")

/****** Mordern and Preferable ********/
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// Another way to declare a string, where we get the output as an 'String Object' and 
// Can access  all the bulit in 'string object mehthods'
const gameName = new String('Hitesh-hc-choudhary')

// console.log(gameName[0]) //H
// console.log(gameName.__proto__) //{}

// console.log(gameName.length) //6
// console.log(gameName.toUpperCase()) //HITESH
// console.log(gameName.charAt(2)) //t
// console.log(gameName.indexOf('t')) //2

/* "substing" method doesn't allow negetive value as reference but slice does */
const newString = gameName.substring(0,4)
console.log(newString) //Hite

const anotherString = gameName.slice(-8,4)
console.log(anotherString) //ite

const newStringOne = "  Emon    "
console.log(newStringOne) //'  Emon  '    
console.log(newStringOne.trim()) //Emon

const url = "https:/hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) //https:/hitesh.com/hitesh-choudhary
console.log(url.includes('sundor')) //false

console.log(gameName.split('-')); //[ 'Hitesh', 'hc', 'choudhary' ]
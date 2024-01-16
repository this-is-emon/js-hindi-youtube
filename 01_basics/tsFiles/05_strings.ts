const name2: string = "Emon";
const repoCount2: number = 50;

//Using toString() method:
console.log(name2 + repoCount2.toString() + "Value");
//Using string interpolation:(recommended)
console.log(`I am ${name2} and my repo count is ${repoCount2}`);

console.log("---------------------01--------------------------");

// don't necessarily need to use the new String() constructor as you did in JavaScript
const gameName2: string = "Hitesh-hc-choudhary";

// Exception from the .js code
//Property '__proto__' does not exist on type 'string'
// console.log(gameName2.__proto__);

const newString2: string = gameName2.substring(0, 4);
const anotherString2: string = gameName2.slice(-8, 4);

console.log("---------------------02--------------------------");

const newStringOne2: string = "  Emon    ";
console.log(newStringOne2); //'  Emon  '
console.log(newStringOne2.trim()); //Emon

console.log("---------------------03--------------------------");

const url2: string = "https:/hitesh.com/hitesh%20choudhary";
console.log(url2.replace("%20", "-")); //https:/hitesh.com/hitesh-choudhary
console.log(url2.includes("sundor")); //false

console.log("---------------------04--------------------------");

console.log(gameName2.split("-")); //[ 'Hitesh', 'hc', 'choudhary' ]

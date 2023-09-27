// let myName = "Hitesh     "
// let myChannel = "chai     "

// console.log(myName.trueLength); //undefined
// console.log(myName.length); //11

let myHeros = ['thor','spiderMan']

let heroPower = {
    thor:"hammer",
    spiderMan:"sling",

    getSpiderPower:function () {
        console.log(`SpiderMan's power is ${this.spiderMan}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function () {
    console.log("Hitesh saya hello!");
}

heroPower.hitesh() //Hitesh is present in all objects
myHeros.hitesh() //Hitesh is present in all objects
//heroPower.heiHitesh() //TypeError: heroPower.heiHitesh is not a function
myHeros.heyHitesh() //Hitesh saya hello!

//inheritance
const User = {
    name:"Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport ={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport // Inheriting 'Teachingsupport' inside 'TASupport'
}

Teacher.__proto__ = User // Inheriting 'User' inside 'Teacher'

// modern syntax -- Inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

// Solving the first problem of setting 'trueLength' as a default property method
let anotherUsername = "ChaiAurCode  "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

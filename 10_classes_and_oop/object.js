function multiplyBy5(num) {
    return num*5;
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

/* Checking prototype inside node runtime env. */
function createUser(username,score) {
    this.username = username
    this.score = score
}
//injecting functionality inside the 'createUser()' function
createUser.prototype.increament = function () {
    this.score++ //this => Jisney bhi bulaya, uske pass jaw
}

createUser.prototype.printMe = function () {
    console.log(`Price is: ${this.score}`); // this => Jisney bhi bulaya uske pass jaw
}

const chai = new createUser("Chai",25)
const tea = createUser("tea", 250)

chai.printMe() // Price is: 25
//tea.printMe() //TypeError: Cannot read properties of undefined (reading 'printMe') => adding 'new' while instantiating 'tea' object will solve this problem. Becauser new will tell the the object that 2 new method(increaament() & printMe()) has been created later.

console.log(chai.increament()); // undefined, why?
chai.printMe(chai.increament()) // Price is: 27

/*
Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

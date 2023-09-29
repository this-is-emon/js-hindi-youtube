class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User Name : ${this.username}`);
    }

    // createId() will not be accessed by any object made from User class
    static createId(){
        return `123`
    }
}

const hitesh = new User("Hitesh")
hitesh.logMe()
// console.log(hitesh.createId()); //TypeError: hitesh.createId is not a function

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iPhone","iphone@gmail.com")
console.log(iphone.createId());
hitesh.logMe()
// Define a symbol
const mySym2: unique symbol = Symbol("key1");

// Define User object with type annotation
interface User {
  name: string;
  "full name": string;
  [mySym2]: string;
  age: number;
  location: string;
  email: string;
  isLoggedIn: boolean;
  lastLoginDays: string[];
  greetings: () => void;
  greetingsTwo: () => void;
}

//Create a user object
const JsUser: User = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym2]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  greetings: function () {
    console.log(`Hello JS user`);
  },
  greetingsTwo: function () {
    console.log(`Hello Js user : ${this.name}`);
  },
};
//Testing

JsUser.greetingsTwo();

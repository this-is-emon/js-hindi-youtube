interface TinderUser {
  id: string;
  name: string;
  isLoggedIn: boolean;
}

const tinderUser2: TinderUser = {
  id: "123abc",
  name: "Sammy",
  isLoggedIn: false,
};

/***---------------------------------***/

interface FullName {
  userFullName: {
    firstName: string;
    lasName: string;
  };
}

interface RegularUser {
  email: string;
  fullName: FullName;
}

const regularUser2: RegularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "hitesh",
      lasName: "Choudhary",
    },
  },
};

/***---------------------------------***/

const obj4: Record<number, string> = { 1: "a", 2: "b" };
const obj5: Record<number, string> = { 3: "c", 4: "d" };

const obj6: Record<number, string> = { ...obj4, ...obj5 };
const obj7: Record<number, string> = Object.assign({}, obj4, obj5);

/***---------------------------------***/

interface User {
  id: number;
  email: string;
}

const user2: User[] = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "i@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
];

/***---------------------------------***/
/*--De-structuring Object--*/
interface Course {
  courseName: string;
  price: number;
  courseInstructor: string;
}

const course2: Course = {
  courseName: "js in hindi",
  price: 999,
  courseInstructor: "hitesh",
};

const { courseInstructor } = course2;
//console.log(courseInstructor);

/*--De-structuring Array--*/
let myArray2 = [1, 2, 3];

let [firstValue2, secondValue2, thirdValue2] = myArray2;

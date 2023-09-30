const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name:'Ginger Chai',
    price:250,
    isAvailable:true,

    orderChai:function () {
        console.log("Chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:true,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
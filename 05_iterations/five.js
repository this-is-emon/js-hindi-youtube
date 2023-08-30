// Link : https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29
// Topic : High Order Array loops

const coding = ["js", "ruby", "java", "python", "cpp"]

/****** ForEach expects a 'call-back function' inside it , call-back-function doesn't have a name ******/ 
// coding.forEach( function (val){
//     console.log(val);
// } )

/***** The call-back-function can be an arrow function too *****/
// coding.forEach( (item) => {
//     console.log(item);
// } )

/***** you can write a function first and then stick it to the 'forEach()' later *****/
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

/***** In the above the item, index and full array can be printed *****/
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


/***** Looping through Array of Objects -[{},{},{}]- using forEach *****/
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    //console.log(item.languageName);
} )
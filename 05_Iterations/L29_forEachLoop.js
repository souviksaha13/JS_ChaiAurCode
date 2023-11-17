const coding = ["js", "ruby", "java", "python", "cpp"]
// map & forEach are some by-default methods of array

// syntax of forEach loop
/*
array.forEach("callBackFunction (value, index, array)")
callFunction are like normal functions, but doesn't have any name, takes every value of the array as parameter
*/

// Methods to use forEach

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)      //  only the reference of the function is provided, exection of the function is not done here




// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);       // element, index, array -> o/p
// } )


// handling arrays with objects as elements inside it
// Important
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
    
    console.log(item.languageName);
} )


// What if we try to store the values of forEach in any variable?

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item          //  here nothing is returned
// } )

// console.log(values);     //  values will return as undefined, which shows nothing is returned by forEach
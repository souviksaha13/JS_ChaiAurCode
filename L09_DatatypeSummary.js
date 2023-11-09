//  Primitive  -> call by value -> actual memory reference is not provided, rather a copy is provided

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Js is a dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);      //  it will return false as symbol will give unique values

// const bigNumber = 3456543576654356754n
// if we put n at the end, then it is automatically considered as bigint 



// Reference (Non primitive)   -> actual reference of the memory is provided

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof function will return function but it is called as object function

// https://262.ecma-international.org/5.1/#sec-11.4.3
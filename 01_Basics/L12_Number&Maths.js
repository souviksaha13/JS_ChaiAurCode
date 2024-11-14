const score = 400
// console.log(score);
// console.log(typeof score)

const balance = new Number(100)     //  to exclusively define a number
// console.log(balance);
const num = new Number("20a")
// console.log(num)
// console.log(typeof num)
// console.log(typeof balance)

// console.log(balance.toString());  // now we have all the properties of a string
// console.log(balance.toFixed(1));     //  used to determine the precision (digits after decimal)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));    // same as toFixed but counts all the digits


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   //  used to add commas for better readability

// Number has got many other properties, such as Number.MAX_VALUE, Number.MIN_VALUE, etc


// ++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25))
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// Math.random() has the range of [0, 1]
console.log((Math.random()*10) + 1);

// Here we need any number from 1 to 10 
// Initially had the doubt about the corner cases, ie 0 & 1 ->
// .random() gives any number between 0 & 1 -> (0,1), so it is never going to come 10 (when multiplied by 10), but it can come 0, if .random gives output as 0.0xyz.
// To avoid that case, +1 is done.
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// Remember this template -> will be used extensively in future
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
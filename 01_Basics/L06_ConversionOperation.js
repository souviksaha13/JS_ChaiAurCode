let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN  -> meaning is "not a number"
//  true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);                //  sum
// console.log(2-2);                //  substract
// console.log(2*2);                //  multiply
// console.log(2**3);               //  power
// console.log(2/3);                //  division
// console.log(2%3);                //  remainder
// console.log(Math.floor(7/2));    //  quotient

let str1 = "hello"
let str2 = " souvik"

let str3 = str1 + str2      //  concatenation of strings
// console.log(str3);

// console.log("1" + 2);    //  12
// console.log(1 + "2");    //  12
// console.log("1" + 2 + 2);    //  122
// console.log(1 + 2 + "2");    //  32     // 1 & 2 are first summed to get 3, and then converted to string to be concated with "2"

// console.log( (3 + 4) * 5 % 3);       //  parenthesis must be used properly

console.log(+true);     //  o/p -> 1    //  conversion value of true is 1
console.log(+"");       //  o/p -> 0    //  conversion value of "" is 0
// shouldn't do this type of things in the code.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;      //  val++ and ++val concepts are same as prefix postfix operator
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
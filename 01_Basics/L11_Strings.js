// we can use both "" & ''  -> both are fine

const name = "souvik"
const repoCount = 10


// console.log(name + repoCount + " Value");    //  -> this method is outdated, better use backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this method provides string interpolation, so we should prefer this method

const gameName = new String('hitesh-hc-com')  // this is also a method to declare a string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);           //  returns length of the string
// console.log(gameName.toUpperCase());    //  changes string to upperCase
// console.log(gameName.charAt(2));        //  returns the character at given index 
// console.log(gameName.indexOf('t'));     //  returns the index value of the given character

const newString = gameName.substring(0, 4)
console.log(newString);
// we can provide negative values to substring, but it will ignore them and consider it as 0

const anotherString = gameName.slice(-4, -1)
console.log(anotherString);
// slice also considers negative values


const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// trimStart() and trimEnd() can also be used if we want to trim at only one end

const url = "https://souvik.com/souvik%20saha"
// fact -> in url coding, space ' ' is converted to %20

console.log(url.replace('%20', '-'))

console.log(url.includes('saha'))

console.log(gameName.split('-'));
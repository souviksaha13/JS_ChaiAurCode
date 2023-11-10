// array

// arrays are resizable, can contain a mix of different data-types
// arrays are not associative -> can't be accessed using arbitrary strings
// zero-indexed
// array-copy operations create shallow copies, rather than deep copies -> ie the reference point for both remains same

const myArr = [0, 1, 2, 3, 4, 5]        //  elements can be of similar or different types
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)       //  pushes the value to the end
// console.log(myArr)
// myArr.pop()         //  removes the last element from the array
// console.log(myArr)

// myArr.unshift(9)    //  pushes the value at the beginning
// console.log(myArr)
// myArr.shift()       //  removes the first element from the array
// console.log(myArr)

// console.log(myArr.includes(9));     //  checks if myArr contains 9 -> return true/false
// console.log(myArr.indexOf(9));      //  return index of the given element -> if element not available in the array, then returns -1
// console.log(myArr.indexOf(3));

// const newJoin = myArr.join()         //  joins the array elements and returns a string 
// const newJoin2 = myArr.join("-")          //  we can also join the elements using any given symbol
// console.log( newJoin);
// console.log(newJoin2)
// console.log(typeof newJoin);        //  return type is string


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      //  return a copy of a section of an array -> original array is not changed here

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)     // removes the elements from the array (both range included) and return them  -> it obviously modifies the original array
// console.log("C ", myArr);
// console.log(myn2);
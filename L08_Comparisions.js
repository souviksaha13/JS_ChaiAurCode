// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //  false
console.log(null == 0); //  false
console.log(null >= 0); //  true
/*
The reason is that, an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0, that's why null >= 0 is true while others are false
So, this type of comparisons should be avoided.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// We should also avoid such type of comparisions, bcz they create too much confusion

// === 

console.log("2" === 2);
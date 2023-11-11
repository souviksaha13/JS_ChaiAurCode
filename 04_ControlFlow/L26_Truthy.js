// const userEmail = "souvik@gmail.com"
// const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN  -> else are truthy values

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// false == 0   false == ''     0 == ''     -> all statements are true


// Nullish Coalescing Operator (??): // null undefined    //  -> works only on these 2 keywords

// sometimes, when we call from database, or in some special cases, we may get 2 values in return, this operator is made to handle those special cases

let val1;
// val1 = 5 ?? 10           //  val1 is 5 -> the first value is taken
// val1 = null ?? 10        //  val1 is 10 -> since the first value is null, so it takes second value
// val1 = undefined ?? 15   //  val1 is 15 -> same logic
val1 = null ?? 10 ?? 20     //  it takes the first available genuine value (val1 is 10)

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
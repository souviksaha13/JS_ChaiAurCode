//  Stack (primitive datatypes)   &   heap (non-primitive datatypes)

let myName = "souvikSaha"
let anotherName = myName

anotherName = "mayuriGoswami"

console.log(myName);
console.log(anotherName);
// this is bcz in primitive datatypes, only a copy of the actual data is sent, and not the reference of the actual datatypes, so any changes that are made on anotherName will not reflect on myName

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "souviksaha@google.com"

console.log(userOne.email);    // this got changed bcz the reference of userOne and userTwo is same, changes made in any one of them will reflect in both of them

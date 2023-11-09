const accountId = 144553
let accountEmail = "souvik@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"     // variable can be declared in this way also, but this is not recommended at all
let accountState;   // if we just declare the variable but not assigned any value, then it is treated as undefined

// accountId = 2 // not allowed bcz accountId is a constant


accountEmail = "souvik@souvik.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
let should be preferred
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// objects can be defined by using literals or by using constructors
// singleton object -> one of its kind -> made by using constructors

// syntax -> const Jsuser = {}  -> oject literals
// syntax -> Object.create  -> constructor method

// object literals

const mySym = Symbol("key1")        // To use symbol inside the object we have to define it first


const JsUser = {
    name: "Souvik",
    "full name": "Souvik Saha",
    [mySym]: "mykey1",   // to use symbol, we need to put them inside [], else they are treated as string
    age: 22,
    location: "Assam",
    email: "souvik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])   // console.log(JsUser.full name) can't be accessed bcz of the " "(space)
// console.log(JsUser[mySym])         // JsUser[mySym] is the only syntax to access a symbol inside a object

JsUser.email = "souvik@chatgpt.com"
// Object.freeze(JsUser)        //  used to freeze the values of the object -> we cannot change the values from now onwards
JsUser.email = "souvik@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// doing all these will be of no use if the object is in freeze mode, so it needs to be unfreezed before execution.
console.log(JsUser.greeting);  // it will give an output of function return back -> function execute nahi hua hai, bass uska reference aaya hai 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
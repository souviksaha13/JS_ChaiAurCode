
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName        //  this is reference of the function
// sayMyName()      //  this is execution of the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){       //  number1, number2 are parameters

    // let result = number1 + number2
    // return result
    return number1 + number2    //  return ke baad kuch execute nehi hoga
    console.log("Souvik")       // ye kabhi execute nehi hoga
}

const result = addTwoNumbers(3, 5)  //  3, 5  are arguments

// console.log("Result: ", result);


// ------------  Various methods to take parameters  ------------


function loginUserMessage(username = "sam"){      //    here sam is the default value if user doesn't provide any value
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// rest and spread operators -> syntax is same, depending on functionalities, naming is done.
function calculateCartPrice(val1, val2, ...num1){   
    // first two values of the input goes into val1 & val2, rest goes into the rest variable num1
    // num1 is array of all elements starting from 3rd element
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)       //  calling the function
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

// function to return the second element of the given array
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
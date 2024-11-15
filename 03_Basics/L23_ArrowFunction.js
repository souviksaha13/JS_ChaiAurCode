let username = "Myname"

const user = {
    username: "Souvik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${username} , welcome to website`);     
        //  username will be accessed from the global scope, if not available in the global scope, then throws error
        console.log(`${this.username} , welcome to website`);   
        // this is used to refer the current context, here username will be accessed from the current context
        console.log(this);  //  prints the entire current context
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);   //  o/p is {} bcz we are in a node environment, where the current context is an empty object
// but if we try to print the same in a browser, then we will get the window as the o/p




function chai(){
    let username = "Souvik"
    // console.log(this);      // will print many things -> recommended to run once
    // console.log(this.username); //  unable to access context using `this` inside a function, works only with object
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      here also we can't access username using this
// }

const chai =  () => {
    let username = "Souvik"
    console.log(this);      // surprisingly this will give an empty object {}
    // this prints differently in normal function and arrow function
}


// chai()
// syntax to define an arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      //  also known as implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )   // same as above one
// if we wrap it under {}, we need to write return. But if we wrap under (), we needn't write return

// const addTwo = (num1, num2) => ({username: "Souvik"})   // will throw an error, bcz
//  //  the intention is to return the object, but we used {}, so return function is reqd., so better way is declared below

const addTwo = (num1, num2) => ({username: "Souvik"})   // this returns the object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()    //  will discuss in details in further tutorials
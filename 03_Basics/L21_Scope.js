//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);      //  all modification done inside the above scope is only scope specific
// console.log(b);
// console.log(c);

// Global scope code environment mei aur browser mei alag alag hai -> will be recalled later.


function one(){
    const username = "Souvik"

    function two(){
        const website = "portfolio"
        console.log(username);
    }
    // console.log(website);        //  website not available outside the scope of function two

    two()

}

// one()

if (true) {
    const username = "souvik"
    if (username === "souvik") {
        const website = " portfolio"
        // console.log(username + website);
    }
    // console.log(website);        //  this will throw an error
}

// console.log(username);       //  this will throw an error

// Nested function ke case mei child function parent ke variables ko access kar paate hai



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5))      //  can access addOne even before initialization

function addOne(num){
    return num + 1
}



addTwo(5)       //  can't access addTwo before initialization

const addTwo = function(num){   //  This is also known as expression
    return num + 2
}

// addTwo can't be accessed before initialization while addOne can be accessed.
// It is due to the difference in declaration method
// (hoisting)  -> will be discussed later
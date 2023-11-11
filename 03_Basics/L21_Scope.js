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



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5))      //  can access addOne even before initialization

function addOne(num){
    return num + 1
}



addTwo(5)       //  can't access addTwo before initialization

const addTwo = function(num){
    return num + 2
}

// addTwo can't be accessed before initialization while addOne can be accessed.
// It is due to the difference in declaration method
// (hoisting)
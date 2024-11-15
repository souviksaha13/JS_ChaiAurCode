// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE bcz this function has a name "chai"
    console.log(`DB CONNECTED`);
})();   // is case mei ; lagana bohot jaruri hai 

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )('Souvik');

// ()()  -> first parenthesis is the function definition, and second parenthesis is the execution call
// IIFE is used to remove the issue of pollution from the global scope, we immediate execute the function as soon as we define it


// IIFE gets invoked immediately, but it is unaware when to terminate, so we need to explicitly terminate IIFE using ; after the function call

// IIFE also accepts parameters
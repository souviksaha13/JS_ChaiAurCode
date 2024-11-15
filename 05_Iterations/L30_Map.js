const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Two different syntax for same tax
// const newNums = myNumers.map( (num) => { return num + 10})
const newNums = myNumers.map( (num) => num + 10)
// console.log(newNums)


// Chaining
// Using more than one method in one shot

const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)   // the num here is not the original value, but the (original value)*10
                .filter( (num) => (num >= 40))

console.log(newNums);
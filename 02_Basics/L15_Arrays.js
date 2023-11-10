const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      //  will push the entire second array into the first as a element of the first array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   //  this will push the elements of the second array into the first array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    //  spread operator will do the work
// it spreads all the elements of the array -> when both the arrays get spread into a new array, we get all the elements of both the arrays in a single array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// flat -> this method returns a new array with all the sub-array elements concatenated into it recursively upto the specified depth  -> with infinity we can get all the elements in the single array
console.log(real_another_array);



console.log(Array.isArray("Souvik"))        //  checks if the given input is an array -> false
console.log(Array.from("Souvik"))           //  converts the given input into array
console.log(Array.from({name: "Souvik"})) // interesting
// we need to specify that we want the array of keys or values? Otherwise, it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //  return a new array from a set of given elements
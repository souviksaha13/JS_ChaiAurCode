const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {                             // key in object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for-In in arrays
//  keys of arrays are by-default number starting from 0
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
// here it will print the keys of the array -> arrays ki bhi keys hoti hai [0, 1, 2, 3, 4]


// So, according to my understanding, for-off loops works on iteratable objects, which have uniform keys like arrays, map, etc
//                                                                  Objects also have keys, but they are not uniform. 
// And for-in loop is used for the keys, so all the keys are getting printed using for-in loop
// This is just for my understanding of for-off and for-in loops as of now -> may be completely wrong concept.



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// maps are not iteratable, so nothing will be printed when we try to print the keys of a map using for-In
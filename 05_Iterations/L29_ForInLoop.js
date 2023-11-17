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

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// maps are not iteratable, so nothing will be printed when we try to print the keys of a map using for-In
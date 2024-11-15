// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {        // iterator of object(any object, not javascript object only)
    //console.log(num);         //  all the elements of the array will be printed
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// Maps

/*
Map objects are collection of key-value pairs (similar to object with some differences)
It remembers the order of insertion
A key in the Map is unique (may occur only once)
set, get, forEach, clear, delete, entries, keys, values are some methods of Map
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")      //  will not enter twice in the map, bcz duplicate keys are not allowed.

// console.log(map);

for(const key of map) {
    // console.log(key);       //  interesting -> prints the entire map, and not only keys or values
}

for (const [key, value] of map) {       //  [] does the de-structure of the Map
    // console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// }

// we can't iterate objects using this method of 'for-of loop'
// const tinderUser = new Object()      // singleton object
const tinderUser = {}                   // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Souvik",
            lastname: "Saha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }      // obj1 & obj2 will entirely go inside obj3 as their elements
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // all values will go inside the {}   //   {} is an optional parameter
// const obj = Object.assign(obj1, obj2, obj3)      // all values will go in obj1, as it is in first place, if {} would have been in the first place, then all the elements could go 

const obj3 = {...obj1, ...obj2}     // this is the best practice to merge two or more objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hi@gmail.com"
    },
    {
        id: 3,
        email: "hitesh@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));       // How to get the keys of an object        //  returns a array of keys 
// console.log(Object.values(tinderUser));     // HOw to get the values of an object      //  returns a array of values
// console.log(Object.entries(tinderUser));    // Har ek key value pair ko ek array mein banaya jata hai, -> returns an array of array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // check if the property is available or not



// ------------------------- Object De-structure -------------------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course        // courseInstructor is de-structured from the object course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course       //  we can further de-structure to reduce the size
console.log(instructor);


// Just a small talk about the API

// Pehle api se response xml mei aati thiii, which was complex -> nowadays json mei aati hai (also known as object without name)

// Types of responses from API's

//  API response format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
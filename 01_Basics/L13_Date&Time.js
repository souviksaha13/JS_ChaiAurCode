// Dates

// Dates begin from january 1, 1970

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);                 //  type is object

// let myCreatedDate = new Date(2023, 0, 23)        // year 2023, month jan, date 23  -> month count start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)     //  year month date hour minutes seconds milliseconds
// let myCreatedDate = new Date("2023-01-14")       //  here month count starts from 1, ie 1 == january
let myCreatedDate = new Date("01-14-2023")          //  date is 14 jan, 2023
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()        //  gives the timestamp when the code is ran

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());        //  provides the time when the date was created (in milliseconds)
// console.log(Math.floor(Date.now()/1000));    //  provides the time in seconds, from 1st jan 1970

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);    //  .getMonth() returns january as 0 -> add 1 to it to get the actual month
console.log(newDate.getDay());          //  counts monday as 1, till sunday as 7

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))

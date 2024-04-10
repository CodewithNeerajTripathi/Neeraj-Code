const { copyFileSync } = require("fs");

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log( typeof myDate);

let createDate = new Date(2023,4,0,7,5,7)
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));

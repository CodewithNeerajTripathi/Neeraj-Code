const { constants } = require("buffer")

const tinderuser={}

tinderuser.name="neeraj"
tinderuser.id="123neeraj43"
tinderuser.email="neeraj2345@gmail.com"
// console.log(tinderuser)

const reguleruser={
    email:"neerajtripathi@047gmail.com",
    fullname:{
        userfullname:{
            name:"neeraj",
            lastname:"tripathi"
        }
    }
}
// console.log(reguleruser.fullname.userfullname.lastname)

let user1=["neeraj","shaurabh","sani"]
let user2=["neelam","kajal","sonam"]
let user3=[420,786,3,5]


// console.log(...user1,...user2,...user3)

const user=[
    {
        id:"43neeraaj",
        email:"push123tri@gmail.com"
    },
    {
        id:"43prakhaar",
        email:"prakhar123tri@gmail.com"
    },
    {
        id:"43jyoti",
        email:"jyoti3223tri@gmail.com"
    },
    {
        id:"43karan",
        email:"karanh123tri@gmail.com"
    },
]
// console.log(user[0].email)
console.log(tinderuser)



console.log(Object.keys(tinderuser))

console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))


console.log(tinderuser.hasOwnProperty(`id`))




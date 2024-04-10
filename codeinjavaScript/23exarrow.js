const user={
    username:"neeraj",
    price: 39,
    welcomeMassage:function(){
        console.log(`${this.username},Welcome to website`)
    }
}
// user.welcomeMassage()

// const one=(num1,num2) =>{
//     return(num1+num2)

// }


// const one=(num1,num2) => (num1+num2)

const one=(num1,num2) => num1+num2

console.log(one(7,3))
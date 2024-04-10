

const ext= Symbol["key1"]
const jsobject={
    name: "Neeraj Kumar",
    [ext]:"mykey1",
    Age: 21,
    email: "neeraj@0096gmail.com",

    pass: "maknhet"

}

// console.log(jsobject.email) 

// console.log(jsobject["email"])
// console.log(jsobject[ext])

jsobject.email="neeraj099@gmail.com"
console.log(jsobject)

jsobject.greed= function(){
    console.log("this is a function")
}
console.log(jsobject.greed())
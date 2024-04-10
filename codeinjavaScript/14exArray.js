const MyArr=[0,1,2,3,4,5,6];

// console.log(MyArr[5]);

// **********MATHED FOR ARRAY*******
// this mathed adds  extra value in array
MyArr.push(7);
// console.log(MyArr);

// this mathed delete last value of index in array

MyArr.pop();
// console.log(MyArr);



// shift and unshift matherd


MyArr.unshift(9); // this mathed adds extra value in 0 index
MyArr.shift()     // this mathed clear value in 0 index 
// console.log(MyArr);


// console.log(MyArr.includes(6))
// console.log(MyArr.indexOf(14))

// slice and splice
// console.log("A" +   MyArr)


const newn1= MyArr.slice(1,4);
// console.log(newn1)
// console.log("b" +   MyArr)




const newn2= MyArr.splice(1,4);
console.log(newn2)
console.log("c" +   MyArr)






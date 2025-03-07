const user = {

    username: "Saurav",
    price: 1999,

    welmessage: function() {

        console.log(`${this.username} , Welcome to website`)

        console.log(this);
        
    }

}
// user.welmessage() 

// user.username = "Sam"
// user.welmessage()  //context change so value also change.

// console.log(this);

// function chai(){
//     const user  = "Saurav"
//     console.log(this.user);  //this is not  use in funtion for acces the data.
    
// }

// const chai = function () {
//     const user  = "Saurav"
//     console.log(this);
// }

// const chai = () => {
//     const user  = "Saurav"
//     console.log(this);
// }

// // chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
//  }

// const addtwo = (num1,num2) =>  num1 + num2  //implicit return , use for the single line statement.

// const addtwo = (num1,num2) =>  (num1 + num2)

const addtwo = (num1,num2) =>  ({username: "SAURAV"})

console.log(addtwo(5,6));

const myArray = [2,5,6,7,8]

myArray.forEach(() => ())
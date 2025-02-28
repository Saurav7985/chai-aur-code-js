//singleton 
// Object.create

//object literals

const mysym = Symbol("key1")
  
const user = {
    name : "saurav",
    // "mysym" : "key1",
     [mysym] : "key1",

    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isloggedin : false,
    lastlogindays : ["monday", "saturday"]

}

// console.log(user.name)
// console.log(user.email)
// //write way to acces these function is by square bracket. (user[])
// console.log(user["email"])
// console.log(user["location"]) //strings
// console.log(user[mysym]) // symbols

user.email = "sauravraikwar26@gmail.com"

// Object.freeze(user) //freez the object and dont make any changes.

user.email = "hiteshraikwar26@gmail.com"

// console.log(user)

user.greeting = function(){
    console.log("hello every one")
}
user.greeting2 = function(){
    console.log(`hello everyone, i am ${this.name}`)
}

user.greeting();
user.greeting2();
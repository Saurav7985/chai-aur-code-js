// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "abc123"
tinderuser.email = "skrchp87@mail"
tinderuser.loggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname:{
        username:{
            firstname:"saurav",
            lastname:"kashyap"
        }
    }
}
// console.log(regularuser.fullname.username);

const obj1  = { 1 : "a",2: "b"}
const obj2  = { 3 : "a", 4: "b"}

// const obj3  = {obj1 , obj2}
// console.log(obj3);

// const obj3  = Object.assign({}, obj1 , obj2 )

const obj3 = { ...obj1, ...obj2,} //spread method
// console.log(obj3);

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnproperty('loggedin'));//

const user = [
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "1",
        name:"saurav"
    },
    {
        id: "3",
        name:"saurav"
    },
    {
        id: "2",
        name:"saurav"
    }
]
console.log(user[1].id)
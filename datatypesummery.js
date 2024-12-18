//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


//Non-primitive

// Array
// function
// Objects

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "saurav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log("Type of int value : " + typeof score);
console.log("Type of decimal value : " + typeof scoreValue);
console.log("Type of boolean value : " + typeof isLoggedIn);
console.log("Type of null value : " + typeof outsideTemp);
console.log("Type of undefined value : " + typeof userEmail);
console.log("Type of symbol value : " + typeof id);
console.log("Type of 2nd symbol value : " + typeof anotherId);
console.log("Type of big number value : " + typeof bigNumber);

console.log("Type of Array value : " + typeof heros);
console.log("Type of object value : " + typeof myObj);
console.log("Type of function value : " + typeof myFunction);


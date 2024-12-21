const score =400
console.log(score);

const number  = new Number(125.56324)
console.log(number)

console.log(number.toString().length); // we use property of string in this numb
console.log(number.toFixed(2)); // it precise the value after the decimal

const numb2 = 245.845
console.log(numb2.toPrecision(3)); //it precise the whole value

//if the number is 23.256 = toprecise(3) give 23.3

const numb3 = 1000000
console.log(numb3.toLocaleString('en-IN')); //it convert the number in indian written form

//++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.56)); // give the round off value of number  
console.log(Math.ceil(4.2)); // give the higher value
console.log(Math.floor(4.9)); // give the lower value
console.log(Math.min(3,5,6,8,9)); // give min value of the passed array
console.log(Math.max(4,5,6,8,9)); // give max value of the passed array

console.log(Math.random()); //give value random value 0-1 
console.log((Math.random()*10)+1); //give value from 1 - 10
console.log(Math.floor((Math.random()*10))+1); //give lower value from 1 -10
 
// as we take example of dice.
const min = 1;
const max = 6;

console.log(Math.floor(Math.random()*(max-min+1))+min); // Algorithm of dice roll. 

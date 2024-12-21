let mydate = new Date()
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());

console.log(typeof mydate); //object

let mycreatedate = new Date("2024-12-24")
console.log(mycreatedate.toLocaleString());

let mytimestep = Date.now(); // start from 1 jan 1970 and in milli second.
console.log(mytimestep);
console.log(mycreatedate.getTime());
console.log(Math.floor(mycreatedate.getTime())/1000);

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())// give date from sunday to saturday.
console.log(newdate.getMonth()+1)
console.log(newdate.getFullYear())
console.log(newdate.getTime())

//string interpolation 

console.log(` it is the day ${newdate.toLocaleString()} and time from 1 jan 1970 utc ${newdate.getTime()} `)



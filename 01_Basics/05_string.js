const name = "saurav"
const repocount = 50

console.log(`it is me name ${name} and my age is ${repocount}.`)

const gamename = new String("hatake")
console.log(gamename)
console.log(gamename[0])
console.log(name[0])

console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

console.log(gamename.substring(0,4));
console.log(gamename.slice(-8,5));

const stringone  = "  hitesh   "
console.log(stringone);
console.log(stringone.trim());

const url = "htps://hitesh@.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes("hitesh"));









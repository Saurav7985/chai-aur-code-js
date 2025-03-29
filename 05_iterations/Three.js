// for of 
//["","",""]
//[{},{},{}]

let arr = [1, 2, 3, 4, 5]

for (const num of arr ) {
    // console.log(`value of numbs : ${num}`);
}

const greeting = "Hello world"
for (const greet of greeting) {
    // console.log(`each char of greeting ${greet}`);
}

//Map

const map = new Map()
map.set('IN',"india")
map.set('USA',"United State Of America")
map.set('FR',"Franch")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key," country ",value);
    
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}
// does not work in obj key value pair.

// for (const [key,value] of myobj) {
//     console.log(key," game ",value);
    
// }
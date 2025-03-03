function saymyname(){
console.log("s");
console.log("a");
console.log("u");
console.log("r");
console.log("a");
console.log("v");

}

// saymyname() 

function addnumbers(num1,num2){
    // console.log(num1+num2);
    return num1+num2
}
 
// addnumbers(1,3)
// addnumbers(6,a)
// addnumbers(2,null)

const result = addnumbers(2,5)

// console.log(`result : ${result}`)

function loginusermessage(username){
    if (username == undefined ) {
        console.log("please enter username");
        return
    }
   else  return `${username} just logged in`
}

console.log((loginusermessage("saurav")));
console.log((loginusermessage("")));
console.log((loginusermessage()));



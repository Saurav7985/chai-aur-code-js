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

// console.log((loginusermessage("saurav")));
// console.log((loginusermessage("")));
// console.log((loginusermessage()));

function calculatcartprice(val1,val2,...num){
    return num;
}

// console.log(calculatcartprice(200,500,600,2000))

const user = {
    username: "saurav",
    price: 199
}

function handleobj(anyobj){
    console.log(`user name is ${anyobj.username} and the price is ${anyobj.price} `)

}

// handleobj(user)

handleobj({
    username: "raj",
    price:699
})

const mynewarray = [200 ,400, 300, 600]

function returnsecondvalue(getarray){
    return getarray[1]
}

// console.log(returnsecondvalue(mynewarray));

console.log(returnsecondvalue([200,400,600,500]))

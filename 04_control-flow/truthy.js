const UserEmail =  ""

if (UserEmail) {
    console.log("got user email");
    
} else {
    console.log("dont have user email");
}

//false value 

// false , 0 , -0, BigInt 0n , "", null , undefined ,NaN  

//turthy value

// "0" , 'false' , " " , [] , {} , function(){} 

// if (UserEmail.length === 0 ) {
//     console.log("Array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}


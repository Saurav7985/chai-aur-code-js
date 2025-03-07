(function chai(){
    //NAMED IIFE
    console.log("DB CONNECTED");
})() ;

// ()() -- one for function and one for return or ececution

// these funtion execute immediately and save global polution 

// ; IS IMPORTANT TO DECIDE WHERE IT HAVE TO STOP.

((NAME) => {
    console.log(`1DB CONNECTED TWO ${NAME}`)
})("SAURAV");

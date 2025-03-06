// let a = 10
// const b = 20
// var c = 300

let a  = 300

if(true){
    let a = 10
    const b = 20
     var c = 30 //it has scope outside the if also.
    //  console.log("inner : ",a);
     
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two();
    
}

// one()

if(true){

    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username); // dont print bcz of  the scope dont allow it

//++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

console.log(addone(6));

function addone(value){
    return value + 1
}

// console.log(addtwo(6)); // but they dont acces before the declairation beacause of the const .

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(6));


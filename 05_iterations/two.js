
let i = 0

while (i <= 10){

// console.log(`value of index is ${i} `);
i = i + 2;

} 

//console.log(i); // i has global scope.

let MyArray = ["Betman","Superman","CATMan"]
let arr = 0;
while (arr < MyArray.length) {

    // console.log("value is "+ MyArray[arr]);
    arr++;

}

let score = 11; //it run it atlest one time even the condition is wrong.

do {
    console.log("score is " + score);
    score++;
} while (score <= 10);
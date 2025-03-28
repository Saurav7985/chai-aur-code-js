// FOR

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is best element.");
    }
    // console.log(element);
}

// console.log(element); //not have scope.

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value : ${j} and outer loop is ${i}  `);
        // console.log(i + " * " + j + " = " + ( i*j ) );

    }
}


let myarray = ["flash", "betman", "superman", "hanuman"]

// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);

}

// Break and Continue.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`value of i : ${i} `);

}


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i : ${i} `);

}

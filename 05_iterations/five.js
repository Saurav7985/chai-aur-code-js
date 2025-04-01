const array = ["js","ruby","python","cpp"]

const values = array.forEach((element) => {
    console.log(element);
});



array.forEach((element) => {
    // console.log(element);
});

function printme(item){
    console.log(item);
    
}

// array.forEach(printme)

array.forEach((item,index,arr) => {
 //for each have these 3 things in it.
    // console.log(item,index,arr);
});

const mylanguage =[

{
    languagename : "js",
    languagefilename : "javascript"
},
{
    languagename : "ry",
    languagefilename : "rubby"
},
{
    languagename : "py",
    languagefilename : "python"
}
]

mylanguage.forEach( (item) => {
console.log(item.languagename);
    }
)
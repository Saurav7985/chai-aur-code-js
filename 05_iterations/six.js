const array = ["js","ruby","python","cpp"]

const values = array.forEach((element) => {
    // console.log(element);
    return element; //for each loop does not return any thing.

});

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.filter((num) => num > 4)
// const newNums = mynums.filter((num) => {return num > 4})

// console.log(newNums);

const NewNumbs = [];

mynums.forEach(num => {
    if (num >4) {
        NewNumbs.push(num)
    }
    
});

// console.log(NewNumbs); //we also work with it like this

const books = [
    {title : "Book One" , genre : 'history' , publish: 1979 , edition : 1998},
    {title : "Book Two" , genre : 'Action' , publish: 1976 , edition : 1997},
    {title : "Book Three" , genre : 'Comedy' , publish: 1956 , edition : 1994},
    {title : "Book Four" , genre : 'Comedy' , publish: 1996 , edition : 1999},
    {title : "Book Five" , genre : 'Horror' , publish: 1915 , edition : 1993},
    {title : "Book Six" , genre : 'Comedy' , publish: 1977 , edition : 1994},
    {title : "Book Seven" , genre : 'history' , publish: 1979 , edition : 1992},
    {title : "Book Eight" , genre : 'Comedy' , publish: 1989 , edition : 1993}
]

let userbook = books.filter((bk) => bk.genre == 'history')

 userbook = books.filter((bk) => {return bk.publish <= 2000})

console.log(userbook);




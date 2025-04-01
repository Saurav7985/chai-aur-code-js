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
    {title : "Book One" , genre : 'history' , publish: 1979 , edition : 1990}
]





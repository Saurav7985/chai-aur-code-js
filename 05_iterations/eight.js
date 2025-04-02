const Mynumb = [1,2,3]

// const NewNumb = Mynumb.reduce(function (Acc,Curval) 
// {console.log(`Acc : ${Acc} and current value ${Curval} `);
// return Acc + Curval 
// },0)

const NewNumb = Mynumb.reduce( (Acc,Curval) => Acc + Curval ,0)

// console.log(NewNumb);

const shoppingCart = [
{
    itemName : "Js course",
    price : 999
},
{
    itemName : "DS course",
    price : 899
},
{
    itemName : "Python course",
    price : 999
},
{
    itemName : "Web-dev course",
    price : 1000
},
{
    itemName : " Mobile course",
    price : 2999
}

]

const pricetopay = shoppingCart.reduce((Acc,item) => Acc + item.price ,0 )

console.log(pricetopay);

//find Array function
const people = [{ name: 'Max'}, { name: 'Jack'}, { name: 'Mary'}, ]
//Javascript
// function findPerson(val){
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         if(person.name === val){
//             return person
//         }
//     }
//     console.log(`cannot find ${val}`);
// }
// findPerson('Mary')

//es6
// function findPerson(val) {
//     const person = people.find(person => person.name === val);
//     return person ? person.name : 'Person not found';
// }
// console.log(findPerson('Mary'));

//forEach method
function showEachOne(name) {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].name);
    }
}
showEachOne()

const showEachOne = name => people.forEach(person => console.log(person.name));


// const products = [{name:"Milk", price: 15}, {name:"Water", price: 9}, {name:"Bread", price: 5}];

// JavaScript
// Filter array function
function filterProducts() {
 let cheapProducts = [];
 for (let i = 0; i < products.length; i++) {
   if (products[i].price < 10) cheapProducts.push(products[i]);
 }
 return cheapProducts;
}
console.log(filterProducts());

// ES6
 const filterProducts = () => products.filter(product => product.price < 7);
 console.log(filterProducts());


 const products = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
   ]
   
//    JavaScript
// Map method
   function changeProducts() {
    for (let i = 0; i < products.length; i++) {
      products[i].price -= products[i].price * 0.05
    }
    return products
   }
   console.log(changeProducts());
   
// ES6
//    const changeProducts = () =>
//     products.map(val => ({ ...val, price: val.price + 2 }));
//    console.log(changeProducts());
//    console.log(products);
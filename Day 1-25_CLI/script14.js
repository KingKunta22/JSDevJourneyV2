const prompt = require('prompt-sync')();

// Day 14 / script14

// const products = [
//   { name: "Dog Food", price: 500 },
//   { name: "Cat Toy", price: 150 },
//   { name: "Dog Leash", price: 300 }
// ];

// // Exercise 1

// const getCheapProducts = products.filter(n => n.price < 300)

// // Exercise 2

// const productNames = products.map(n => n.name);

// // Exercise 3

// const findProduct = products.find(n => n.name === 'Cat Toy')

// // Exercise 4

// const totalPrice = products.reduce((sum, product) => {
//     return sum += product.price
// }, 0)

// console.log(getCheapProducts)
// console.log(productNames)
// console.log(findProduct)
// console.log(totalPrice)


// Part 4: Mini Program

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 }
];

// const getTotalQty = cart.reduce((totalQty, item) => {
//     return totalQty += item.qty
// }, 0)

// const getTotalPrice = cart.reduce((totalPrice, item) => {
//     return totalPrice += item.price * item.qty
// }, 0)

// const getExpensiveItems = cart.filter((item) => {
//     if(item.quantity * item.price >= 500){
//         return item
//     }
// })

// console.log(getTotalQty)
// console.log(getTotalPrice)
// console.log(getExpensiveItems)

// Okay, that's wrong but let me try again:

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 }
// ];

// const getTotalQty = cart.reduce((totalQty, item) => {
//     return totalQty += item.qty
// }, 0)

// console.log(getTotalQty)

// const getTotalPrice = cart.reduce((totalPrice, item) => {
//     return totalPrice += item.price * item.qty
// }, 0)

// console.log(getTotalPrice)

// const getExpensiveItems = cart.forEach((item) => {
//     let itemTotal = item.quantity * item.price
//     if(itemTotal >= 500){
//         console.log('This item is expensive')
//     } else {
//         console.log('This item is cheap')
//     }
// })

// Bruh why is the third function ot working thoooo
// Let me try again:

// const getExpensiveItems = cart.filter((item) => {
//     let itemTotal = item.price * item.qty
//     if(itemTotal >= 500){
//         console.log('This item is expensive')
//     } else {
//         console.log('This item is cheap')
//     }
// })

// Bruh it was working all along, i js used item.quantity instead of item.qty :D

// const getExpensiveItems = cart.filter((item) => {
//     return item.price * item.qty >= 500
// })

// console.log(getExpensiveItems)


// Well, that didn't work xd

// const getExpensiveItems = cart.filter((item) => {
//     let itemTotal = item.price * item.qty
//     if(itemTotal >= 500){
//         console.log('This item is expensive')
//     } else {
//         console.log('This item is cheap')
//     }
// })

// I think that's just it, I cant use map because I dont need any array or object manipulation
// It might be possible to do this with foreach, but I tried and it didnt work

// DEBUG:

// const result = cart.forEach(item => item.price * item.qty);
// console.log(result);

// I initially thought, there's nothing wrong but it seems like its not returning a value properly
// Shouldn't it have like item => item then item.price * item.qty??

// Or idk bro, i think thats the problem
// Or you can actually use reduce and then make it a bit more understandable by doing:

// const result = cart.reduce((total, item) => {
//     return total += item.price * item.qty
// }, 0)



// REFLECTION:

// 1. I should use map, if I want to manipulate an array of objects, for example, I want to add 10 to the value of each property, then i should use map
//    Meanwhile, I should use filter() if I want to return some of the objects inside the array that passes the condition inside it

// 2. Because it affects all the other objects inside the array
// 3. I'm stuck between figuring out if there's a simpler way to do it or completely overcomplicating everything, just basically not being satisfied 
//    of what I did
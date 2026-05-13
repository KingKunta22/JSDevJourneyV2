const prompt = require('prompt-sync') ();

// Day 13 / script13



// let products = [
//     {
//         name: 'Dog Food',
//         price: 100,
//         qty: 2
//     },
//     {
//         name: 'Cat Food',
//         price: 200,
//         qty: 1
//     },
//     {
//         name: 'Bird Food',
//         price: 80,
//         qty: 2
//     }
// ]


// Exercise 1: Filter Expensive Products

// const expensiveProducts = products.filter( n => n.price > 100)


// Exercise 2: Map Names Only

// const productNames = products.map( n => n.name)

// I actually wanna just clarify the difference between filter and map
// So inside the filter is a condition, it returns an array of object properties only right?
// Then the map method gets a specific property of an object? Both are kind of similar
// Can I not do everything inside the map since it also accepts conditions?
// Let me try

// const expensiveProducts = products.map( n => n.price > 100)

// console.log(expensiveProducts)
// Okay, now I kind of get it, but why is it returning false true false? Is it because it doesnt accept conditions? I mean 
// it accepts it but it returns an array? not object properties?

// I js reread both of its definition and afaik, both of them returns an array
// But the filter returns the literal array of that specific condition
// Meanwhile, the map returns a transformed array, or basically, the answer of that condition

// Bruh whatever bro


// Exercise 3: Find Product (I already did this)

// let userInput = prompt('Search for a product: ')

// const findProduct = products.find( p => p.name === userInput)

// console.log(findProduct)


// // Exercise 4: Total Price using reduce()

// const totalPrice = products.reduce((total, product) => {
//     return product.price + total 
// }, 0)

// console.log(totalPrice)

// Oh, actually that's wrong cus im not getting the qty:

// const totalPrice = products.reduce((total, product) => {
//     return total += product.price * product.qty
// }, 0)

// console.log(totalPrice)



// Program 1: Clean Search System

// let userInput = prompt('Search for a product: ')

// const findProduct = products.filter((product) => {
//     if(product.name.toLowerCase().includes(userInput.toLowerCase())){
//         return product.name;
//     } else {
//         console.log('Item not found')
//         return
//     }
// })

// console.log(findProduct);


// PROGRAM 2: Cart Summary System

// let cart = [
//     {
//         name: 'Dog Food',
//         price: 100,
//         qty: 2
//     },
//     {
//         name: 'Cat Food',
//         price: 120,
//         qty: 1
//     }
// ]

// const getTotal = cart.reduce((total, product) => {
//     return total += product.price * product.qty
// }, 0)


// const cartSummary = cart.forEach((product) => {
//     let productTotal = product.qty * product.price
//     console.log(product.name + ' x' + product.qty + ' = ' + productTotal)
// })

// console.log(cartSummary)
// console.log('Total: ' + getTotal)

// Okay, why does it return undefined now, is it because I have two console logs inside the cart summary and then another one below it?

let cart = [
    {
        name: 'Dog Food',
        price: 100,
        qty: 2
    },
    {
        name: 'Cat Food',
        price: 120,
        qty: 1
    }
]

const getTotal = cart.reduce((total, product) => {
    return total += product.price * product.qty
}, 0)


const cartSummary = cart.forEach((product) => {
    let productTotal = product.qty * product.price
    console.log(product.name + ' x' + product.qty + ' = ' + productTotal)
})

console.log('Total: ' + getTotal)

// How would I even do that with map lol


// Anyways, QUIZ

// Q1: filter() array method returns an object inside an array that passes that specific condition isnide the filter function
// Q2: find() returns the first match only and then it returns that specific object, meanwhile
//     filter() returns an array of objects that passes that specific condition, not just one

// Q3: The map changes the array and the properties depending on the condition, it transforms the array, not just passes it
// DEBUG: 

// let nums = [1,2,3,4]

// let result = nums.filter((n) => {
//     return n % 2 === 0
// })

// console.log(result)
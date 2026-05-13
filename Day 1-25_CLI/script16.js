const prompt = require('prompt-sync') ()

// DAY 16

// const cart = [
//     { 
//         name: 'Dog Food', 
//         price: 500,
//         qty: 2
//     },
//     {
//         name: 'Cat Food',
//         price: 250,
//         qty: 5
//     },
//     {
//         name: 'Bird Food',
//         price: 200,
//         qty: 10
//     },
//     {
//         name: 'Cat Toy',
//         price: 700,
//         qty: 2
//     }
// ];

// Exercise 1: Increase Quantity (Immutability)

// const cart = [
//     { 
//         name: 'Dog Food', 
//         price: 500,
//         qty: 2
//     }
// ];

// // let newCart = cart.map((item) => {
// //     return { ...item, qty: item.qty + 1}
// // })

// // So, I know this is wrong because it maps every item inside the cart instead of js dog food
// // Also, does map work best in this process?
// // When do I mutate? Or should I just keep on making sure that everythings immutable?
// // What do you call this line { ...item }?

// // Okay, so since dog food is the only one I will be adding the quantity to 1, here it is:

// let newCart = cart.map((item) => {
//     if(item.name === 'Dog Food'){
//         return { ...item, qty: item.qty + 1}
//     } 
//     return item;
// })

// console.log(cart)
// console.log(newCart)

// // Great, works


// Exercise 2: 

// // So, I'm just gonna create a new array right? using map? Okayy
// const removeCatToy = cart.map((item) => {
//     // Wait, but are we affecting the original or no? I assume no, since we're using immutability
//     if(item.name === 'Cat Toy'){
//         return { ...item}
//     }
//     return { ...item }
// })

// console.log(removeCatToy)

// I just looked it up online (which I am trying my best not to), and I have to use filter
// Can I not do this with map since I'm transforming an array or no?

// Oh actually no because I want to only return SOME obj inside the array and not keeping evreything
// I actually asked deepseek before all of this about when to use the right methods and here's what it respnded to:

// Use filter when:   "I want SOME of the items"
// Use map when:      "I want EVERY item, but CHANGED"
// Use find when:     "I want ONE item"
// Use forEach when:  "I want to DO something with each item (save, print, update DOM)"
// Use reduce when:   "I want ONE VALUE from many (sum, average, group)"

// This one really helps me a lot

// It's basiocally a cheat sheet but ye I got the answer now
// const removeCatToy = cart.filter((item) => {
//     if(item.name !== 'Cat Toy'){
//         return { ...item}
//     }
// })

// console.log(removeCatToy)

// Well, this just solved it, but is this the best option here in my case??

// Anyways, Exercise 3

// So, since I'm changing all items, not just some, I'm gonna use map


// const applyDiscount = cart.map((item) => {
//     return { ...item, price: item.price -= 100}
// })

// console.log(applyDiscount)

// Working, but is that the best way to do it?


// Exercise 4: Find Total
// So, since Im finding and getting a value from each and every objecttt, im gonna use reduce() right

// const getCartTotal = cart.reduce((total, item) => {
//     return total += item.price * item.qty
// }, 0)

// console.log(getCartTotal)

// That worked, I think


// Mini Program: Real Cart System

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 }
];

// Task 1: Add Item

// let userInput = prompt('Enter a product to add: ');

// // I think we're gonna have to use map since I have to transform the array and return everything
// const addItem = cart.map((item) => {
//     if(item.name.toLowerCase() === userInput.toLowerCase()) {
//         return { ...item, qty: item.qty + 1}
//     } else {
//         // Damn, this is hard but I got this
//         return { ...item, name: userInput, price: undefined, qty: 1}
//     }
// })

// console.log(addItem)

// Actually, this works, but incorrectly, and I need to adjust the userInput because it keeps on asking it thrice

// Or maybe the condition is wrong

// let userInput = prompt('Enter a product to add: ');

// const addItem = cart.map((item) => {

//     if(item.name.toLowerCase() !== userInput.toLowerCase()) {
//         return { ...item, name: userInput, price: undefined, qty: 1}
//     }
//     if(item.name.toLowerCase() === userInput.toLowerCase()) {
//         return { ...item, qty: item.qty + 1}
//     }
// })

// console.log(addItem)

// Okay, now Im confused because why is the first if statement true at all times, when it should be true once

// let userInput = prompt('Enter a product to add: ');

// const addItem = cart.map((item) => {
//     if(userInput.toLowerCase() === item.name.toLowerCase()) {
//         return { ...item, qty: item.qty + 1}
//     } else {
//         return { ...item, name: userInput, price: undefined, qty: 1}
//     }
// })

// console.log(cart)
// console.log(addItem)
// console.log(cart)

// I have a feelinmg that I dont need to use {...item} here

// let userInput = prompt('Enter a product to add: ');

// const addItem = cart.map((item) => {
//     if(userInput.toLowerCase() === item.name.toLowerCase()) {
//         item.qty++
//         return item
//     } else {
//         return {...item, name: userInput, price: undefined, qty: 1} 
//     }
// })

// console.log(cart)
// console.log(addItem)
// console.log(cart)

// I think I got it this time:

// let userInput = prompt('Enter a product to add: ');

// const addItem = cart.map((item) => {
//     if(userInput.toLowerCase() === item.name.toLowerCase()) {
//         item.qty++
//         return item
//     } else if(userInput.toLowerCase() !== item.name.toLowerCase()){
//         return {...item, name: userInput, price: undefined, qty: 1} 
//     } else {
//         return item;
//     }
// })

// console.log(addItem)
// console.log(cart)

// BRO YEA IDK, ITS IQWONTOKQWPMTQ // I ALREADY DID THIS BUT I DONITK NOWWHOWHOPQJLKT[;']

// So, I can easily just do this with function ngl, the problem is that idk what you want me to do, use array methods or just simple functions
// as long as I follow the instructions? (Add item (if exists → increase qty, else → add new)

// let userInput = prompt('Enter a product to add: ');

// function addItem(obj, target) {

//     for(let i = 0; i < obj.length; i++){
//         if(obj[i].name.toLowerCase() === target.toLowerCase()){
//             obj[i].qty++
//             console.log(obj[i])
//         } else {
//             console.log('Item not found, add it to cart')
//         }
//     }
// }

// addItem(cart, userInput)

// Well, I think im not using my brain rn

// let userInput = prompt('Enter a product to add: ');

// console.log(cart)

// function addItem(obj, target) {

//     for(let i = 0; i < obj.length; i++){
//         if(obj[i].name.toLowerCase() === target.toLowerCase()){
//             obj[i].qty++
//             return obj[i]
//         } else {
//             return obj[i]
//         }
//     }

//     return { ...item, 
//         name: target,
//         price: undefined,
//         qty: 1
//     }
// }

// console.log(cart);

// I GIVE UP WITH THIS TASK 1, YOURE SO ASS AT GIVING LECTURES, EXAMPLES, AND PROVIDING PROPER TASKS, GENUINELY WHAT DOES PART EVEN MEAN
// AND ALSO YOU DONT EVEN ELABORATE ON IMMUTABILITY, MUTABILITY, IF I SHOULD USE IMMUTABILITY OR MUTABILITY, OR WHATEVER FUNCTIONS OR ARRAY
// MOVING FORWARD, I WANT YOU TO GIVE ME A PROGRAM WHEREIN YOU PROVIDE OR LIKE GUIDE ME ON WHAT ARRAY TO DO, OR WHAT OTHER WAYS I CAN SOLVE THE PROBLEM
// SOME KIND OF LIKE A HINT (LIKE IF I SHOULD USE THIS METHOD OR THAT FUNCTION OR WHATEVER)
// THEN THE SECOND PROGRAM, OR ANOTHER PROGRAM THAT JUST LETS ME FIGURE EVERYTHING OUT AS LONG AS ITS WORKING,

// THEN HAVE THE SAME QUIZZES, DEBUGGING SESSION, EXERCISES (EXPLAIN THE EXERCISES), AND THEN LECTURES WHEREIN U GIVE MEANING OF EVERYTHING
// ITS IMPORTANT SHIT, AND THEN EXAMPLES THAT I NEED TO KNOW

// LIKE WHAT IS THE USE OF PART 2?????? JUST PUT IT IN THE LECTURE PART, PART 6 IS FINE, BUT THEN JUST MAKE SURE TO GIVE ME IDEAS
// FOR THE EAASY PROGRAM AND THEN HARD PROGRAM WHICH HAS ZEROOOO HINTS, JUST INSTRUCTIONS, LET ME FIGURE IT OUT


// Exercise 2

// let userInput = prompt('Remove an item from cart: ')

// const removeItem = cart.filter((item) => {
//     if(item.name.toLowerCase() !== userInput.toLowerCase()) {
//         return item;
//     }
// })

// console.log(removeItem)


// I kinda had a brain fog but at least I got it right now



// Exercise 3

// const newQty = cart.map((item) => {
//     if(item.name === 'Cat Toy'){
//         return {...item, qty: 5}
//     } else {
//         return item
//     }
// })

// console.log(newQty)



// Exercise 4 

// const getTotalPrice = cart.reduce((total, item) => {
//     return total += item.price * item.qty
// }, 0)

// console.log(getTotalPrice)


// Debugging

// const updatedCart = cart.map((item) => {
//   if (item.name === "Dog Food") {
//     return item.qty += 1;
//   }
//   return item;
// });

// Wow, the debug is actualyl challenging, i kinda like it bc idk whats the problem here

// I think there's no return inside the if statement

// Also, why cant you just item.qty++?
// Whjatever, at least im done witht ts

// PART 6

// 1. I think since it doesn't reference it to the original data, the original data remains unchanged, this is perfect when you're testing how
//    the object works or will work after applying the cojndition or changes

// 2. Since map transforms each objects to a new array and it also returns an array, meanwhile forEach() doesn't return any value, it just changes it

// 3. I should do immutable process first to make sure that it beahves the way I want it to behave by copying the data from the original,
//    then after seeing changes, considering all the possible issues like invalid inputs or whatever, apply it to the original
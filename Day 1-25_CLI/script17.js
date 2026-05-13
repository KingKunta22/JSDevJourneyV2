const prompt = require('prompt-sync')()

// Redo Program 1 from Day 16

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 }
// ];

// Add item (if exists → increase qty, else → add new)

// So first, we need to check if that item exists, since we're returning 1 value only, we can just use find

// let userInput = prompt('Add an item to cart: ')

// const findItem = cart.find(item => item.name.toLowerCase() === userInput.toLowerCase())

// then use map to increase qty or add a new product if it doesnt exist yet

// let newCart;

// const addItem = cart.map((item) => {
//     if(findItem) {
//         item.qty += 1
//     } else {
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }
// })

// Well, I kinda just copied your code but I swear I didnt look it up, just remembered it and how it worked, but next time u can just
// give me similar-difficulty with the program that I wasn't able to finish so that I can still understand and check if I really understood it

// console.log(addItem)

// Well, it still didn't work properly because it's considering everything as != userInput
// Let me try to fix it :D

// const addItem = cart.map((item) => {
//     if(findItem === undefined) {
//         console.log('Item not found')
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }

//     item.qty += 1
//     return item   
// })

// console.log(addItem)

// Damn, I still don't got it, let me try again, I think I got it this time:

// const addItem = cart.map((item) => {
//     if(item == findItem) {
//         console.log('Item found')
//     } else {
//         console.log('Item not found')
//     }
// })

// Okay, now I can do it without transforming all the other objects in the array, just the right one

// const addItem = cart.map((item) => {
//     if(item == findItem) {
//         item.qty += 1
//         return item
//     } else {
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]}
// })

// console.log(addItem)

// Yea, Im fucking confused, I still dont get how to not affect the other objects if it doesnt pass the condition
// Let me take a look how u did it :DDDDD

// Damn, I read it, I understood some of it but I don't know howww, like I don't think I can think that way when given without any hints
// So the correct one (clean solution you prompted) is an immutability one? Since it jst copies the original obeject right?

// I think I need a lot of clarification about the { ...obj } thingy
// So what I need to do is just copy or newCart = [{ ... cart, (insert new object)}] if it exists, and it not just
// ...newCart = [...cart, qty: item.qty += item]

// Idk bruh, to make sure I still recall it, I'm gonna finish everything else before this, so I'll be back here after finishing day 17, to make sure I
// fully understand the code and not just copy it from u







// Exercise 1 

// const updatePrice = cart.filter(item => {
//     if(item.name === 'Dog Food'){
//         item.price = 600
//     } 
//     return item
// })

// console.log(updatePrice)


// Exercise 2

// const removeExpensiveItems = cart.filter((item) => {
//     if(item.price < 400) {
//         return item
//     }
// })

// console.log(removeExpensiveItems)


// Exercise 3 

// const getTotalQty = cart.reduce((totalQty, item) => {
//     return totalQty += item.qty
// }, 0)

// console.log(getTotalQty)

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 }
// ];

// Program 1: Guided

// let userInput = prompt('Add a product: ')

// const findProduct = cart.find(item => item.name.toLowerCase() === userInput.toLowerCase())
// So this is working, moving on...

// I still don't know why we have to add a new cart, is there no way you can just append the new item, create its new properties then add to cart?
// But since we're doing mutable and immutable topic, I think that's the reason why
// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         item.qty += 1;
//         console.log('Item added successfully')
//         return item
//     })
// }
// console.log(cart)

// Wow, I need lots of practice and familiarity with array methods, because until now, I still don't know how this is wrong

// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         if(item.name.toLowerCase() === findProduct.name.toLowerCase()){
//             item.qty += item
//             return item
//         }
//         return item
//     })
// }
// console.log(cart)


// SEEEE, HOW AM I STILL CONFUSED BRO, DO I NEED A FUCKIGN ENTIRE WEEK OF PRACTICE TO DO THIS ARRAY METHODS SHIT

// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         if(item.name.toLowerCase() === findProduct.name.toLowerCase()){
//             item.qty += 1
//             return item
//         }
//         return item
//     })
// } else {
//     return newCart = [
//         {
//             ...cart,
//             name: findProduct,
//             price: 0,
//             qty: 1
//         }
//     ]
// }

// Okay, now this is kind of working, we now need to add a newCart
// I still don't get the idea of newCart
// console.log(cart)

// I am soooo fucking lost and confused, specifically the newCart part qwurybvhqinjorkmpl;,

// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         if(item.name.toLowerCase() === findProduct.name.toLowerCase()){
//             item.qty += 1
//             return item
//         }
//         return item
//     })
// } else {
//     return newCart = [
//             ...cart,
//         {
//             name: findProduct,
//             price: 0,
//             qty: 1
//         }
//     ]
// }

// BROOOOOOOOOOOOOOOOOOOOO

// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         if(item.name.toLowerCase() === findProduct.name.toLowerCase()){
//             item.qty += 1
//             return item
//         }
//         return item
//     })
// } else {
//     newCart = [
//             ...cart,
//         {
//             name: userInput,
//             price: 0,
//             qty: 1
//         }
//     ]
//     return newCart
// }

// console.log(cart)
// console.log(newCart)

// Okay, I might need to copy the original and set the newCart value for either true or false inside the condtion

// let newCart;

// if(findProduct) {
//     const addQty = cart.map((item) => {
//         if(item.name.toLowerCase() === findProduct.name.toLowerCase()){
//             item.qty += 1
//             return newCart = {...cart}
//         }
//          return newCart = [{...cart}]
//     })
// } else {
//     newCart = [
//             ...cart,
//         {
//             name: userInput,
//             price: 0,
//             qty: 1
//         }
//     ]
//     return newCart
// }

// console.log(cart)
// console.log(newCart)

// I AM SOOOOO FUCKING LOST MAN















// Program 2: Unguided

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];


// const removeItems = cart.filter(item => item.qty < 2)

// Wow, I mean this is 100000x easier than the Program 1 even if its guided, I am just, I guess, confused with the newCart, why we have to
// mutable or immutable it or whatever u call that, I am completely lost on that part

// const applyDiscount = cart.map(item => item.price -= 50)

// const getTotalPrice = cart.reduce((total, item) => {
    // total += item.qty * item.price
// }, 0)

// console.log(cart)

// // So, right now, the functions aren't being applied to the cart yet, do we need to call it or what

// console.log(removeItems, applyDiscount, getTotalPrice)
// console.log(cart)

// Oh okay, I might need to put everything in one function or if else or whatever

// let newCart2 = cart.filter((item) => {
//     if(item.qty >= 2){
//         // This will get all the items above 2 quantity, so we need to map those then here
//         // Then apply the discounts
//         newCart2 = cart.map((item) => {
//             item.price -= item.price - 50;
//             // Then get total price here
//             let total = cart.reduce((total, item) => {
//                 total += item.price * item.qty
//             }, 0)
//             console.log('Total Price: ' + total)
//             console.log(cart)
//             console.log(newCart2)
//             return newCart2
//         })        
//     }
// })

// Well, hopefully it works but I am doubtful, okay it didnt, as expected

let newCart2;

const doAll = cart.filter((item) => {
    if(item.qty >= 2){
        // This will get all the items above 2 quantity, so we need to map those then here
        // Then apply the discounts
        newCart2 = cart.map((item) => {
            item.price -= item.price - 50;
            // Then get total price here
            let total = cart.reduce((total, item) => {
                total += item.price * item.qty
            }, 0)
            console.log('Total Price: ' + total)
            return {...newCart2 = cart}
        })        
    }
})

console.log(doAll)

// YEP, I AM FUCKING LOST, I WANT YOU TO ANALYZE EVERYTHING AND TEACH ME
// I AM COMPLETELY LOST, UNEDUCATED, AND CONFUSED ABOUT THE {...} thing, the newCart, the immutability and mutability, and the returning shit


// DEBUGGING: 
const newCart = cart.map(item => {
  if (item.price > 300) {
    return { ...cart, price: item.price - 50 };
  }
  return item;
});


// REFLECTION

// 1. Idk because separating it makes me understand how the program works?
// 2. I am good with some of array methods, just immutability, mutability, returning shit, and coimbining everything and referencing, and copyhing, and quwbntojqkmp
// 3. NOTHING
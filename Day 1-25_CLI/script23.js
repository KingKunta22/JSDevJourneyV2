// // DAY 22 CONTINUATION (FIXES AND QUIZZES)

// // Q1: Because cart isn't being called or reassigned like cart = handleRequest..., it hsould be like that :DDD
// // Q2: payload: {item: 'Dog Food', qty: 25} SOMETHING LIKE THAT....
// // Q3: I STILLL HAVEN'T GRASPED AND UNDERSTOOD THIS TO PERFECTION TO THE POINT WHERE I KNOW THE EXACT DIRECT ANSWER BUT IT'S B.
// //     (BECAUSE I USUALLY USE USERINPUTS INSIDE OR OUTSIDE FUNCTIONS HEHEHE)

// const prompt = require('prompt-sync')()

// // Okay, I will rewrite the handleCheckout thing on this part, and then I jkust realized, it's a completely separate
// // program to the cartEngine, I thought I'm working with both inside the handleCheckout, so let me try again and see if I understand it now
// // I also wanna know why you did a completely new total on the handleCheckout when the total is already handled inside the getTotal function?
// // Why did you have to rewrite everything inside it?
// // And baed fropm what I understood, handleCheckout is simply just a similar working version to cartEngine... right?

// // Program 2: Handle Checkout (Fix) (Unguided)

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// function applyDiscount(cart, targetDiscount) {
//     cart = cart.map(item => {
//         let discount = item.price * (targetDiscount / 100)
//         return {...item, price: item.price - discount}
//     })
//     return cart
// }

// function getTotal(cart, cash) {
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)

//     return total
// }

// function handleCheckout(cart, request){
//     let discount = request.payload.discount
//     let cash = request.payload.cash

//     const discountedCart = applyDiscount(cart, discount)
//     let total = getTotal(discountedCart, cash)

//     if(cash < total) {
//         return {
//             error: 'Insufficient Balance'
//         }
//     }

//     let change = cash - total;

//     return {
//         item: discountedCart,
//         cash: cash,
//         total: total,
//         change: change
//     }
// }

// let results = handleCheckout(cart, { 
//     action: 'checkout',
//     // Why do I have to add this action? It isn't part of the argument and it isn't called as well unlike engine 
//     // where there's cart, action, and payload argument inside the cartEngine, so please enlighten me
//     payload: {
//         discount: 10,
//         cash: 5000
//     }
// })

// console.log(results)

// // I mean I got it right but I had to like watch your complete and fixed version and try to understand how it works for like 5 times xd, so basically
// // I kinda copied it but whatever






// Day 23 - MULTI-ACTION SYSTEM WOOOOOOOOOOOOOOOOOOOOOOOOOOH

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// Program 1 (Guided)

// Alright, I actually just rested for another 2 days and boy do I forget everything, but let me try...


// function handleRequest(cart, requests) {
//   for(let i = 0; i < requests.length; i++){
//     let request = requests[i]

//     // Bro what does this do, I don't even have a cartEngine function... do I need to make one
//     cart = cartEngine(cart, request.action, request.payload)
//     // OMG IM SO FUCKING LOST, I MIGHT NEED A REFRESHER IQNTOQWRPL;

//   }

//   return cart

// }

// let userRequests = [
//   { action: "add", payload: "Dog Food" },
//   { action: "remove", payload: "Cat Toy" },
//   { action: "update", payload: { name: "Dog Food", qty: 5 } }
// ]

// console.log(handleRequest(cart, userRequests))

// Oh okay, so you gave me an idea to create add, remove, and update functions inside the cart engine... so let me try it

// Oh okay, no I remember, I think I need to create 3 more functions above this (cart engine function): add, remove, and update, 
// then call each function inside the cart
// engine based on the action right??????????????????

// Okay, let me also see if I can still do the big 3 (add, remove, update) T-T
// function add(cart, targetItem) {
//   let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//   if(exists){
//     cart = cart.map((item) => {
//       if(item.name.toLowerCase() === targetItem.toLowerCase()){
//         return {...item, qty: item.qty + 1}
//       }
//       return item
//     })
//     return cart
//   } else {
//     cart = [...cart,
//       {
//         name: targetItem,
//         price: 0,
//         qty: 1
//       }
//     ]
//     return cart
//   }
// }

// Okay, let me try the add:
// console.log(add(cart, 'Dog cat'))
// Okay, it's working first try YEYYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function remove(cart, targetItem) {
//   let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//   if(exists) {
//      cart = cart.map((item) => {
//       if(item.name.toLowerCase() === targetItem.toLowerCase()){
//         return {...item, qty: item.qty - 1}
//       }
//       // I know this is different and might be wrong, but let mee try...
//       // return item.qty != 0
//       // Oh, this returns a boolean value, let me try to fix it...
//       // if(item.qty != 0) {
//       //   return item
//       // }
//       // That didn't do its job so let me fix it...
//       return item
//      })
//      // Hopefully, this works....
//      let updatedCart = cart.filter(item => item.qty != 0)
//      return updatedCart
//   } else {
//     return {error: 'Item not found'}
//   }
// }
// GREAT, IT NOW WORKS HEHEHEHE (2ND-3RD ATTEMPT T-T)
// console.log(remove(cart, 'Dog Food'))

// function update(cart, targetItem, targetQty){
//   if(isNaN(targetQty)){
//     return {error: 'Invalid input'}
//   }
//   let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//   if(exists){
//     cart = cart.map((item) => {
//       if(item.name.toLowerCase() === targetItem.toLowerCase()){
//         return {...item, qty: targetQty}
//       }
//       return item
//     })
//     return cart
//   } else {
//     return {error: 'Item does not exist in the cart'}
//   }
// }

//Alright, let me try, im a bit confident i can do this first try...
// console.log(update(cart, 'Cat Toy', 50))
// Well, the
  // if(isNaN(targetQty)){
  //   return {error: 'Invalid input'}
  // }
// Doesn't really do its job and idk why but whatever...

// Alrght, so I finished 3 functions and crud, I should be able to do the cartEngine now, I believe the first part is the data layer,
// Second layer is I forgot, let me check: OH RIGHT, DATA LAYER, ENGINE, THEN HANDLEREQUEST OKAY.....

// Okay, engine layer, first try, let me see...
// function cartEngine(cart, action, payload) {
//   if(action === 'add'){
//     return add(cart, payload)
//   } else if(action === 'remove'){
//     return remove(cart, payload)
//   } else if(action === 'update'){
//     return update(cart, payload.name, payload.qty)
//   } else {
//     return {error: 'Invalid inputs'}
//   }
// }

// let results = cartEngine(cart, 'add', 'Dog Food')
// let results = cartEngine(cart, 'remove', 'Cat Toy')
// Okay, both works properly, now the part that I think is a bit tricky is the udpate...
// Okay, I'm trying it out for the update and it's wrong, but i think it's the syntax that's wrong here..
// let results = cartEngine(cart, 'update', {name: 'Cat Toy', qty: 35})
// // Okay, now its working, cause I looked it up XDDDDD
// console.log(results)

// Alright, engine layer finalized and working, time to do the hardest challenge or the boss one


// let userRequests = [
//   { action: "add", payload: "Dog Food" },
//   { action: "remove", payload: "Cat Toy" },
//   { action: "update", payload: { name: "Dog Food", qty: 5 } }
// ]

// function handleRequest(cart, requests) {
//   for(let i = 0; i < requests.length; i++){
//     let request = requests[i]
//     cart = cartEngine(cart, request.action, request.payload)
//   }
//   return cart
// }

// console.log(handleRequest(cart, userRequests))
// OKAY, I CAN TELL THAT IT IS WORKING (I MEAN I KEPT LOOKING UP YOUR CODES AND GUIDELINESS SOOO)
// OKAY SO EVERYTHING IS KINDA STEP BY STEP BUT IT HAPPENS IN BACKEND SO I ONYL GET 1 RESULT WHICH IS THE RESULT AFTER ALL THE STEPS
// HERES THE RESULTS:

// PS C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest> node ./script23.js
// [
//   { name: 'Dog Food', price: 500, qty: 5 },
//   { name: 'Dog Leash', price: 300, qty: 3 },
//   { name: 'Bird Food', price: 100, qty: 10 }
// ]

// So that's owkringggg...... wowowowowoowowowowoww



// Program 2 (Unguided) 
// I kinda want to rewrite everything so that I can just read it above and to also memorize or yk, familiarize everything better and knowh ow it worsk..

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// DATA LAYER (ADD & CHECKOUT)
function add(cart, targetItem){
  let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())
  if(exists) {
    cart = cart.map((item) => {
      if(item.name.toLowerCase() === targetItem.toLowerCase()){
        return {...item, qty: item.qty + 1}
      }
      return item
    })
    return cart
  } else {
    cart = [...cart,
      {
        name: targetItem,
        price: 0,
        qty: 1
      }
    ]
    return cart
  }
}

// I forgot what I'm supposed to do with this function, so let me look it up again
function checkout(cart, targetCash, targetDiscount){
  let updatedCart = cart.map((item) => {
    item.price = item.price - (item.price * (targetDiscount / 100))
    // Had to look up the formula cus i was missing the multiply part, and I had to do a bit of fixes to get this right xdd
    return item
  })

  let total = updatedCart.reduce((sum, item) => {
    return sum + item.qty * item.price
  }, 0)
  
  if(targetCash < total) {
    return {error: 'Insufficient Funds'}
  }

  let change = targetCash - total 

  return {
    items: updatedCart,
    cash: targetCash,
    total: total,
    change: change
  }
}

// ACTUALLY, THE HANDLECHECKOUT IS INCORRECT BECAUSE IT SHOULD GET AN ARGUMENT AS PAYLOAD, SOOOOO WHATEVER, JS TEACH ME


// function handleSystem(cart, requests){
//   if(action === 'checkout'){
//     return checkout(cart, payload.cash, payload.discount)
//   } else if(action === 'add'){
//     return add(cart, payload)
//   }
// }

// let userRequests = [
//   { action: "add", payload: "Dog Food" },
//   { action: "checkout", payload: { cash: 5000, discount: 10 } }
// ]

// OKAY IM REALLY DOUBTFUL ABOUT THE ABOVE BECAUSE THERES NO LOOP... LET ME FIX IT AND TRY AGAIN...

// function handleSystem(cart, requests){
//   // if(action === 'checkout'){
//   //   return checkout(cart, payload.cash, payload.discount)
//   // } else if(action === 'add'){
//   //   return add(cart, payload)
//   // }

//   // So instead of that, I should use loop instead because requests == array
//   for(let i = 0; i < requests.length; i++){
//     let request = requests[i]

//     cart = cartEngine(cart, request.action, request.payload)
//   }
//   return cart
// }

// let userRequests = [
//   { action: "add", payload: "Dog Food" },
//   { action: "checkout", payload: { cash: 5000, discount: 10 } }
// ]

// OH WAIT, I DONT HAVE A CART ENGINE.... WHATEVER BRO

function cartEngine(cart, action, payload){
  if(action === 'checkout'){
    return checkout(cart, payload.cash, payload.discount)
  } else if(action === 'add'){
    return add(cart, payload)
  } else {
    return {error:'Invalid Input'}
  }
}

function handleSystem(cart, requests){
  for(let i = 0; i < requests.length; i++){
    let request = requests[i]

    cart = cartEngine(cart, request.action, request.payload)
  }
  return cart
}

let userRequests = [
  { action: "add", payload: "Dog Food" },
  { action: "checkout", payload: { cash: 5000, discount: 10 } }
]

// LET ME TRY IT EVEN IF IM REALLY HOPELESS RN
console.log(handleSystem(cart, userRequests))

// OKAY, I HAD TO DO A FEW TWEAKKS (2) AND NOW IT WORKED, IDK IF THIS IS RIGHT THO............
















// Exercise 1
// The qty of A will still be 10 because its the last update... and it kinda overrides whatever the value it had on the first few actions

// Exercise 2
// To basically update the cart everytime it loops and calls each requests? so that it gets updated from first index of request to the last and then it
// updates everytime outside the loop so basically: each loop updates the cart everytime :DDDDDDDDDDDDDD

// Debug:

// function handleRequest(cart, requests) {
//     for (let i = 0; i < requests.length; i++) {
//         let req = requests[i]
//         cartEngine(cart, req.action, req.payload)
//     }
//     return cart
// }

// // Well, the issue is this:
// cartEngine(cart, req.action, req.payload)
// // It didn't reassign the cart so... it should be like this:
// cart = cartEngine(cart, req.action, req.payload)

// And that actually took me awhile bruh XDDD
// OH YOURE ACTUALLY RIGHT, I TRIED CONSOLE.LOG(CART) FROM THE CART ENGINE STUFF AND IT WORKED, AMAZING

// Day 22

// YO DAMN, I THINK IM NOT READY FOR THIS SHIT. (NGL I LIKE IT BECAUSE THIS IS NEW AND I WANT TO DO NEW THINGS LIKE THIS API HANDLEREQUEST STUFF)
// SO THANKS AND LETS CONITNUE HEHEUTHEWUHUEWHTOQE IJKQMMP

// DAY 22
const prompt = require('prompt-sync')()

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// Program 1: Mini Backend System (Guided)
// Okay, wow, this'll take time and I also need to build the 3 layers, not just the handle request, so let me start:

// DATA LAYER
// functions for the data layers: addItem(), removeItem(), updateItem(), getTotal().... Hopefully, I still remember them correctly...
// Also, will I need a user input or no.....?

// // let userInput = prompt('Enter an item to add: ')
// function addItem(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()) {
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//         return cart
//     }

//     return cart = [...cart, {
//         name: targetItem,
//         price: 0,
//         qty: 1
//         }
//     ]
// }

// Okay, first try let me see...
// console.log(addItem(cart, userInput))
// YEYYY, WORKING FIRST TIME EVEN IF I DIDN'T EXPECT IT TO WORK....: DDDDD

// let userInput = prompt('Enter an item to remove: ')
// function removeItem(cart, targetItem) {
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists) {
//         let updatedCart = cart.filter(item => {
//             if(item.name.toLowerCase() !== targetItem.toLowerCase()){
//                 return item
//             }
//         })
//         return updatedCart
//     }

//     return {
//         error: 'Item does not exist'
//     }
// }

// Okay, first try let me see if the second function works...
// console.log(removeItem(cart, userInput))
// Oh wow, it's working but I forgot, I just need to decrease qty, so let me redo it

// // let userInput = prompt('Enter an item to remove: ')
// function removeItem(cart, targetItem) {
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists) {
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()) {
//                 return {...item, qty: item.qty - 1}
//             }
//             return item
//         })

//         let updatedCart = cart.filter(item => {
//             return item.qty > 0;
//         })

//         return updatedCart
//     }

//     return {
//         error: 'Item does not exist'
//     }
// }

// // console.log(removeItem(cart, userInput))
// // WOAH WOAH WOAH, I DID A ONE-LINE TWEAK AND THEN IT WORKED WITH JUST PURE BRAIN WOWOWOWOW :DDDDDD
// // For context, I added cart = cart.map instead of just cart.map...

// // let userInput = prompt('Enter item name to update quantity: ')
// // let userQty = Number(prompt('Enter quantity: '))
// function updateItem(cart, targetItem, targetQty) {
//     // I think we need to check if it exists again...
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         let updatedCart = cart.map(item => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()) {
//                 return {...item,
//                     qty: targetQty
//                 }
//             } 
//             return item
//         })
//         return updatedCart
//     }

//     return {
//         error: 'Item does not exist'
//     }
// }

// // console.log(updateItem(cart, userInput, userQty))
// // YEYYYYYY WORKING FIRST TRY WOWOWOWOWOWOOWOWWOOWW

// function getTotal(cart) {
//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty * item.price
//     }, 0)
//     return total
// }

// console.log(getTotal(cart))
// Workingg again, well not first try because I used sum = item.qty * item.price instead of sum + ... but i figured it out after the second try hehe



// ENGINE

// function cartEngine(cart, action, payload) {
//     if(action === 'add') {
//         return addItem(cart, targetItem)
//     } else if(action === 'remove') {
//         return removeItem(cart, targetItem)
//     } else if(action === 'update') {
//         return updateItem(cart, targetItem, targetQty)
//     } else if(action === 'total') {
//         return getTotal(cart)
//     } else {
//         return {
//             error: 'Invalid input'
//         }
//     }
// }

// WELL, HOPEFULLY THIS WORKS... I AM DOUBTFUL ABOUT THE ARGUMENTS INSIDE THOSE FUNCTIONS AND RELUCTANT WHETHER I SHOULD USE THE TARGETITEM, TARGET...
// ... ARGUMENTS OF THE USERITEM, USERQTY INPUTS.

// cart = cartEngine(cart, 'add', 'Dog Fart')
// cart = cartEngine(cart, 'remove', 'Cat Toy')
// cart = cartEngine(cart, 'update', 'Bird Food') // I THINK I USED SOMETHING DIFFERENT HERE...
// cart = cartEngine(cart) // I don't need a payload or action here because it just returns something... Hopefully, I'm right XD

// console.log(cart)
// OKAY, TARGETITEM IS NOT DEFINED, THERE'S SOMETHING WRONG WITH THE ARGUMENTS HERE...
// I ACTUALLY CHECKED THE PREVIOUS ONE WE JUST DID AND THEN I REALIZED AND UNDERSTOOD IT NOW...

// I should only be using the cartEngine's arguments since all of those functions are inside the cartEngine function...
// function cartEngine(cart, action, payload) {
//     if(action === 'add') {
//         return addItem(cart, payload)
//     } else if(action === 'remove') {
//         return removeItem(cart, payload)
//     } else if(action === 'update') {
//         return updateItem(cart, payload.item, payload.qty)
//     } else if(action === 'total') {
//         return getTotal(cart)
//     } else {
//         return {
//             error: 'Invalid input'
//         }
//     }
// }

// cart = cartEngine(cart, 'add', 'Dog Fart')
// cart = cartEngine(cart, 'remove', 'Cat Toy')
// cart = cartEngine(cart, 'update', {name: 'Bird Food', qty: 25}) // I THINK I USED SOMETHING DIFFERENT HERE...
// cart = cartEngine(cart) // I don't need a payload or action here because it just returns something... Hopefully, I'm right XD

// // Alright, let's seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// console.log(cart)
// WELL, IM GETTING A WEIRD ERROR:
    // C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script22.js:105
    //     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())
    //                                                                           ^

    // TypeError: Cannot read properties of undefined (reading 'toLowerCase')
    //     at C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script22.js:105:75
    //     at Array.find (<anonymous>)
    //     at updateItem (C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script22.js:105:23)
    //     at cartEngine (C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script22.js:176:16)
    //     at Object.<anonymous> (C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script22.js:188:8)
    //     at Module._compile (node:internal/modules/cjs/loader:1803:14)
    //     at Object..js (node:internal/modules/cjs/loader:1934:10)
    //     at Module.load (node:internal/modules/cjs/loader:1524:32)
    //     at Module._load (node:internal/modules/cjs/loader:1326:12)
    //     at TracingChannel.traceSync (node:diagnostics_channel:328:14)

    // Node.js v25.5.0

// I THINK THERE'S SOMETHING WRONG WITH THE UPDATE ITEM OR WHATEVER... LET ME TRY TO CHECK WHICH IS CAUING THIS ISSUE...
// I BELIEVE, THE SYNTAX AND EVERYTHING IS CORRECT, THERES SOMETHING WRONG WITHT HE INPUTS I THINK...

// cart = cartEngine(cart, 'add', 'Dog Fart')
// cart = cartEngine(cart, 'remove', 'Cat Toy')
// cart = cartEngine(cart, 'update', {name: 'Bird Food', qty: 25})
// cart = cartEngine(cart, 'total')

// console.log(cart)
// OH AND I JUST REALIZED, I FORGOT TO PUT A CASH ARGUMENT ONJ THE TOTAL, I HAVE TO CHECK FOR CHANGEAS WELL ,LOOOOOL

// LET ME PUT EVERYTHING BELOW:

// Program 1: Mini Backend System (Guided)

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// DATA LAYER:

function addItem(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map((item) => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()) {
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return cart
    }

    return cart = [...cart, {
        name: targetItem,
        price: 0,
        qty: 1
        }
    ]
}

function removeItem(cart, targetItem) {
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists) {
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()) {
                return {...item, qty: item.qty - 1}
            }
            return item
        })

        let updatedCart = cart.filter(item => {
            return item.qty > 0;
        })

        return updatedCart
    }

    return {
        error: 'Item does not exist'
    }
}

function updateItem(cart, targetItem, targetQty) {
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()) {
                return {...item,
                    qty: targetQty
                }
            } 
            return item
        })
        return updatedCart
    }

    return {
        error: 'Item does not exist'
    }
}

// function getTotal(cart, cash) {
//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty * item.price
//     }, 0)

//     if(cash < total) {
//         return {error: 'Insufficient Balance'}
//     }

//     let change = cash - total

//     return {
//         total: total,
//         cash: cash,
//         change: change
//     }
// }


// ENGINE

function cartEngine(cart, action, payload) {
    if(action === 'add') {
        return addItem(cart, payload)
    } else if(action === 'remove') {
        return removeItem(cart, payload)
    } else if(action === 'update') {
        return updateItem(cart, payload.item, payload.qty)
    } else if(action === 'total') {
        return getTotal(cart, payload)
    }
    return cart
}

// cart = cartEngine(cart, 'add', 'Dog Food')
// cart = cartEngine(cart, 'remove', 'Cat Toy')
// cart = cartEngine(cart, 'update', {name: 'Bird Food', qty: 25})
// cart = cartEngine(cart, 'total', 5000)

// console.log(cart)

// IDK MAN, I ALREADY COMPARED EVERYTHING FROM THE PREVIOUS ONE AND EVERYTHING'S THE SAME..., I'LL JUST MOVE ON WITH THAT...

// REQUEST HANDLER (NEW)
// I don't know what you expect me to put in here...

function handleRequest(cart, request){
    return cartEngine(cart, request.action, request.payload)
}

handleRequest(cart, {action: 'add', payload: 'Dog Food'})
handleRequest(cart, {action: 'remove', payload: 'Cat Toy'})
handleRequest(cart, {action: 'updated', payload: {name: 'Bird Food', qty: 25}})
handleRequest(cart, {action: 'total', payload: 5000})

// console.log(handleRequest(cart, {action: 'total', payload: 5000}))

// Okay, how is it suddenly working without any problems... I kinda get it but not entirely.... We're putting all functions inside a big function
// (which is the cartEngine), and then put another bigger function (handleRequest), idk the point but I want you to explain it to me as well
// Wherein i can undertstand where we're goinmg, why this is necessary, and the flow of how everything works currently...


// Program 2 (Unguided)

let discountedCart;
function applyDiscount(cart, targetDiscount) {
    discountedCart = cart.map(item => {
        let discount = item.price * (targetDiscount / 100)

        return {...item, price: item.price - discount}
    })

    return discountedCart
}

// applyDiscount(cart, 10)
// THat worked on first try but I had to look up the formula on how to get discount again XDDDD

function getTotal(cart, cash) {
    let total = cart.reduce((sum, item) => {
        return sum + item.qty * item.price
    }, 0)

    if(cash < total) {
        return {error: 'Insufficient Balance'}
    }

    let change = cash - total

    return {
        total: total,
        cash: cash,
        change: change
    }
}
// console.log(getTotal(discountedCart, 5000))
// YEYYY, ITS WORKING ALL I HAD TO DO WAS CA;LL THE APPLY DISCOUNT FUNCTION :DDDDDDDD

// Now, for the handle checkout.,.......................................

// IM CONFUSED, SHOULD I CREATE A CARTENGINE AGAIN???????????
function handleCheckout(cart){
    // Should I ask the user for their discount and cash? I think so...
    let userCash = Number(prompt('Input your cash: '))
    let userDiscount = Number(prompt('Enter the applied discount: '))

    // OHHHH I SEE, I JUST REALIZED, THIS IS THE PART WHERE I NEED TO APPLY THE DISCOUNTEDCART....
    let updatedCart = applyDiscount(cart, userDiscount);
    // console.log(updatedCart)
    getTotal(updatedCart, userCash)
    // console.log(getTotal(updatedCart, userCash))
}

// Actually, whats the purpose of this request....
// handleCheckout(cart)

// It's just working properly without the request tho. And I am not sure that this is enough because I need to create a new function or idk...

// OH MAN, I AM CONFUSED, EVERYTHING IS JUST WRAPPED AND THEN WRAPPED AGAIN BY A BIGGER FUNMCTION, ITS JUST CONFUSING
// let me try, ill jsut add this new action to the existing cartEngine
// Nah, I'll create a new one:

function cartEngine2(cart, action, payload){
    if(action === 'checkout'){
        return handleCheckout(cart)
    }
}

// Exercise 1:
// handleRequest(cart, {action: 'add', payload: 'Dog Food'})

// Exercise 2:
// Since payload basically means the argument it's taking, that should be the payload.name which is the 'Dog Food' and then its quantity as well 
// which is 10










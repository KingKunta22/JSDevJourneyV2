// DAY 24 (AFTER 10-DAY BREAK BRUH)

// Exercise 1

// function isValidQty(qty){
//     if(isNaN(qty)) {
//         return {error: "Not a number"}
//     } else {
//         return qty > 0
//     }
// }

// console.log(isValidQty('a'))

// // Okay, this is kinda working, and you're right, im confused rn because why is 25aaa return true? How would I check if it's completely a number
// // and not something like 24aaaa or '25', Oh and actually '25' should still be accepted right because javascript auto converts the type


// // Exercise 2

// // Okay, I am confused, do I need to copy everything from the previous file? I think so...
// // OR IDK, I DONT WANNA COPY EVERYTHING FROM THE PREVIOUS FILE AND PASTE, I WANNNA RESTART AND IDK WHAT UPDATE FUNCTION YOURE TALKING ABOUT, WHATEVER BRO

// function update(cart, targetItem, targetQty){
//   if(isNaN(targetQty)){
//     return {error: 'Invalid input'}
//   }
//   // I'll juist put this here after copying the entire function from my previous file because everythings just gonna take too much time to read
//   // I'd rather start over from scratch
//   if(targetQty < 0){
//     return {error: 'Invalid quantity'}
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


// Program 1: Response System

// BROTHER, I DONT EVEN REMEMBER THE FUNCTIONS NEEDED TO DO THE CART, I NEED TO START OVER THE CART STUFF AND ENGINE STUFF, WHY THE FUCK ARE YOU 
// GETTING ME CONTINUE THE STUFFS THAT I FORGOT, ID PROLLY FEEL LOST, OR IS THAT THE BEST OPTION HERE? TRY TO READ EVERYTHING AGAIN FROM MY PREVIOUS
// FILE AND THEN CONTINUE INSTEAD OF STARTING OVER AGAIN? ALL THE FUNCTIONS?????


// OKAY GREAT, EXACTLY WHAT I WANTED, GREAT JOB FOR UNDERSTANDING...


// DAY 24 (REBUILD SYSTEM, CONTINUE WHERE I LEFT OFF)

// Exercise 1:

// function isValidQty(qty){
//     if(isNaN(qty) || typeof qty !== 'number') {
//         return {error: "Not a number"}
//     } else {
//         return qty > 0
//     }
// }
// console.log(isValidQty(265))

// Okay, great, it's working nowww


// SYSTEM REBUILDING

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];


// Data Functions (DATA LAYER I BELIEVE)

function add(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        let updatedCart = cart.map((item) => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return updatedCart
    } else {
        cart = [...cart, {
            name: targetItem,
            qty: 1,
            price: 0
        }]
        return cart
    }
}

// console.log(add(cart, 'Dog Food'))
// Wowwww, made everything without looking back at what I did, made everything from my brain, worked immediately without errors B)

// function remove(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase()) 

//     if(exists){
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === item.name.toLowerCase()){
//                 return {...item, qty: item.qty - 1}
//             }
//             return item
//         })
//         let updatedCart = cart.filter(item => item.qty > 0)
//         return updatedCart
//     } else {
//         return {error: 'Item not found'}
//     }
// }

// console.log(remove(cart, 'Dog Food'))

// Okay, something's wromg, let me fix it...

function remove(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase()) 

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return item
        })
        updatedCart = updatedCart.filter(item => item.qty > 0)
        return updatedCart
    } else {
        return {error: 'Item not found'}
    }
}

// console.log(remove(cart, 'Cat Toy'))
// Okay, fixed it lmao

function update(cart, targetItem, targetQty){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())
    
    if(isNaN(targetQty) || typeof targetQty !== 'number' || targetQty < 0) {
        return {error: 'Invalid Quantity'}
    }

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()) {
                return {...item, qty: targetQty}
            }
            return item
        })
        return updatedCart
    } else {
        return {error: 'Item not found'}
    }
}

// console.log(update(cart, 'Dog Food', 25))
// YEY, WORKING FIRST TRY, NO DEBUGGING NEEDEDDDD B)


// ENGINE LAYER

// function cartEngine(cart, action, payload){
//     if(action === 'add'){
//         return add(cart, payload)
//     } else if(action === 'remove'){
//         return remove(cart, payload)
//     } else if(action === 'update'){
//         return update(cart, payload.name, payload.qty)
//     } else {
//         return {error: 'Action not specified'}
//     }
// }

// AFAI CAN REMEMBER, THATS HOW IT LOOKS LIKE XDDDD


// HANDLER (LOOP / CONTROLLER)

// function handleRequest(cart, requests){

// }

// WOAH, OKAY, I JUST REALIZED I HAD TO CHANGE THE CART ENGINE AND THE HANDLER... LET ME REDO IT BNASED FROM YOUR CODE...

// // (NEW) ENGINE LAYER

// function cartEngine(cart, action, payload){
//     if(action === 'add'){
//         // On this part, why not same with the remove one? Adding something like this:
//         // let result = add(cart, payload)
//         // if(result.error) return { status: 'error', message: result.error}
//         return {status: 'success', data: add(cart, payload)}
//     } 

//     if(action === 'remove'){
//         let result = remove(cart, payload)
//         if(result.error) return {status: 'error', message: result.error}
//         return {status: 'success', data: result}
//     }

//     if(action === 'update'){
//         let result = update(cart, payload.name, payload.qty)
//         if(result.error) return {status: 'error', message: result.error}
//         return {status: 'success', data: result}
//     }

//     return {status: 'error', message: 'Invalid Action'}
// }

// // Now, I kinda understand how this works now, it just simplifies everything and adds a new feature where it shows an error
// // The next one (handle request) is where I dont udnerstand as much...

// // HANDLER

// function handleRequest(cart, requests){
//     for(let req of requests){ // Question, is this the same as foreach? like using foreach(items as item??)????

//         let result = cartEngine(cart, req.action, req.payload)

//         if(result.status === 'success'){
//             cart = result.data
//         } else {
//             console.log('Error:', result.message)
//         }
//     } 
//     return cart
// }

// YEP, I AM LOST AND CONFUSED ON THAT PART...

// Let me try it though...

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 }
// ]

// let requests = [
//   { action: "add", payload: "Dog Food" },
//   { action: "update", payload: { name: "Dog Food", qty: 5 } },
//   { action: "remove", payload: "Dog Food" }
// ]

// console.log(handleRequest(cart, requests))
// WOW, ITS WORKING, BUT I NEED SOME KIND OF CLARIFICATION ABOUT WHAT HAPPENED SPECIALLY ON THE HANDLER REQUEST PART, BUT WHATEVER,
// THE MORE I DO IT , THE MORE I SHOULD UNDERSTAND IT....


// Okay, so by total and clear action, you mean create functions for both actios right? bnecause actions = functions

// Task 1: Create a 'Clear' function/action

// So, I assume this just deletes everything in the cart without the option to revert the changes
function clear(cart){
    let updatedCart = cart.filter(item => {
        // Hmm, you gave me an idea on how to do this efficiently but I forgot, I'll just make sure the condition always return false
        if(false){
            return
        }
    })
    return updatedCart
}

// console.log(clear(cart))
// Well, that didn't work.... why is the first obj returning true?
// Ohh, it was working, I just had this uncommented -> console.log(handleRequest(cart, requests)) XDDDD

// Okay, great, working on first try


// Task 2: Total

// Since you added 2500 as data, I assume that's the user's cash
function total(cart, targetCash){
    if(!Number.isFinite(targetCash) || typeof targetCash !== 'number'){
        return {error: 'Invalid cash input'}
    }

    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty
    }, 0)

    if(targetCash < total) {
        return {error: 'Insufficient balance'}
    }

    let change = targetCash - total

    return {
        item: cart,
        cash: targetCash,
        total: total,
        change: change
    }
}

// console.log(total(cart, 5000))
// Okay wowowowowow, perfect working on first tryyyy, but I have some error data on my function total so I have to put it onto the engine cart
// I'll also just put everything below so that the it follows the proper layering (Data Layer > Engine Layer > Handler)


// ENGINE LAYER
function cartEngine(cart, action, payload){
    if(action === 'add'){
        return {status: 'success', data: add(cart, payload)}
    } 

    if(action === 'remove'){
        let result = remove(cart, payload)
        if(result.error) return {status: 'error', message: result.error}
        return {status: 'success', data: result}
    }

    if(action === 'update'){
        let result = update(cart, payload.name, payload.qty)
        if(result.error) return {status: 'error', message: result.error}
        return {status: 'success', data: result}
    }
    if(action === 'clear'){
        // let result = clear(cart)
        // if(result.error)
            // Oh shi-, I think I don't need an error handler because there's no error inside my fclear function...
        return {status: 'success', data: clear(cart)}
    }
    if(action === 'total'){
        let results = total(cart, payload)
        if(results.error) return {status: 'error', message: results.error}
        return {status: 'success', data: results}
    }

    return {status: 'error', message: 'Invalid Action'}
}


// HANDLER
function handleRequest(cart, requests){
    for(let req of requests){ // Question, is this the same as foreach? like using foreach(items as item??)????

        let result = cartEngine(cart, req.action, req.payload)

        if(result.status === 'success'){
            
            if(Array.isArray(result.data)) { // Wtf does this array.isarray do? Does it check if the results.data is array?
                cart = result.data
            } else {
                console.log(result.data)
            }
            
        } else {
            console.log('Error:', result.message)
        }
    } 
    return cart
}


// CHECK IF WORKING:
let cart = [
  { name: "Dog Food", price: 500, qty: 2 }
]

let requests = [
  { action: "add", payload: "Dog Food" },
  { action: "update", payload: { name: "Dog Food", qty: 5 } },
  { action: "remove", payload: "Dog Food" },
//   { action: "clear"}
  // Okay, the clear is working, I believe, but I don't want to add it to the requests array
//   { action: "total", payload: 5000}
  // So this is not working on first try, I believe because of this line:
    //   if(isNaN(targetCash) || typeof targetCash !== 'number'){
    //     return {error: 'Invalid cash input'}
    // }
    // Al;right, so I looked it up online, asked for the best error handler and should only accept numbers, it seems like it doesnt recommend the isNan
    // -function and recommends this instead !Number.isFinite(targetCash), it mentioned that thats the golden standard upon checking if an input is cash
    // -value, so i'll js follow it
    // It also gave me a 'pro tip' to convert targetCash to Number so that it accepts this "2500" and 2500 at the same time, I kinda dont want that though
    // I want it to only accept 2500, but in like realworld shit, do they do that? Anyways, lmsee if its working
  { action: "total", payload: 5000}
  // BRUH, THIS STILL WASN'T OWORKING UNTIL I FOUND THE BUG > payload.cash, LOOOLLL, I SHOULDVE JUST USED PAYLOAD BECAUSE IT ONLY ACCEPTS CART AND 
  // ANOTHER ARGUMENT, CONTRARY TO UPDATE function WHICH ACCEPTS 3 INPUTS OR ARGUMENTS
]

console.log(handleRequest(cart, requests))

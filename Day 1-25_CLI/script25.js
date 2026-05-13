// DAY 25  -  CLI PROGRAM (FINAL BOSS IG)

const prompt = require('prompt-sync')()

// I am gonna follow your rules and will look for help if I get stuck on this stuff after a day XD

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// CLI CART SYSTEM - DATA LAYER

// View Cart
function view(cart){
    console.log(cart)
}

// Add Item
function add(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    // if(!Number.isFinite(targetPrice) || typeof targetPrice !== 'number') {
    //     console.log(targetPrice)
    //     console.log(typeof targetPrice)
    //     return { error: 'Invalid price'}
    // }
    // What's wrong with this? This just returns the targetPrice to undefined....
    // Oh nevermind, nothing';s wrong with that but whatever...

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return cart
    } else {
        let targetPrice = Number(prompt('Input price: '))
        let updatedCart = [...cart, {
            name: targetItem,
            price: targetPrice,
            qty: 1
        }]
        return updatedCart
    }
}

// Remove Item
function remove(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return item
        })
        let updatedCart = cart.filter(item => item.qty > 0)
        return updatedCart
    } else {
        return {error: 'Item does not exist'}
    }
}

// Update Item
function update(cart, targetItem, targetQty){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: targetQty}
            }
            return item
        })
        return updatedCart
    } else {
        return {error: 'Item does not exist'}
    }
}

// Show Total
function total(cart){
    let total = cart.reduce((sum, item) => {
        return sum += item.price * item.qty
    }, 0)
    
    return total
}

// Clear Cart
function clear(cart){
    // cart = []
    // return cart // BRUH HOW IS THIS NOT EVEN WORKING....
    return []
}

// // Exit
// function exit(){ // What do u even do with this XDDDD, nvm ill figure it out later
    
// }


// // CLI CART SYSTEM - ENGINE
// function cartEngine(cart, action, payload){

//     if(action === 'add'){
//         return {status: 'success', data: add(cart, payload)}
//     }

//     if(action === 'remove'){
//         let result = remove(cart, payload)
//         if(result.error) return {status: 'error', message: error.message}
//         return {status: 'success'}
//     }

//     if(action === 'update'){
//         let result = update(cart, payload.name, payload.qty)
//         if(result.error) return {status: 'error', message: error.message}
//         return {status: 'success'}
//     }

//     if(action === 'total'){
//         return {status: 'success', data: total(cart)}
//     }

//     if(action === 'clear'){
//         return {status: 'success', data: clear(cart)}
//     }

//     // if(action === 'exit'){

//     // }

//     return {error: 'Invalid action'}
// }


// // CLI CART SYSTEM - HANDLER

// // function handleRequest() 
// // Okay, so do I need this still? I don't think soo....

// let running = true // Well, new stuff learned, this looks smart instead of js doing while(true)

// while(running){
//     console.log("\n=== CLI SYSTEM ===")
//     console.log("1. View Cart")
//     console.log("2. Add Item")
//     console.log("3. Remove Item")
//     console.log("4. Update Item")
//     console.log("5. Clear Cart")
//     console.log("6. Get Total")
//     console.log("7. Exit")
//     let userInput = prompt("Choose: ")

//     if(userInput === '1'){
//         // Okay, what do I even put hereeee, nvm, i had to look up your shit to get some ideas t-t
//         console.log(cart)
//     }

//     if(userInput === '2'){
//         let item = prompt('Add Item: ')
//         cart = cartEngine(cart, 'add', item)
//     }

//     if(userInput === '3'){
//         let item = prompt('Remove item: ')
//         cart = cartEngine(cart, 'remove', item)
//     }

//     if(userInput === '4'){
//         let item = prompt('Update an item: ')
//         let qty = Number(prompt('Enter quantity: '))
//         cart = cartEngine(cart, 'update', item, qty)
//     }

//     if(userInput === '5'){
//         // console.log(total(cart)) // Oh, I should use the cartEngine
//         console.log(cartEngine(cart, 'total')) //I hope that's right
//     }

//     if(userInput === '6'){
//         console.log(cartEngine(cart, 'clear'))
//     }
    
//     if(userInput === '7'){
//         running = false
//         console.log('Goodbye!')
//     }
// }

// Well, there are a lot of bugs
// 1. Why is it showing success only when I view the cart after adding an item? Shouldnt it show the success or  result after adding the item?
// 2. Adding a second item shows an error: TypeError: cart.find is not a function
//                                        at add (C:\Users\Leonard\Documents\PERSONAL\Codes\JSTest\script25.js:18:23)
// 3. Get total even after adding an item is undefined (should be because I didn't ask the user to add a price...)

// Okay, I see where most of these problems are coming from:

// RIGHT NOW, IF I ADD AN ITEM IT TURNS CART INTO > { status: 'success', data: [ { name: 'Dog food', qty: 1, price: 0 } ] }
// Instead of just { name: 'Dog food', qty: 1, price: 0 }
// I believe this is the reason why it's not reading the cart as an object with just name, qty, and price
// Because I tried jhust doing:
        // return add(cart, payload)
// On the cart engine and it worked fine...

// And also, what's the point of adding result on the cartEngine? I can just call the data functions and then just use view cart if it successfully
// worked right??? Let me fix most of it by copying and pasting the thing I did above but this time with the fixes (so u can see the progress)


// // CLI CART SYSTEM - ENGINE
// function cartEngine(cart, action, payload){

//     if(action === 'add'){
//         return add(cart, payload)
//     }

//     if(action === 'remove'){
//         return remove(cart, payload)
//     }

//     if(action === 'update'){
//         return update(cart, payload.name, payload.qty)
//     }

//     if(action === 'total'){
//         return total(cart)
//     }

//     if(action === 'clear'){
//         return clear(cart)
//     }

//     // if(action === 'exit'){

//     // }

//     return {error: 'Invalid action'}
// }


// // CLI CART SYSTEM - HANDLER

// let running = true

// while(running){
//     console.log("\n=== CLI SYSTEM ===")
//     console.log("1. View Cart")
//     console.log("2. Add Item")
//     console.log("3. Remove Item")
//     console.log("4. Update Item")
//     console.log("5. Get Total")
//     console.log("6. Clear Cart")
//     console.log("7. Exit")
//     let userInput = prompt("Choose: ")

//     if(userInput === '1'){
//         console.log(cart)
//     }

//     if(userInput === '2'){
//         let item = prompt('Add Item: ')
//         // let price = Number(prompt('Input Price: ')) // I think this is misplaced, I need to put it on the data function
//         cart = cartEngine(cart, 'add', item)
//     }

//     if(userInput === '3'){
//         let item = prompt('Remove item: ')
//         cart = cartEngine(cart, 'remove', item)
//     }

//     if(userInput === '4'){
//         let name = prompt('Update an item: ')
//         let qty = Number(prompt('Enter quantity: '))
//         // cart = cartEngine(cart, 'update', payload: {item: name, qty: qty}) // Okay, I am kinda confused here and I am quite certain this is one of the problem
//         // cart = cartEngine(cart, 'update', name, qty) 
//         // console.log(cartEngine(cart, 'update', {item: item, qty: qty}))
//         // cart = cartEngine(cart, 'update', {item: item, qty: qty}) // BRUHHHH, THIS HSOUDL BE CORRECT, CUS THIS IS HOW IT SHOULD BE BASED FROM THE PREV STUFF
//         cart = cartEngine(cart, 'update', {name, qty})
//         // Hol up, that's working, how did that took me like 30 minutes to figure outttttt, I actually looked up your code XDDD
//     }

//     if(userInput === '5'){
//         console.log(cartEngine(cart, 'total'))
//     }

//     if(userInput === '6'){
//         // console.log(cartEngine(cart, 'clear')) I actually checked your previous stuff again, the code you added, and I didn;t know how I used console
//         // instead of just returning cart = cartEngine here, am I that stupid wowwww, my bad for looking up your code instead of figuring it out by myself
//         // This took me and tried it for like 10mins thoughX DDD
//         cart = cartEngine(cart, 'clear')
//     }
    
//     if(userInput === '7'){
//         running = false
//         console.log('Goodbye!')
//     }
// }

// Okay, new errors, the add, remove, total, and exit functions are perfectly working (AFAIK...)
// However, the problems are in the two functioms: clear and update
// When I update an item, it doesnt work and returns an error that doesn't even give me the reason why its not working
// And when I clear, it just returns [], but when I view cart, it shows the cart that nothing changed... and not even cleared


// Actually, i tried looking up your code and the update issue is fixed, not the claer is the only thing thats not working fully

// Okay both of those are fixed after looking up your code, i found new ones:

// 1. Remove item replaces the cart to the error object instead of showing it as an error and keeping the cart... It happens if I try to add
// --- an item that does not exist...
                // Choose: 1
                // { error: 'Item does not exist' }

// 2. Same with update item, instead of just showing the error, it replaces the cart as an error instead of just showing it

// I think both of those have something to do with the cart system, not the cart engine... It should stop from doing cart = cartEngine if an error occurs...

// So let me try to rewrite the cart system handler...


// // CLI CART SYSTEM - HANDLER

// let running = true

// while(running){
//     console.log("\n=== CLI SYSTEM ===")
//     console.log("1. View Cart")
//     console.log("2. Add Item")
//     console.log("3. Remove Item")
//     console.log("4. Update Item")
//     console.log("5. Get Total")
//     console.log("6. Clear Cart")
//     console.log("7. Exit")
//     let userInput = prompt("Choose: ")

//     if(userInput === '1'){
//         console.log(cart)
//     }

//     if(userInput === '2'){
//         let item = prompt('Add Item: ')
//         cart = cartEngine(cart, 'add', item)
//     }

//     if(userInput === '3'){
//         let item = prompt('Remove item: ')
//         // cartEngine(cart, 'remove', item)
//         // if(error) {console.log('This has errorsss')}
//         // console.log('Success!') // Let me see if this debug stuff works XDDDD -> IT DIDNT XDDD
//         // Okay, so this is all wrong, I shouldn't be doing this here, I should be doiung this on the cart engine...
//         cart = cartEngine(cart, 'remove', item)
//     }

//     if(userInput === '4'){
//         let name = prompt('Update an item: ')
//         let qty = Number(prompt('Enter quantity: '))
//         cart = cartEngine(cart, 'update', {name, qty})
//     }

//     if(userInput === '5'){
//         console.log(cartEngine(cart, 'total'))
//     }

//     if(userInput === '6'){
//         cart = cartEngine(cart, 'clear')
//     }
    
//     if(userInput === '7'){
//         running = false
//         console.log('Goodbye!')
//     }
// }


// CLI CART SYSTEM - ENGINE
function cartEngine(cart, action, payload){

    if(action === 'add'){
        return add(cart, payload)
    }

    if(action === 'remove'){
        let results = remove(cart, payload)
        if(results.error) {console.log(results.error); return cart}
        return remove(cart, payload)
    }

    if(action === 'update'){
        let results = update(cart, payload.name, payload.qty)
        if(results.error) {console.log(results.error); return cart}
        return update(cart, payload.name, payload.qty)
    }

    if(action === 'total'){
        return total(cart)
    }

    if(action === 'clear'){
        return clear(cart)
    }

    // if(action === 'exit'){

    // }

    return {error: 'Invalid action'}
}


// CLI CART SYSTEM - HANDLER

let running = true

while(running){
    console.log("\n=== CLI SYSTEM ===")
    console.log("1. View Cart")
    console.log("2. Add Item")
    console.log("3. Remove Item")
    console.log("4. Update Item")
    console.log("5. Get Total")
    console.log("6. Clear Cart")
    console.log("7. Exit")
    let userInput = prompt("Choose: ")

    if(userInput === '1'){
        console.log(cart)
    }

    if(userInput === '2'){
        let item = prompt('Add Item: ')
        cart = cartEngine(cart, 'add', item)
    }

    if(userInput === '3'){
        let item = prompt('Remove item: ')
        cart = cartEngine(cart, 'remove', item)
    }

    if(userInput === '4'){
        let name = prompt('Update an item: ')
        let qty = Number(prompt('Enter quantity: '))
        cart = cartEngine(cart, 'update', {name, qty})
    }

    if(userInput === '5'){
        console.log(cartEngine(cart, 'total'))
    }

    if(userInput === '6'){
        cart = cartEngine(cart, 'clear')
    }
    
    if(userInput === '7'){
        running = false
        console.log('Goodbye!')
    }
}


// OKAY, WELL, I KINDA FIXED IT, ITS NOT THE BEST, BUT ITS WORKING, I BELIEVE, WAIT LET ME TRY EVERYTHIGN AGAIN....
// OKAY, EVERYTHINGS WORKING, TIME TO DIEEEIQWUBTNROIKQMJPRTQWLRQWR IOEZIEZZEZEZEZEZE WOWOWOOWOWWO=
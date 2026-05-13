// OKAY IM RESTARTING EVERYTHING BECAUSE IM ON THE 3RD CHATGPT PROFESSOR

// THIS IS STILL DAY 19 I GUESS, JSUT NEED TO POLISH SOMETHING

const prompt = require('prompt-sync')()

// let cart = [
//   { name: "A", price: 10, qty: 1 },
//   { name: "B", price: 20, qty: 2 }
// ];


// Exercise 1

// cart = cart.filter(item => item.name !== 'A')

// console.log(cart)


// Okay, that was easy, but is that correct? cart = cart.filter? or do I need to create a new variable like const removeA = cart.filter...???


// Exercise 2

// cart = cart.map((item) => {
//     if(item.name === 'B'){
//         return {...item, qty: item.qty + 1}
//     }
//     return item
// })

// console.log(cart)

// Good, working as well as expect :DDDD


// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];


// Program 1 (Guided)

// let userChoice = prompt('Enter an item to add: ')

// function addToCart(cart, productName){
//     let exists = cart.find(item => item.name.toLowerCase() === productName.toLowerCase())

//     if(exists){
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === productName.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//     } else {
//         cart = [...cart, 
//             {
//                 name: productName,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }
//     console.log("Here's your updated cart: ")
//     console.log(cart)
//     return cart
// }

// addToCart(cart, userChoice)

// OH WOW, I GOT IT EASILY THIS TIME, I THINK THE GAME CHANGING LESSON WAS JUST DOING cart = cart.map... :DDDDDD so I dont need to do const newCart bruh


// Program 2 (Unguided)

// let userReq = prompt('Remove a product: ')

// function removeFromCart(cart, productName) {

//     // I don't have to do this, but just for safety checks and making sure that that product exists, I'll do it xd
//     let exists = cart.find(item => item.name.toLowerCase() === productName.toLowerCase())
//     if(!exists){
//         console.log("Unfortunately, that product doesn't exist")
//     } else {
//         cart = cart.filter(item => item.name.toLowerCase() !== productName.toLowerCase())
//     }

//     console.log("Here's your updated cart: ")
//     console.log(cart)
//     return cart
// }

// removeFromCart(cart, userReq)

// Perfect, it works properly without having to debug more than 2 times woowowowowow lDDDDDDD

// function getTotal(cart){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty * item.price
//     }, 0)
//     console.log("The cart's total is: ")
//     console.log(total)
// }

// getTotal(cart)

// Yey, that was so easy but, I DONT LIKE THAT IM NOT HAVING A HARD TIME XDDD, DONT MAKE IT TOO HARD THOUGH ,JUST KEEP IT AVERAGE
// WHATEVER, I TRUST YOU, DO YOUR THING, IM LEARNING SO IDGAF and im not ocmplaining

// QUIZZZZZ

// 1. Map returns an array, if there's a condition, it returns a transformed arrayyyyyy
// 2. Well, I think it'll just return a boolean
// 3. Filter if you want to get SOME items on the array, find if you want ONE item in the array B)
// 4. reduce returns one number based o nteh condition, actually not just a number, anything the cojndition passes


// DEBUGGING

// let cart = [
//   { name: "A", price: 10, qty: 1 }
// ];

// cart = cart.map(item => {
//   if (item.name === "A") {
//     return {...item, qty = item.qty + 2}
//   }
//   return item
// });





// MEDIUM LEVEL - EXTRA PROGRAM - CAUSE I ASKED FOR A HARDER ONE (I PROLLY IWLL REGRET IT AFTER 5 MINS)

// let userReq = prompt('Change product quantity: ')
// let userQty = Number(prompt('Enter quantity: '))

// function updateQty(cart, productName, newQty){
//     let exists = cart.find(item => item.name.toLowerCase() === productName.toLowerCase())

//     if(exists){
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === productName.toLowerCase()){
//                 return {...item, qty: newQty}
//             }
//             return item
//         }) 
//         console.log("Update Successful! Here's your updated cart: ")
//         console.log(cart)
//         return cart
//     } else {
//         console.log("Unfortunately, we can't find this product")
//     }
// }

// updateQty(cart, userReq, userQty)



// EXTRA EXERCISE (CAUSE I DEMANDED BRUHUHUH)

// const cart = [
//   { name: "A", price: 10, qty: 1 },
//   { name: "B", price: 20, qty: 2 }
// ];

// let total = cart.reduce((sum, item) => {
//     if(item.qty > 1) {
//         return sum += item.qty * item.price
//     }
// }, 0)

// console.log(total)

// Oh wow, I wonder why it doesn't work

// const cart = [
//   { name: "A", price: 10, qty: 1 },
//   { name: "B", price: 20, qty: 2 }
// ];

// let total = cart.reduce((sum, item) => {
//     if(item.qty > 1) {
//         return sum += item.qty * item.price
//     }
//     // return item, oh this doesn't work, let me try another one
//     return sum
// }, 0)

// console.log(total)


// MINI QUIZ:

// 1. That's wrong because it only returns an item which is === 'A', I don't think the user wants that, the perfect method would be filter or find

// 2. All items that has > 1 quantity property, disregards items that are < 1

// 3. If you don't want to have a new array or if you don't want every item in the array or everything in the array :DD

// 4. I think map, because it transforms the items inside the object/array and then returns that same array/obj with the condition, together with all the
// other items inside the array


// SHOULD I DO DAY 20 OR DO I NEED ANOTHER REFRESHER OR WHAT???


/// okayyyy, day 19 final bossss

// I ACTUALLY FORGOT TO READ THE RUEOLS THINKING IM JDOING EVERYTHING FINE AND THE USUAL UPDATE QTY XDD, SO THIS TIME ILL FLOOLOWT HE RULES

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// let userCash = Number(prompt('Enter your current cash: '))

// function checkOut(cart, cash){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty * item.price
//     }, 0)

//     if(cash < total) {
//         return {
//             error: 'Not enough cash', // Wow, I didn't even know you can do this :D
//             total: total,
//             cash: cash
//         }
//     }
//     let change = cash - total
//     return {
//         total: total,
//         cash: cash,
//         change: change
//     }
// }

// checkOut(cart, userCash)

// It's working hehehehe








///// OKAY ILL JUST PUT DAY 20 HERE TO NOT BE CONFUSED ABOUT THE SCRIPT NAMES....

// DAY 20





// Exercise 1

function addTax(total) {
    return total = total * 0.12
}

// This should be it righttt, yes i think its correct


// Exercise 2

function formatCurrency(value) {
    return '₱' + value + '.00'
}

// Is that it? I am acctuallyy not sure, let me try it

// console.log(formatCurrency(200))

// It looks like it's working, I might be wrong, but you mentioned string formatting which meanss, thats it.....




// Program 1 (Guided)

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// // Step 1: Add Item
// let userAdd = prompt('Add a new item: ')
// function addItem(cart, itemName){
//     let exists = cart.find(item => item.name.toLowerCase() === itemName.toLowerCase())

//     if(exists) {
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === itemName.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//     } else {
//         cart = {...cart,
//             name: itemName,
//             price: 0,
//             qty: 1
//         }
//     }
//     console.log('Your new and updated cart is:')
//     console.log(cart)
//     return cart
// }

// addItem(cart, userAdd)

// Wait, this one's working, I just don't know how to add a new item on the carttttttt or what the syntax or whatever was on this else statement:

        // cart = {...cart,
        //     name: itemName,
        //     price: 0,
        //     qty: 1
        // }

// // Step 1: Add Item
// let userAdd = prompt('Add a new item: ')
// function addItem(cart, itemName){
//     let exists = cart.find(item => item.name.toLowerCase() === itemName.toLowerCase())

//     if(exists) {
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === itemName.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//     } else {
//         cart = [...cart, {
//             name: itemName,
//             price: 0,
//             qty: 1
//             }
//         ]
//     }
//     return cart
// }

// addItem(cart, userAdd)

// OHHH, I GOT IT NOW, I DONT NEED TO ADD ...item, just that, (I LOOOKED UP THE ADD ITEM FUNCTION I CREATED A WHILE AGO)


// // Step 2: Remove Item
// let userRemove = prompt('Remove an item: ')
// function removeItem(cart, itemName) {
//     cart = cart.filter(item => item.name.toLowerCase() !== itemName.toLowerCase())
//     return cart
// }

// removeItem(cart, userRemove)

// THIS IS WORKING (I WIL NOT BE ADDING THE CATCH BUG IF INPUT ISN'T FOUND IN THE CART BECAUSE I STILL HAVE ANOTHER PROGRAM TO DO HEHEHE)

// Step 3: Get Total
// function getTotal(cart){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)
//     return total
// }

// I WILL NOT BE TESTING BECAUSE IM CONFIDENT THAT THIS IS WORKING

// Step 4: Checkout System
// let userCash = Number(prompt('Please input your cash: '))
// function checkout(cart, cash){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)

//     if(cash < total) {
//         return {
//             error: 'Balance is insufficient',
//             cash: cash,
//             total: total
//         }
//     }
    
//     let change = cash - total

//     return {
//         cash: cash,
//         total: total,
//         change: change
//     }
// }

// checkout(cart, userCash)


// I HOPE THAT WORKS BECAUSE IT IS BASED OFF OF MEMORY, AND IU DIDNT EVEN CHECK THE ONES YOU DID, I JUST TRIED TO REMEMBER IT AND THEN USE SOME COMMON SENSE



// Program 2 (Unguided)

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// Now, this one's gonna give me a hard time XDDD

// let userUpdate = prompt('Enter an item to update: ')
// let userQty = Number(prompt('Enter the new quantity: '))
// function updateItem(cart, itemName, newQty) {
//     let exists = cart.find(item => item.name.toLowerCase() === itemName.toLowerCase())

//     if(!exists) {
//         return { error: 'Unfortunately, this item does not exist' }
//     }

//     cart = cart.map((item) => {
//         if(item.name.toLowerCase() === itemName.toLowerCase()){
//             return {...item, 
//                 name: itemName,
//                 price: 0,
//                 qty: newQty
//             }
//         }
//         return item
//     })
//     return cart
// }

// updateItem(cart, userUpdate, userQty)

// I assume this is to remove everything on the cart???????
// function clearCart(cart) {
//     cart = cart.filter((item) => {
//         return item.name === 'False value'
//     })
//     console.log(cart)
// }

// clearCart(cart)

// I mean this returns an array with nothing so basically 'cart is cleared'
// But if you want to just remove all quantity inside the array, then:

// function clearCart(cart){
//     cart = cart.map((item) => {
//         return {...item, qty: 0}
//     })
//     console.log(cart)
// }

// clearCart(cart)

let userCash = Number(prompt('Input your cash: '))

function cartSummary(cart, cash) {
    // Uhm, what do you want me to do with this XDDD, im js gonna do whatever
    let total = cart.reduce((sum, item) => {
        return sum + item.qty * item.price
    }, 0)

    if(cash < total) {
        return {
            error: 'Insufficient Funds',
            cash: cash,
            total: total,
        }
    }

    let change = cash - total;

    let totalItems = cart.length

    return {
        totalItems: totalItems,
        cash: cash,
        total: total,
        change: change
    }
}

cartSummary(cart, userCash)
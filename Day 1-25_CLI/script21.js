const prompt = require('prompt-sync')()

// DAYYYY 21

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// // Exercise 1
// function calculateItemTotal(item){
//     console.log(item.price * item.qty)
//     return item.price * item.qty
// }

// // Exercise 2
// function isCartEmpty(cart) {
//     if(cart.length === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// // Well, I think both works properly

// // Program 1 (Guided)

// function getTotal(cart){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)
//     return total
// }

// let userCash = Number(prompt('Enter your cash: '))
// function processCheckout(cart, cash){
//     let total = getTotal(cart)

//     if(cash < total){
//         return {
//             error: 'Insufficient Balance',
//             cash: cash,
//             total: total,
//             // Question, how does this return {} line work? How does the function even know what error:, cash:, and total:, 
//             // stands for, and where do they even output???
//         }
//     }

//     let change = cash - total

//     return {
//         cash: cash,
//         total: total,
//         change: change
//     }
//     // Surely, that returns an object right? Is that what u meant? Or do you mean, create a new object for the checkout with these items and then
//     // jsut return the variable?
// }

// let result = processCheckout(cart, userCash);
// console.log(result);

// Okay, it's working, and it returned an object, wow
// What do you call it when I put everything inside a let result or a variable? then call the variable?


// Program 2 (Unguided)

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// function applyDiscount(cart, percent) {
//     cart = cart.map((item) => {
//         return item.price = item.price - percent
//     })
// }
// Well, this is incorrect because we're doing percentages, not literal numbers, let me try again

// function applyDiscount(cart, percent) {
//     let discount
//     cart = cart.map((item) => {
//         // I just know that we need like 0. + percent here or maybe 1. + percent to get the complete discount of the price calculated, but how 
//         // would I do that xd
//         discount = percent
//         return item.price = item.price - percent
//     })
// }

// Oh okay, I looked up the formula (NOT THE EXACT CODE), then understood ittt
// AGAIN:

// let percentDiscount = Number(prompt('Apply discount percentage (%): '))
// function applyDiscount(cart, percent) {
//     cart = cart.map((item) => {
//         let discount = item.price * (percent / 100) // This should return a decimal righttt.. rightt???
//         return {...item, price: item.price - discount } // UHMM...... I HOPE THIS WORKS XD
//     })
//     return cart
// }

// Okay, this is working, but do I need to multiply the quantity to the price to get the exact discount or no need? Just for each item?
// Well, in this case, I believe you mean per item, so I'm just gonna leave it like that

// Oh, and actually, this is correct, I don't need to multiply the qty to the price because we're getting the per item, not the total, and 
// we should't apply discounts after the purchase total right? It should be per item...

// On this function, do I need to use the applyDiscount function or no? I think yes
// Actually, I think the original cart gets changed with the correct applied discount because we already called it, no?
// OH WOW, I JUST CHECKED IT AND IT DIDN'T CHANGE THE ORIGINAL STATE.......
// function generateReceipt(cart, cash) {
//     cart = applyDiscount(cart, percentDiscount) // Well, I hope this is right XD

    
// }

// generateReceipt(cart)

// OH, I THINK I NEED  TO DO GET TOTAL FUNCTION (EVEN IF IT WASN'T INDICATED) SO THAT I CAN JUST USE IT INSIDE THE GNEERATE RECEIPT AND HAVE
// DIFF FUNCTION FOR IT

// function getTotal(cart) {
//     cart = applyDiscount(cart, percentDiscount)

//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty * item.price
//     }, 0)
//     return total
// }

// function generateReceipt(cart){
//     let total = getTotal(cart)

//     console.log(total)
//     console.log(cart)
// }

// generateReceipt(cart)

// THIS GENERATERECEIPT ISN'T USING THE CART WITH APPLIED DISCOUNT EVEN IF I CCALLED THE GETTOTAL FUNCTION WITH THE APPLIED DISCOUNT
// WELL, I THINK I NEED TO ADD APPLY DISCOUNT FUNCTION AGAIN ON THE GENERATE RECEIPT FUNCTION TO GET THE UPDATED CART... SINCE THE
// GETTOTAL ONLY RETURNS A NUMBER...

// let userCash = Number(prompt('Input your cash here: '))
// function generateReceipt(cart, cash){
//     let total = getTotal(cart)
//     cart = applyDiscount(cart, percentDiscount)

//     if(total > cash) {
//         return {
//             error: 'Insufficient Balance',
//         }
//     }

//     let change = cash - total
    
//     return {
//         ...cart,
//         cash: cash,
//         total: total,
//         change: change
//     }
//     // Hopefully, this works, but i think not becasue im cominbing the cart to those properites, shoudl I js use [...cart]?
// }
// console.log(generateReceipt(cart, userCash))

// // Okay, it's working, but if I want to not return the entire cart, and just reutrn all the item names, it's qty, and total, how would I do that? 
// // To format it properly and then remove the indexes becsifde them? Use a loop?

// // Anyway, what does cart engine do and what does it even mean?
// function cartEngine
// // YEA, I LOOKED IT UP, AND BASED ON WHAT I UNDERSTOOD, PUT EVERYTRHING (EVVERY FUNCTION) AND PUT IT ON CARTENGINE FUNCTION TO RETURN DATA...
// // but what does those arguments even mean?!!!!! I AM SOOOO LOST AND CONFUSED, AND EVEN IF I TAKE LIEK 2 HOURS FIGURING THIS OUT, I'LL END UP USING AI
// // AND THEN STILL NOT UNDERSTAND SHIT....



// ALRIGHT, NOW LET ME FIX THE SCRIPT21 BEFORE DOING SCIRPT22 HEHE, ILL JUST REWRITE EVERYTHING SO THAT I CAN CHECK IF I REALLY APPLY THE LESSONS

// OKAY, SO FOR THE CART ENGINE DO I NEED TO FOLLOW THE ADD, REMOVE, AND UPDATE ITEMS ISIDE IT OR.... USE THE FUNCTIONS OU ASKED ME TO DO
// WHICH IS THE GETTOTAL, APPLYDSCOUNT, AND GET SUMMARY>????????????????????????????

// functions: applyDiscount, generateReceipt, cartEngine (All should be fixed)


// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// function viewCart(cart) {
//     return {...cart}
// }

// console.log(viewCart(cart))

// let discountPercentage =  Number(prompt('Enter a discount percentage (%): '))
// function applyDiscount(cart, percentage) {
//     return cart.map((item) => {
//         let discount = item.price * (percentage / 100)
//         return {...item, price: item.price - discount}
//     })
// }

// I JUST CAME BACK AFTER A BREAK LIKE 8 HR BREAK, HOPEFULLY THAT'S CORRECT T-T

// let userCash = Number(prompt('Input your cash: '))
// function generateReceipt(cart, cash){
//     let discountedCart = applyDiscount(cart, discountPercentage)
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)

//     if(cash < total){
//         return {
//             error: 'Insufficient Balance',
//             cash: cash,
//             total: total
//         }
//     }

//     let change = cash - total

//     return {
//         items: discountedCart,
//         total: total,
//         cash: cash,
//         change: change
//     }
        
// }

// Alright, everything seems to be working, time for the final boss...


// function cartEngine(cart, action, payload)

// OH WOW, I AM FUCKING CONMFUSED WITHOUT EVEN DOING ANYTHING...

// let userAction = prompt('Enter your choice: ')
// function cartEngine(cart, action, payload){

// }

// THIS DOESNT MAKE EVERYTHING EASY AT ALL, IT MAKES EVERYTHING COMPLICATED LOOOOOOOL :DDDDDDDDDDDD
// I CANT EVEN START BECAUSE I HAVE ZEROOOO IDEA ABOUT IT AND IT MAKES ZERO FUCKING SENSE

//LIKE WHAT THE FUCK IS ENGINE, PAYLOAD, ACTION?
// AFAIK, ACTION CAN BE THE USER'S CHOICE (WHICH I DID ABOVE) AND THEN IF THE USER WANTS TO ADD, IT'LL CALL THAT FUNCTION
// ANYWAYS, ILL TRY

// console.log('Enter 1 to view original cart | Enter 2 to view discounted cart | Enter 3 to generate receipt')
// let userAction = prompt('Enter your choice: ')
// // Whatrr even does this function do, I HAVE ZERO IDEA....
// function cartEngine(cart, action, payload){
//     if(action === "1"){
//         return viewCart(cart)
//     } else if(action === "2") {
//         // BRUH IDK WHY PAYLOAD INSTEAD OF THE PERCENTAGE....
//         return applyDiscount(cart, payload)
//     } else if(action === "3") {
//         // I DONT EVEN KNOW HOW THISLL WORK WITH PAYLOAD AND NOT THE RIGHT ARGUMENT
//         return generateReceipt(cart, payload)
//     } else {
//         console.log('Please input valid action')
//     }
// }

// // cart = cartEngine(cart, "1", cart)
// // cart = cartEngine(cart, "2", discountPercentage)
// // cart = cartEngine(cart, "3", userCash)

// // OH WAIT, WHERE DO I PUT THE USERACTION, IT SHOULD REPLACE THE ACTION RIGHT...

// cart = cartEngine(cart, userAction, cart)
// cart = cartEngine(cart, userAction, discountPercentage)
// cart = cartEngine(cart, userAction, userCash)

// IAM STILL AS CONFUSED, IDKKKKKKKKKKKKKKKKKKKKK AT LEAST I TRIED THO XD

// HOW IS THIS RELATED TO APIS XDDDDDDD ITS JUST CONFUSIN EVERYTHING. BUT I MEAN YOURE THE PROFESSOR SO I CANT COMPLAIN

// I JUST REALIZED, I NEED TO CREATE ADD, REMOVE, AND UPDATE............ OMG


// OKAY I JS SLEPT THEN RIGHT NOW'S MORNING, LET'S GO DO THIS SHIT:

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// // Add Item
// let userItem = prompt('Enter an item to add: ')
// function addItem(cart, newItem){
//   cart = cart.map((item) => {
//     if(newItem.toLowerCase() === item.name.toLowerCase()) {
//       return {...item, qty: item.qty + 1}
//     }
//     return item
//   })
//   console.log(cart)
//   return cart
// }

// addItem(cart, userItem)
// console.log(cart)
// NGL, I had a few tweaks on this add item part, I still haven't fully mastered it quite yet 
// but it's fine, as long as I got this right, then should be good

// Yea, I think I got it this time;

// // Add Item
// let userItem = prompt('Enter an item to add: ')
// function addItem(cart, newItem){
//   let exists = cart.find(item => item.name.toLowerCase() === newItem.toLowerCase())

//   if(exists){
//       cart = cart.map((item) => {
//       if(newItem.toLowerCase() === item.name.toLowerCase()) {
//         return {...item, qty: item.qty + 1}
//       }
//       return item
//     })
//   } else {
//     // Well, this is wrong... How do I add a new item without doing map here......
//     // cart = {...item,
//     //   name: newItem,
//     //   price: 0,
//     //   qty: 1
//     // }

//     // I think this one is?
//     return {...cart,
//         name: newItem,
//         price: 0,
//         qty: 1
//     }
//   }
  
//   console.log(cart)
//   return cart
// }

// addItem(cart, userItem)
// console.log(cart)
// Well, now I'm confused because, why is it that even if I did cart = cart.map()... when I called it after the addItem, it doesn;t change the 
// original one? like the dog food is still 2 even when I added another dog food by the time I called addItem??????????????


// IM SO FUCKING LOST, LET ME START OVER:

// // Add Item
// let userItem = prompt('Enter an item to add: ')
// function addItem(cart, newItem){
//   let exists = cart.find(item => item.name.toLowerCase() === newItem.toLowerCase())

//   if(exists){
//       cart = cart.map((item) => {
//       if(newItem.toLowerCase() === item.name.toLowerCase()) {
//         return {...item, qty: item.qty + 1}
//       }
//       return item
//     })
//     return cart
//   }

//   // I JUST KNOW THIS IS WRONG...
//   cart = [...cart, {
//       name: userItem,
//       price: 0,
//       qty: 1
//       }
//   ]

//   return cart
// }

// console.log(addItem(cart, userItem))

/// OKAY, AFAIK, EVERYTHING'S WRKING HERE, BUT WHY IS IT THAT THE ORIGINAL CART STAYS UNCHANGED?????????????????????
// IT MIGHT BE BECAUSE I USED [...] THE SPREAD OPERATOR BUTTT HOWWWW WOULD I CHANGE THE ORIGINAL, LET ME TRYY.....


// // Add Item
// let userItem = prompt('Enter an item to add: ')
// function addItem(cart, newItem){
//   let exists = cart.find(item => item.name.toLowerCase() === newItem.toLowerCase())

//   if(exists){
//       cart = cart.map((item) => {
//       if(newItem.toLowerCase() === item.name.toLowerCase()) {
//         item.qty += 1
//         return item
//       }
//       return item
//     })
//     return cart
//   }

//   // I JUST KNOW THIS IS WRONG...
//   cart = cart, {
//       name: userItem,
//       price: 0,
//       qty: 1
//       }

//   return cart
// }

// console.log(addItem(cart, userItem))
// console.log(cart)

// OKAY, NOW IT CHANGED IF ITEM EXISTS, BUT HOW TO ADD AN ITEM WHILST CHANGING THE ORIGINAL?

// OKAY, I LOOKED IT UP, AND I REMEMBERED YOU SAID THAT WE SHOULD NEVER DO MUTABLE OPTION, JUST ALWAYS IMMUTABILITY AND
// IF IN ANY CASE I HAVE TO CHAMGE OR UPDATE THE ORIGINAL ONE, I SHOULD REASSIGN IT. PLEASE CONFIRM IF IM CORRECT

// I'LL JUST REVERT IT BACK THEN...


// addItem(cart, userItem)
// console.log(cart)
// Well, now I'm confused because, why is it that even if I did cart = cart.map()... when I called it after the addItem, it doesn;t change the 
// original one? like the dog food is still 2 even when I added another dog food by the time I called addItem??????????????


// IM SO FUCKING LOST, LET ME START OVER:

// Add Item
// let userItem = prompt('Enter an item to add: ')
function addItem(cart, newItem){
  let exists = cart.find(item => item.name.toLowerCase() === newItem.toLowerCase())

  if(exists){
      cart = cart.map((item) => {
      if(newItem.toLowerCase() === item.name.toLowerCase()) {
        return {...item, qty: item.qty + 1}
      }
      return item
    })
    return cart
  }

  // I JUST KNOW THIS IS WRONG...
  cart = [...cart, {
      name: newItem,
      price: 0,
      qty: 1
      }
  ]

  return cart
}

// console.log(addItem(cart, userItem))


// THJAT TOOK ME LIKE FUCKING 40-50 MINUTES TO FIGURE ADD ITEM SMFH....


// // Remove Item
// let userRemove = prompt('Enter an item to remove: ')
// function removeItem(cart, userItem) {
//   let exists = cart.find(item => item.name.toLowerCase() === userItem.toLowerCase())

//   if(exists) {
//     cart = cart.map((item) => {
      
//       if(item.qty === 1){
//         cart = cart.filter(item => item.name.toLowerCase() !== userItem.toLowerCase())
//         return cart
//       }

//       if(item.name.toLowerCase() === userItem.toLowerCase()){
//         return {...item, qty: item.qty - 1}
//       }
//     })
//   } else {
//     return {
//       error: "Item doesn't exist"
//     }
//   }

//   return cart
// }

// console.log(removeItem(cart, userRemove))


// Okay, that took like 3mins...
// I feel like I need to add some vcalidations or whatever, I need to decrease quantity? or idk, it says remvoe so im removing the entire item

// // Remove Item
// let userRemove = prompt('Enter an item to remove: ')
// function removeItem(cart, userItem) {
//   let exists = cart.find(item => item.name.toLowerCase() === userItem.toLowerCase())

//   if(exists) {

//     cart = cart.map((item) => {
//       if(item.name.toLowerCase() === userItem.toLowerCase()){
//         return {...item, qty: item.qty - 1}
//       }
//     })
          
//     if(cart.userItem.qty === 0){
//       cart = cart.filter(item => item.name.toLowerCase() !== userItem.toLowerCase())
//       console.log(cart)
//     }

//     return cart
//   } else {
//     return {
//       error: "Item doesn't exist"
//     }
//   }

//   return cart
// }

// console.log(removeItem(cart, userRemove))

// OPKAY NOW IM CONFUSED WHEN I TRIED TO ADD A REMOVE THE ITEM ENTIRELY OPTION IF QTY == 0

// SO I LOOKED IT UP, NOW IM KIND OF ENLIGHTENED., AND I KNOW IT WORKS SO.... HERE WE GO

// Remove Item
// let userRemove = prompt('Enter an item to remove: ')
function removeItem(cart, userItem) {
  let exists = cart.find(item => item.name.toLowerCase() === userItem.toLowerCase())

  if(exists) {
    let updatedCart = cart.map((item) => {
      if(item.name.toLowerCase() === userItem.toLowerCase()){
        return {...item, qty: item.qty - 1}
      }
      return item
    })

    updatedCart = updatedCart.filter(item => item.qty > 0)

    return updatedCart
  } else {
    return {
      error: "Item doesn't exist"
    }
  }
}

// console.log(removeItem(cart, userRemove))


// Update Item

// let userItem = prompt('Enter the item you want to update: ')
// let userQty = Number(prompt('Enter your desired quantity for this product: '))
function updateItem(cart, targetItem, targetQty){
  let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

  if(exists){
    const updatedCart = cart.map((item) => {
      if(item.name.toLowerCase() === targetItem.toLowerCase()){
        return {...item, qty: targetQty}
      }
      return item
    })
    return updatedCart
  } else {
    return { error: 'Item not found'}
  }
}

// console.log(updateItem(cart, userItem, userQty))

// WOAHH, I GOT THIS UPDATE ITEM FIRST TRY YEY HEHE
// TIME FOR CART ENGINE


function cartEngine(cart, action, payload){
  if(action === 'add'){
    return addItem(cart, payload)
  }

  if (action === 'remove') {
    return removeItem(cart, payload)
  }

  if (action === 'update') {
    return updateItem(cart, payload.name, payload.qty)
  }

  return cart
}


cart = cartEngine(cart, "add", "Dog Food");
cart = cartEngine(cart, "remove", "Cat Toy");
cart = cartEngine(cart, "update", { name: "Dog Food", qty: 10 });

// OKAY, LET ME SEE HOW THIS WORKS...

console.log(cart)

// SEE, IDK WHAT OUTPUT YOU ARE EXPECTING BECAUSE I REALLY DONT KNOW HOW T HIS WORKSSS, IF YOU THINK THS IS THE BEST THEN JUST ELABORATE AND EXPLAIN BRO
// I HAVE ZEROOOOOOOO IDEA AND IM COMPLETELY LOST
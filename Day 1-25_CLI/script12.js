const prompt = require('prompt-sync') ()


// Day 12? or Day11?
// And I don't know as well why chatGPT's giving me these challenges when I just want the usual ones
// the lecture, 4 exercises, 2 programs, 3 quizzes, and 1 debugging

// But whatever bro, least I learn



// Challenge 1: Total Cart Price

// let cart = [
//     { name: 'Dog Food', price: 100, qty: 2 },
//     { name: 'Cat Food', price: 120, qty: 1 },
//     { name: 'Bird Food', price: 80, qty: 3 }
// ]

// function getTotal(obj) {
//     let total = 0

//     for(let i = 0; i < obj.length; i++){
//         total += obj[i].price
//     }

//     console.log(total)
// }

// getTotal(cart)

// Oh okay, II missed the quantity per product, that's why I thought this was too easy, let me try again:

// let cart = [
//     { name: 'Dog Food', price: 100, qty: 2 },
//     { name: 'Cat Food', price: 120, qty: 1 },
//     { name: 'Bird Food', price: 80, qty: 3 }
// ]

// function getTotal(obj) {
//     let total = 0

//     for(let i = 0; i < obj.length; i++){
//         total += obj[i].price * obj[i].qty
//     }

//     console.log(total)
// }

// getTotal(cart);

// Alright, now this one's working



// Challenge 2: Find Low Stock Products

// let products = [
//     {
//         name: 'Dog Food',
//         price: 100,
//         stock: 12,
//     },
//     {
//         name: 'Cat Food',
//         price: 120,
//         stock: 4,
//     },
//     {
//         name: 'Parrot Food',
//         price: 110,
//         stock: 20,
//     },
//     {
//         name: 'Hamster Food',
//         price: 115,
//         stock: 23,
//     },
//     {
//         name: 'Elephant Food',
//         price: 115,
//         stock: 7,
//     }
// ]


// function lowStock(prods) {
//     prods.filter((prod) => {
//         let lowStockProds = prod.stock <= 10
//         console.log(lowStockProds)
//         return lowStockProds
//     })
// }

// console.log(lowStock(products))


// Okay, I dont know why its returning undefined when its working
// Let me try again

// function lowStock(prods) {
//     prods.filter((prod) => {
//         console.log(prod.stock)
//     })
// }

// console.log(lowStock(products))

// Oh actually, I dont know why I have to create a function for this when I can
// const lowStockProds = prods.filter...

// And also, why is there an undefined at the last part when it should only return the stocks from each object?
// I can easily just do this with loop:

// function lowStock(prods){
//     for(let i = 0; i < prods.length; i++){
//         return prods[i].stock <= 10
//     }
// }

// console.log(lowStock(products))

// Bruh it's returning false, but let me go again
// I didn't expect this to be that hard, but let me try again with loop:

// function lowStock(prods){
//     for(let i = 0; i < prods.length; i++){
//         if(prods[i].stock <= 10){
//             return prods[i]
//         } else {
//             continue;
//         }
//     }
// }

// lowStock(products)

// Bruh, I think I got it this time:

// function lowStock(prods){
//     for(let i = 0; i < prods.length; i++){
//         if(prods[i].stock <= 10){
//             console.log(prods[i])
//         }
//     }
// }

// lowStock(products)

// Bruh, this is working and all I did was touch grass for like 2 hours
// Anyway, I gotta do this with filter()

// Do I really need a function and then filter() inside it when I can create a function inside a filter?
// If I create a new function and then put a filter inside it, it'll just be redundant bruh

// const lowStockProds = products.filter((prod) => {
//     return prod.stock <= 10;
// })


// console.log(lowStockProds)

// Okay, then that was easy, do not ever underestimate 2 hours of touching grass :DD




// Challenge 3: Search + Partial Match

// let userInput = prompt('Search for a product: ')

// I am js gonna reuse the products array object or object array? IDK WHAT U CALL IT

// Let me try it with the traditional function

// function searchProduct(obj, keyword){
//     keyword.toLowerCase();

//     if(keyword.includes('dog') || keyword === obj[0].name.toLowerCase()){
//         console.log('User is looking for dog food')
//     } else if(keyword.includes('cat') || keyword === obj[1].name.toLowerCase()){
//         console.log('User is looking for cat food')
//     } else if(keyword.includes('parrot') || keyword === obj[2].name.toLowerCase()){
//         console.log('User is looking for parrot food')
//     } else if(keyword.includes('hamster') || keyword === obj[3].name.toLowerCase()){
//         console.log('User is looking for hamster food')
//     } else if(keyword.includes('elephant') || keyword === obj[4].name.toLowerCase()){
//         console.log('User is looking for elephant food')
//     } else {
//         console.log('Invalid input, please try again')
//     }
// }

// // Why is it that when I try to look for 'food', nothing happens?

// // Well, this looks too much, I actually think I can just use find() and then use includes() inside the find

// searchProduct(products, userInput)

// // This works, but I feel like there is a much better solution

// // I will actually try to use find and then filter inside it, jsut for fun xd

// ...Well, actually no, I don't think I can do that, i'll js move to the next challenge xd





// Challenge 4: Add Quantity to Existing Product

// let cart = [
//     {
//         name: 'Dog Food',
//         price: 100,
//         qty: 12,
//     },
//     {
//         name: 'Cat Food',
//         price: 120,
//         qty: 4,
//     },
//     {
//         name: 'Parrot Food',
//         price: 110,
//         qty: 20,
//     },
//     {
//         name: 'Hamster Food',
//         price: 115,
//         qty: 23,
//     },
//     {
//         name: 'Elephant Food',
//         price: 115,
//         qty: 7,
//     }
// ]

// let userInput = prompt('Add a product: ')

// function addToCart(obj, productName){

//     let i = 0;
//     while(i < obj.length){
//         if(productName.toLowerCase() === obj[i].name.toLowerCase()){
//             obj[i].qty++
//             console.log('Product added successfully (' + obj[i].name + ' Qty: ' + obj[i].qty + ')')
//         } else {
//             console.log('Invalid input, please try again')
//             return
//         }
//         i++
//     }

// }

// addToCart(cart, userInput);

// This is so wrong, let me try again


// let userInput = prompt('Add a product: ')

// function addToCart(obj, productName){

//     for(let i = 0; i < obj.length; i++){
//         if(productName.toLowerCase() === obj[i].name.toLowerCase()){
//             obj[i].qty++
//             console.log('Product stock added successfully! ' + obj[i].name + ' Qty: ' + obj[i].qty)
//             return
//         } else if(productName.toLowerCase() !== obj[i].name.toLowerCase()) {
//             obj.push(productName)
//             obj[productName].name = 'productName'
//             obj[productName].price = 100
//             obj[productName].qty = 1
//             console.log(obj)
//             console.log('Successfully added ' + obj[productName] + ' as a new product')
//             return
//         } else {
//             console.log('Invalid input, please try again')
//             return
//             // This else statement's kinda useless, i can just put else { return } but whatever
//         }
//     }
// }

// Well, that else if's wrong


// Let me try again:

// function addToCart(obj, productName){

//     for(let i = 0; i < obj.length; i++){
//         if(productName.toLowerCase() === obj[i].name.toLowerCase()){
//             obj[i].qty++
//             console.log('Product stock added successfully! ' + obj[i].name + ' Qty: ' + obj[i].qty)
//             return
//         }

//         if(productName.toLowerCase() !== obj[i].name.toLowerCase()) {
//             obj.push(productName)
//             console.log(obj)
//             console.log('Successfully added ' + productName + ' as a new product')
//             return
//         }
//     }
// }

// I dont know why if I add product 'cat food' it isn't === to 'Cat Food'

// I kinda see it but I don't, Oh actually, I should remove else if and put it in a new if statement

// Yea, I don't, let me try this:

// function addToCart(obj, productName){

//     for(let i = 0; i < obj.length; i++){
//         if(productName.toLowerCase() === obj[i].name.toLowerCase()){
//             obj[i].qty++
//             console.log('Product stock added successfully! ' + obj[i].name + ' Qty: ' + obj[i].qty)
//             return
//         } else {
//             for(let i = 0; i < obj.length; i++){
//                 if(productName.toLowerCase() !== obj[i].name.toLowerCase()) {
//                     obj.push(productName)
//                     console.log(obj)
//                     console.log('Successfully added ' + productName + ' as a new product')
//                     return
//                 }
//             }
//         }
//     }
// }


// That didn't fix it
// Just to clarify, I want the loop to keep on looping on the entire array before moving onto the else statement

// function addToCart(obj, productName){

//     for(let i = 0; i < obj.length; i++){
//         if(productName.toLowerCase() === obj[i].name.toLowerCase()){
//             obj[i].qty++
//             console.log('Product stock added successfully! ' + obj[i].name + ' Qty: ' + obj[i].qty)
//             return
//         }
//     }
//     obj.push(productName)
//     console.log(obj)
//     console.log('Successfully added ' + productName + ' as a new product')
//     return
// }

// // Okay, that worked XDD

// addToCart(cart, userInput);


// Okay, so far it's just following your instructions so I'll leave it like that






// // Challenge 5: Remove Product (Not Just Pop)

// // Oooh, for this one, I wonder why you suggested filter() instead of find()?


// // function removeFromCart(obj, productName){

// // }

// let userInput = prompt('Remove a product: ')

// const removeItem = cart.filter((product) => {
//     return product.name.toLowerCase() !== userInput.toLowerCase()
// })

// // function removeFromCart(obj, productName){
// //     obj[productName]
// //     // Now I do not know how to remove this item, what functions or methods or whatever
// //     // Alright so I looked it up online, I just need to create a new array without that item, there are actually 4 options, I'll just use this
// // }

// console.log(removeItem)

// // Alright, that works XDDD I can use splice, shift, and pop, but I think as long as its working its fine


// // removeFromCart(cart, userInput);







// Alright, and to finish the day, and to make up with all the mistakes I have above (I do know there's alot)

// MANDATORY BOSS CHALLENGE

let products = [
    {
        name: 'Dog Food',
        price: 100,
        stock: 12,
    },
    {
        name: 'Cat Food',
        price: 120,
        stock: 4,
    },
    {
        name: 'Parrot Food',
        price: 110,
        stock: 20,
    },
    {
        name: 'Hamster Food',
        price: 115,
        stock: 23,
    },
    {
        name: 'Elephant Food',
        price: 115,
        stock: 7,
    }
]

let cart = [
    {
        name: 'Dummy Product',
        price: 115,
        qty: 2,
    }
]

console.log("Welcome to Leo's Mart")
console.log("Here's the list of available products: ")

for(let i = 0; i < products.length; i++){
    console.log(products[i])
}

console.log('Press 1 to View Cart | Press 2 to Add Item | Press 3 to Remove Item | Press 4 for Total Price | Press 5 to Exit')

// Variable for user's choice
let userInput = Number(prompt(''))

// Functions that will be used inside the while loop

function viewCart(obj){
    console.log("Here are the products you've added to cart: ")
    for(let i = 0; i < obj.length; i++){
        console.log(obj[i])
    }
}


// // So idk if this works, but let me try the view cart function first, then this:
// function addItem(product, cart){
//     // I initally did obj as an argument, but its confusing so ill just leave it like this (product, cart)
//     console.log('Choose which product you wanna add to your cart: ')
//     // I'm using products array instead of an argument here to avoid confusion and since the products array of objects isn't gonna change
//     for(let i = 0; i < product.length; i++){
//         console.log('Press ' + i + ' to purchase ' + product[i].name + ' (' + product[i].stock + ' left)')
//     }

//     let productChoice = Number(prompt('Enter your choice here: '))

//     // Check if stock is available, then process transaction
//     if(product[productChoice].stock <= 0){
//         console.log('Unfortunately, that product is out of stock. Please try again next time')
//         productChoice = Number(prompt('Enter another product: '))
//     } else {
//         product[productChoice].stock--
//         console.log('Product added successfully')
//         // Add the product chosen to cart
//         // Now, I think this is where I'll be stuck because I don't know how to add the object from products array to cart array
//         cart[productChoice] = product[productChoice]
//         console.log(cart);
//         return
//     }
// }

// Okay, everything's working here, and for you to see the progress, I will be leaving it commented like this and then continue on another lin
// I just need to tweak something to make sure it functiopns properly

// function addItem(product, cart){
//     // I transferred the for loop inside the while loop so it doesnt keep asking and showing the products available
//     // Everytime this function is run
//     let productChoice = Number(prompt('Enter your choice here: '))

//     if(product[productChoice].stock <= 0){

//         console.log('Unfortunately, that product is out of stock. Please try again next time')
//         // // // It seems like I have to sanitize or validate this input as well before letting it replace the real productChoice variable
//         // // productChoice = Number(prompt('Enter another product: '))
//         // let newProductChoice = Number(prompt('Enter another product: '))
//         // //Check if newProductChoice is correct or valid (e.g. 0, 1, 2, 3, 4)
//         // // if(newProductChoice === 0 || newProductChoice === 1 || newProductChoice === 2 || newProductChoice === 3 || newProductChoice === 4)
//         // // This if statement looks really uncomfortable in the eyes but, okay let me try to look for another option
//         // if(newProductChoice <= product.length){
//         //     console.log(newProductChoice)
//         //     productChoice = newProductChoice
//         //     console.log(productChoice)
//         // } else {
//         //     console.log(newProductChoice)
//         //     console.log('Invalid input, please start over')
//         // }
//         // // Well, that whole block doesn't work, actually, this whole thing makes everytthing complicated, so I'll just ask the user
//         // // to start over instead of choosing for another product if the product chosen has zero or less stocks
//         return
//     } else if(product[productChoice].stock > 0){
//         product[productChoice].stock--
//         console.log('Product added successfully')
//         cart[productChoice] = product[productChoice]
//         // That works but I need to replace stock to qty, and actually just decrement by 1, not the entire stock value
//         // cart.pop()
//         // // pop doesn't work so I actually literally need to replace it manually, I think
//         // So I looke dit up and then I can actually use forEach for this, loop through the entire array then add a property oin that specific object
//         // Let me try it:
//         cart.forEach((product) => {
//             if(product.qty > 0) {
//                 product[i].qty++
//             } else {
//                 product[productChoice].qty = 1
//             }
//         })
//         console.log(cart);
//         return
//     } else {
//         console.log('Invalid input, please try again.')
//         return
//     }
// }


// I actually need to redo some shits because I need two array of objects, products, and carts

// cart.forEach((item) => {
//     item.qty = 0;
// })

// // Let me just clean this up
// function addItem(product, cart){
//     let productChoice = Number(prompt('Enter your choice here: '))

//     // Alright now im having a hard time breaking this loop
//     if(productChoice === 5){
//         console.log('Thank you for shopping!')
//         return
//     }

//     if(product[productChoice].stock <= 0){
//         console.log('Unfortunately, that product is out of stock. Please try again next time')
//         return
//     } else if(product[productChoice].stock > 0){
//         product[productChoice].stock--
//         console.log('Product added successfully')
//         cart[productChoice] = product[productChoice]
//         // cart.forEach((item) => {
//         //     // I dont know why both of these conditions succeed
//         //     // So initialize and put qty for each item in cart
//         //     item.qty = 0;
            
//         // }) Alright, for this block, I need to put it somewhere, so it doesnt go 0 every time this function works
//         // And then create another foreach to item.qty++????

//         // I think I got it this time:
//         if(cart[productChoice].qty >= 0){
//             cart[productChoice].qty++
//         } else {
//             cart[productChoice].qty = 1
//         }
//         // YEP, ITS WORKING, IDK WHAT MADE THIS SHIT SO HARD IDK WQURQWJKROWPQR
//         return
//     } else {
//         console.log('Invalid input, please try again.')
//         return
//     }
// }


// // While loop that runs everytime
// while(true){
//     if(userInput === 1){
//         // View Cart Function
//         viewCart(cart)
//         userInput = Number(prompt(''))
//         continue;
//     } else if (userInput === 2 && userInput !== 5){
//         // I put this here from the main for loop to avoid this from ruining the UI or flow of the system, since it keeps
//         // asking or running this everytime the for loop runs
//         console.log('Choose which product you wanna add to your cart: ')
//         for(let i = 0; i < products.length; i++){
//             console.log('Press ' + i + ' to purchase ' + products[i].name + ' (' + products[i].stock + ' left)')
//         }
//         console.log('Press 5 to exit the add item option')
//         // Add Item Function
//         // Another loop to choose which item to add
//         addItem(products, cart)
        
//     } else if (userInput === 3){
//         // Remove Item Function
//         // Another loop to choose which item to remove

//     } else if (userInput === 4){
//         // Check total price function
//         // Make sure to check quantity
        
//     } else if (userInput === 5){
//         // Exit program
//         break;
//     } else {
//         console.log('Invalid input, please start over')
//         userInput = Number(prompt(''))
//     }
// }








// IM STUCK AT  BREAKING THE LOOP, LET ME REWRITE EVERYTHING:

cart.forEach((item) => {
    item.qty = 0;
})

function addItem(product, cart){
    let productChoice = Number(prompt('Enter your choice here: '))

    // if(productChoice >= product.length || productChoice !== Number) {
        // Well the condition is actually wrong, I looked it up online, the best way to avoid users from entering unwanted prompts so...
    if(isNaN(productChoice) || productChoice < 0 || productChoice >= product.length) {
        console.log('Do not ruin my program please, try again next time')
        // If I type 5 randomly upon adding items in the cart, it returns undefined but continues
        productChoice = ''
        return
    }

    if(product[productChoice].stock > 0){
        product[productChoice].stock--
        console.log('Product added successfully')
        cart[productChoice] = product[productChoice]
        if(cart[productChoice].qty >= 0){
            cart[productChoice].qty++
        } else {
            cart[productChoice].qty = 1
        }
        return
    } else if(product[productChoice].stock <= 0){
        console.log('Unfortunately, that product is out of stock. Please try again next time')
        return 
    }
}



function removeItem(cart, index){

    if(isNaN(index) || index >= cart.length || index < 0){
        console.log('Do not ruin my program please, try again next time')
        index = ''
        return
    }

    console.log(cart[index].name + ' (1) has been successfully removed from your cart')

    if(cart[index].qty <= 0) {
        console.log('You no longer have an item of this product in your cart')
        return
    } else {
        cart[index].qty--
        products[index].stock++
        return cart[index];
    }
}

// As much as possible, if it doesn't get really confusing, I use obj as an argument to make it look more formal
function getTotal(obj){
    let sum = 0
    let partialSum = 0
    for(let i = 0; i < obj.length; i++){
        partialSum = obj[i].price * obj[i].qty
        sum += partialSum
    }
    console.log('The total of your cart is ₱' + sum)
}



while(true){
    if(userInput === 1){
        viewCart(cart)
        userInput = Number(prompt(''))
        continue;
    } else if (userInput === 2){
        console.log('Choose which product you wanna add to your cart: ')
        for(let i = 0; i < products.length; i++){
            console.log('Press ' + i + ' to purchase ' + products[i].name + ' (' + products[i].stock + ' left)')
        }

        addItem(products, cart)
        userInput = Number(prompt(''))
        // If you're wondering, I just stopped the loop after purchasing so that it doesn't get too complicated
        // If I did what I had a while ago, I would've had a harder time figuring it out, so instead of fixing it completely with more
        // complicated code, I just removed it, as long as it works. 
        // Also, I was doing it for the smooth flow of the program so it wasn't necessary
    } else if (userInput === 3){
        console.log('Which product do you want to remove?')
        for(let i = 0; i < cart.length; i++){
            console.log('Enter ' + i + ' to remove ' + cart[i].name)
        }
        let userRemove = Number(prompt(''))
        removeItem(cart, userRemove)
        userInput = Number(prompt(''))
    } else if (userInput === 4){
        getTotal(cart)
        userInput = Number(prompt(''))
    } else if (userInput === 5){
        console.log("Thank you for visiting Leo's Mart. Have a great day!")
        break;
    } else {
        console.log('Invalid input, please start over')
        userInput = ''
        userInput = Number(prompt(''))
    }
}






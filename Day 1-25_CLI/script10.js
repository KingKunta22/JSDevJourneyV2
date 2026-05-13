// BRO IDK WHAT DAY IT IS NOW, I DONT ACTUALLY DO THIS EVERYDAY, I DO IT LIKE TWICE OF I WANT TO EVEERYDAY, I JUST BASE ON THE NAME OF THE FILE
// Right now this is script10.js so idk if we're actualyl at day 10 or I js put it incorrectly  because on your prompt it says Day 8
// while my script10.js is my Day 8 so idk wtf uis happening, can u recall what made this inconsistent??? or what???

// Are we actually js on day 8, is it just I did maybe a few tasks on a specific day that made it like advanced for 2 scripts or what? Whatever


// script10.js or Day 8 (based from chatGPT)

const prompt = require('prompt-sync') ()

// This a js a fix from the previous one

// function buyProducts(obj){
//     console.log('Which product do you wanna buy?')
//     for(let i = 0; i < obj.length; i++){
//         console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
//     }

//     let userPurchase = Number(prompt('Enter your choice: '))
//     if(obj[userPurchase].stock === 0){
//         console.log('Unfortunately, this product is out of stock')
//     }

//     if(obj[userPurchase] === i){
//         obj[i].stock--
//         console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
//         console.log('If you wanna buy a product again, just enter 2')
//     }
// }

// YE, I THINK THATS WRONJG BUT WHATEVER BRO
// You said unnecessary loop but how will I do it without having to have nested if else statements?
// Also, can u even access the i outside the first for loop? I don't think so but Idk why you said the second loop was unnecessary
// Provide the correct one then


// Script10.js / Day 8



/// OH AND ACTUALLY, I FIGUREDR IT OUT NOW, YOU DONT KNOW HOW TO FUCKING COUNT

// YOU SAID DAY 8 WHEN THE PREVIOUS ONE YOU SAID DAY 9, WHY ARE WE COUNTING DOWNWARDS TF????

// THIS SHOULD BE DAY 10 === SCRIPT10.JS SO IM NOT THE ONE WHOS AT FAULT HERE KIDDO!!!!




// DAY 10 SCRIPT10.JS (BECAUSE I HAVE COMMON SENSE AND I DONT HAVE A DUMB BRAIN LIKE CHATGPT)


// Exercise 1

// let student = {
//     name: 'John',
//     grade: 90,

//     introduce: function() {
//         console.log('Hi, I am ' + this.name + ' and my grade is ' + this.grade )
//     }
// }

// student.introduce();


// Exercise 2

// let bankAccount = {
//     owner: 'John',
//     balance: 5000,

//     deposit: function(amt) {
//         let userBalance = this.balance
//         userBalance += amt
//         console.log(userBalance)
//     },

//     withdraw: function(amt){
//         let userBalance = this.balance
//         userBalance -= amt
//         console.log(userBalance)
//     }
// }

// bankAccount.deposit(500);

// Alright, this seems to not be working, and I am so far having a hard time with this part compared to the previous ones so let me take my time



// Oh it was actually just fine, I just needed to use console.log instead of return so that I can see the balance

// However, I might need a user input for this so that we can determine the amount of balance to be withdrawn or deposited

// let bankAccount = {
//     owner: 'John',
//     balance: 5000,

//     deposit: function(amt) {
//         let userBalance = this.balance
//         let amt = Number(prompt('Enter an amount to deposit: '))

//         userBalance += amt
//         console.log("Transaction successful, here's your updated balance: " + userBalance)
//     },

//     withdraw: function(amt){
//         let userBalance = this.balance
//         let amt = Number(prompt('Enter an amount to withdraw: '))

//         if(userBalance < amt){
//             console.log('Unable to process transaction (insufficient balance)')
//         }

//         userBalance -= amt
//         console.log("Transaction successful, here's your updated balance: " + userBalance)
//     }
// }

// Well, I feel like this is too much compared to whats being asked, so let me remove the user input option

// let bankAccount = {
//     owner: 'John',
//     balance: 5000,

//     deposit: function(amt) {
//         let userBalance = this.balance
        
//         userBalance += amt
//         console.log("Transaction successful, here's your updated balance: " + userBalance)
//     },

//     withdraw: function(amt){
//         let userBalance = this.balance

//         if(userBalance < amt){
//             console.log('Unable to process transaction (insufficient balance (' + userBalance + '))')
//             return
//         }

//         userBalance -= amt
//         console.log("Transaction successful, here's your updated balance: " + userBalance)
//     }
// }

// bankAccount.withdraw(10000);
// bankAccount.deposit(500)
// bankAccount.withdraw(5000);


// Well, this works just fine but it seems like its not withdrawing even if it just turns the balance to 0 and not negative

// Well, I don't know why this happens, is it because it's not in a loop???

// I think its mainly because the functions run before the balance gets properly updated, cus right now it's saying:

// Unable to process transaction (insufficient balance (5000))
// Transaction successful, here's your updated balance: 5500
// Unable to process transaction (insufficient balance (5000))


// I think it's because of that and the only way to get around this is by asking for a userInput and using a loop...



// // Exercise 3

// let counter = {
//     num: 0,

//     increase: function() {
//         num = this.num
//         num++
//         console.log(num);
//     },

//     decrease: function() {
//         num = this.num
//         num--
//         console.log(num)
//     },

//     reset: function() {
//         num = this.num
//         num = 0
//         console.log(num)        
//     }
// }

// // Well, this one seems a bit too straightforward, it's either I will have crazy hard program 1 and 2 or I am completely lost and incorrect on this part

// counter.increase()
// counter.decrease()
// counter.reset()

// // I have a big feeling I need a loop and the counter you mean is literally a counter that increments by 1 every second or idk
// // But wwhatever, theres no argument or whatever or user input so i'll just leave it at thtt







// Program 1: Product System (Upgrade from Mini Inventory System)

// let products = [
//     {
//         name: 'Dog Food (Dry)',
//         price: 100,
//         stock: 12
//     },
//     {
//         name: 'Dog Food (Wet)',
//         price: 120,
//         stock: 25
//     },
//     {
//         name: 'Cat Food (Dry)',
//         price: 110,
//         stock: 20
//     },
//     {
//         name: 'Cat Food (Wet)',
//         price: 115,
//         stock: 23
//     },
//     {
//         // Question, this works fine right? But right now it looks like the functions are another object, 
//         // so do I need to put these (functions) below every object or is this just right?
//         buyProduct: function (obj){
//             console.log('Which product do you wanna buy?')
//             for(let i = 0; i < obj.length; i++){
//                 console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
//             }

//             let userPurchase = Number(prompt('Enter your choice: '))

//             for(let i = 0; i < obj.length; i++){

//                 if(obj[userPurchase].stock === 0){
//                     console.log('Unfortunately, this product is out of stock')
//                 }

//                 if(userPurchase === i){
//                     obj[i].stock--
//                     console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
//                     console.log('If you wanna buy a product again, just enter 2')
//                 }

//             }
//         }
//     }
// ]

// console.log('Enter 1 to view products | Enter 2 to purchase a product | Enter 3 to exit')

// function viewProducts(obj){
//     console.log("Here's the list of our products: ")
//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name + ' ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }
// }

// let userInput = prompt('')

// while(true){
//     if(userInput === '1'){
//         viewProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '2'){
//         products.buyProducts()
//         userInput = prompt('')
//     } else {
//         break
//     }
// }

// Alright, so when I ran this, it did read the function (which is the 5th item inside the object, as an object)
// And I do not want that, I want the functions to work as functions just like before, and not be treated as objects
// How would I do that in this scenario whch is an array of objects inside an object? Just put functions per object?
// Let me try again


let products = [
    {
        name: 'Dog Food (Dry)',
        price: 100,
        stock: 12,
        buyProduct: function (obj){
            console.log('Which product do you wanna buy?')
            for(let i = 0; i < obj.length; i++){
                console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
            }

            let userPurchase = Number(prompt('Enter your choice: '))

            for(let i = 0; i < obj.length; i++){

                if(obj[userPurchase].stock === 0){
                    console.log('Unfortunately, this product is out of stock')
                }

                if(userPurchase === i){
                    obj[i].stock--
                    console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
                    console.log('If you wanna buy a product again, just enter 2')
                }

            }
        }
    },
    {
        name: 'Dog Food (Wet)',
        price: 120,
        stock: 25,
        buyProduct: function (obj){
            console.log('Which product do you wanna buy?')
            for(let i = 0; i < obj.length; i++){
                console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
            }

            let userPurchase = Number(prompt('Enter your choice: '))

            for(let i = 0; i < obj.length; i++){

                if(obj[userPurchase].stock === 0){
                    console.log('Unfortunately, this product is out of stock')
                }

                if(userPurchase === i){
                    obj[i].stock--
                    console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
                    console.log('If you wanna buy a product again, just enter 2')
                }

            }
        }
    },
    {
        name: 'Cat Food (Dry)',
        price: 110,
        stock: 20,
        buyProduct: function (obj){
            console.log('Which product do you wanna buy?')
            for(let i = 0; i < obj.length; i++){
                console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
            }

            let userPurchase = Number(prompt('Enter your choice: '))

            for(let i = 0; i < obj.length; i++){

                if(obj[userPurchase].stock === 0){
                    console.log('Unfortunately, this product is out of stock')
                }

                if(userPurchase === i){
                    obj[i].stock--
                    console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
                    console.log('If you wanna buy a product again, just enter 2')
                }

            }
        }
    },
    {
        name: 'Cat Food (Wet)',
        price: 115,
        stock: 23,
        buyProduct: function (obj){
            console.log('Which product do you wanna buy?')
            for(let i = 0; i < obj.length; i++){
                console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
            }

            let userPurchase = Number(prompt('Enter your choice: '))

            for(let i = 0; i < obj.length; i++){

                if(obj[userPurchase].stock === 0){
                    console.log('Unfortunately, this product is out of stock')
                }

                if(userPurchase === i){
                    obj[i].stock--
                    console.log('Congratulations, you successfully purchased ' + obj[i].name + ' for ₱' + obj[i].price) 
                    console.log('If you wanna buy a product again, just enter 2')
                }

            }
        }
    }
]

console.log('Enter 1 to view products | Enter 2 to purchase a product | Enter 3 to exit')

function viewProducts(obj){
    console.log("Here's the list of our products: ")
    for(let i = 0; i < obj.length; i++){
        console.log(obj[i].name + ' ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
    }
}

let userInput = prompt('')

while(true){
    if(userInput === '1'){
        viewProducts(products)
        userInput = prompt('')
    } else if(userInput === '2'){
        products.buyProducts()
        userInput = prompt('')
    } else {
        break
    }
}

// This looks really ugly and wrong but let me try


// Well, it did not work, I am so lost, and I hate refactoring fucking entire objects because they confuse me and I'd rather
// rewrite all of it from scratch than fix it lol
// Just provide me the instructions, the object, and the functions I need inside that object, then I'll do that instead of me fixing this and adding
// these features to this existing object that doesn't even work in the first place



// Q1: Afaik, this refers to that specific value inside that scope, or basically looks at its own object, then gets that value allowing us to reuse it
// Q2: 10
// Q3: Well, you can use balance -= amount but the problem I think is that there's no checking if the amount is < the balance to avoid negative values
// Debug:

// let user = {
//     name: "Anna",
//     greet: function(){
//         console.log("Hello " + this.name)
//     }
// }
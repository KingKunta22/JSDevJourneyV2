const prompt = require('prompt-sync')();


// Day 10 Fixes

// // Exercise 2: Bank Account

// let bankAccount = {
//     name: 'John',
//     balance: 5000,

//     deposit: function(amount) {
//         this.balance += amount
//         console.log('Transacton Successful! Your updated balance is: ' + this.balance)
//     },

//     withdraw: function(amount) {
//         if(amount > this.balance){
//             console.log('Invalid Transaction (Your balance is: ' + this.balance + ')')
//             return
//         }

//         this.balance -= amount
//         console.log('Transaction Successful! Your updated balance is ' + this.balance)

//         // Question, why does doing let balance = this.balance not work?
//     }
// }

// bankAccount.withdraw(200)
// bankAccount.deposit(700)
// bankAccount.withdraw(4500)
// bankAccount.withdraw(1000)
// bankAccount.withdraw(500)

// Okay, now this is working, but I am still confused about how doing let balance = this.balance not work
// Didn't we do that previously? Like getting the value from the object then reassigning it to a variable to use it or no?



// // Exercise 3: Counter

// let counter = {
//     num: 1,

//     increment: function() {
//         this.num++
//         console.log(this.num);
//     },

//     decrement: function() {
//         if(this.num <= 0){
//             console.log('Returns negative')
//             return
//         }

//         this.num--
//         console.log(this.num);
//     },

//     reset: function() {
//         this.num = 0;
//         console.log(this.num);
//     }
// }

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// // 6
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// // 0
// counter.increment();
// counter.increment();
// // 2
// counter.reset();


// // Well, this isn't what I expected, it's returning:
//     // 0
//     // -1
//     // 0
//     // 1
//     // 2
//     // 3
//     // 0
// // This could be because of the reset function right? It's color is green meaning, javascript is reading it not as a function but something else
// // It could be like one of javascript's methods or whatever

// // Or idk, when I did it again, it's working properly, I just changed: if(this.num < 0){ to if(this.num <= 0){







// // Clean Inventory System

// let products = [
//     {
//         name: 'Dog Food (Dry)',
//         price: 100,
//         stock: 12,
//     },
//     {
//         name: 'Dog Food (Wet)',
//         price: 120,
//         stock: 25,
//     },
//     {
//         name: 'Cat Food (Dry)',
//         price: 110,
//         stock: 20,
//     },
//     {
//         name: 'Cat Food (Wet)',
//         price: 115,
//         stock: 23,
//     }
// ]



// function viewProducts(obj) {
//     console.log("Here's the list of our products: ")

//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name + ': ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }
// }


// function buyProducts(obj) {

//     for(let i = 0; i < obj.length; i++){
//         console.log('Enter ' + i + ' to buy ' + obj[i].name + ' for ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }

//     let selected = Number(prompt('Enter your choice: '))
//     // This was the part that I fucked up, I didn't have to loop since selected can already be used as the index of the object the user wants to purchase
//     // That took me a while to understand, but let me do it right this time: 
//     if(obj[selected].stock <= 0){
//         console.log('Unfortunately, this product is out of stock, please try another product')
//         selected = Number(prompt('Enter another product: '))
//     } else {

//         obj[selected].stock--

//         console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
//         console.log('Would you like to buy the same product? Enter 1 to continue, 2 to purchase another product, 3 to exit')

//         let secondChoice = prompt('')

//         if(secondChoice === '1'){
//             obj[selected].stock--
//             console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
//         } else if(secondChoice === '2'){
//             selected = Number(prompt('Enter another product: '))
//         } else {
//             return;
//         }
//     }
//     // Well, this is pretty long and it's nested, so idk, a switch statement could've been better here or idk
// }

// // So I know this is too much and it's actually wrong, but let me just fix it because I am doing too much
// // to the point that it's not working properly lool

// console.log('Enter 1 to view products | Enter 2 to buy a product | Enter 3 to exit')

// let userInput = prompt('')

// while(true){
//     if(userInput === '1'){
//         viewProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '2'){
//         buyProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '3'){
//         break;
//     } else {
//         console.log('Invalid input, please try again')
//         break;
//     }
// }

// Loop


// // Clean Inventory System

// let products = [
//     {
//         name: 'Dog Food (Dry)',
//         price: 100,
//         stock: 12,
//     },
//     {
//         name: 'Dog Food (Wet)',
//         price: 120,
//         stock: 25,
//     },
//     {
//         name: 'Cat Food (Dry)',
//         price: 110,
//         stock: 20,
//     },
//     {
//         name: 'Cat Food (Wet)',
//         price: 115,
//         stock: 23,
//     }
// ]



// function viewProducts(obj) {
//     console.log("Here's the list of our products: ")

//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name + ': ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }
// }


// function buyProducts(obj) {

//     for(let i = 0; i < obj.length; i++){
//         console.log('Enter ' + i + ' to buy ' + obj[i].name + ' for ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }

//     let selected = Number(prompt('Enter your choice: '))

//     if(obj[selected].stock <= 0){
//         console.log('Unfortunately, this product is out of stock, please try another product')
//         return
//     } else {

//         obj[selected].stock--

//         console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
//         return
//     }
// }

// console.log('Enter 1 to view products | Enter 2 to buy a product | Enter 3 to exit')

// let userInput = prompt('')

// while(true){
//     if(userInput === '1'){
//         viewProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '2'){
//         buyProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '3'){
//         break;
//     } else {
//         console.log('Invalid input, please try again')
//         break;
//     }
// }

// // Part 3

// // As you said, storing the object's value inside a variable isn't the correct way, it basically duplicates the real value inside the obj
// // instead of the REAL value, not duplicate it
// // So it should be this.balance += 100










// Day 9: map(), filter(), find(), and other array methodswoo

// I had to look up how the array methods work in yt lol

// // Exercise 1: Filter

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNumbers = numbers.filter((number) => {
//     return number = number % 2 === 0
// })

// console.log(numbers)
// console.log(evenNumbers)

// Question: What do you even call this (number) => { return }??
// Is that a function inside the numbers.filter?
// What arguments does .filter() should accept? Just a function only?
// In my case (number) => { return } is the function?
// Why does it look like this, is that aalways the case, or you can do the traditional one, its just that this is the preferred one?
// Traditional one: 

// numbers.filter(
//     function(number){
//         return number = number % 2 === 0
//     }
// )

// That works the same right? It's just that I am using arrow function on the first one? Should I always use arrow functions per array methods?



// Exercise 2: Map

// let prices = [100, 200, 300]

// const priceWithTax = prices.map((price) => {
//     return price = price + 10;
// })

// console.log(prices)
// console.log(priceWithTax)

// Can you also tell me the different types of array methods and its uses



// Exercise 3: Find

// let users = [
//   {name: "John", age: 20},
//   {name: "Anna", age: 25}
// ]

// const findAnna = users.find((user) => {
//     return user.name === 'Anna'
// })

// console.log(findAnna)




// Program 1: Smart Product Search

let products = [
    {
        name: 'Dog Food',
        price: 100,
        stock: 12,
    },
    {
        name: 'Cat Food',
        price: 120,
        stock: 25,
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
    }
]


// let userSearch = prompt('Search for a product: ')

// const findProduct = products.find((product) => {
//     return product.name.toLowerCase === userSearch.toLowerCase
// })

// Okay, this doesn't work properly, I think I need to loop in an array first

// for(let i = 0; i < products.length; i++){
//     const findProduct = products.find((product) => {
//         return product[i].name.toLowerCase === userSearch.toLowerCase
//     })

//     if(findProduct){
//         console.log('Found')
//     } else {
//         console.log('Not Found')
//     }
// }

// Well, I mean loop is kind of unnecessary atp because find is literally searching so..

// const findProduct = products.find((product) => {
//     return product.name.toLowerCase === userSearch.toLowerCase
// })

// if(findProduct === true){
//     console.log('Found')
//     console.log(findProduct)
// } else {
//     console.log('Not Found')
// }


// Let me try to fix this

// let userSearch = 'cat food (wet)'

// const findProduct = products.find((product) => {
//     return product.name.toLowerCase === userSearch.toLowerCase
// })

// console.log(findProduct)

// // if(findProduct === true){
// //     console.log('Found')
// //     console.log(findProduct)
// // } else {
// //     console.log('Not Found')
// // }


// Now, why is it returning the dog food even if the userSearch is cat food? I think it has something to do with getting the name 
// I think right now its getting the first index of the array, I need to get inside the object inside of the array to get it right

// let userSearch = 'Cat Food (Wet)'

// const findProduct = products.find((product) => {
//     return product.name === userSearch
// })

// console.log(findProduct)

// // if(findProduct === true){
// //     console.log('Found')
// //     console.log(findProduct)
// // } else {
// //     console.log('Not Found')
// // }

// Oh now it's working, so there was an issue on the to lower case shit???? Okayyy
// Let me do this again this time:

// let userSearch = prompt('Search for a product: ')

// // const findProduct = products.find((product) => {
// //     return product.name.toLowerCase === userSearch.toLowerCase
// // })

// // Oh man, the reason why it wasn't working is because I need a parenthesis, methods have parentheses while properties doesnt have them
// // toLowerCase isnt a property (I HAD TO USE GOOGLE GEMINI FOR THIS IM SORRY HEHE)

// const findProduct = products.find((product) => {
//     return product.name.toLowerCase() === userSearch.toLowerCase()
// })

// if(findProduct){
//     console.log(findProduct)
// } else {
//     console.log('Not Found')
// }


// QUIZ

// Q1: It's kind of similar but the thing is that map creates a new array of that specific function, meanwhile the for loop
//     just loops an array and then gets its infos inside the array, not recreate the array

// Q2: Afaik, filter() returns an array which is the same as map, but the thing is that, you can put conditions inside an array
//     so that only specific properties of that object is being fetched and then turned into an array

// Q3: find() returns a boolean value which determines whether that specific value is found inside that array or not

// Debug:

// let nums = [1,2,3]

// let result = nums.filter(function(n){
//     if(n % 2 === 0){
//         return n
//     }
// })

// console.log(result)
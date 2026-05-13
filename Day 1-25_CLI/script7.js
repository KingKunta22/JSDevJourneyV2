const prompt = require('prompt-sync') ();

// Alright let me try these new uhmm idk

// let fruits = ['apple', 'banana', 'mango', 'avocado']

// fruits.push('watermelon')

// console.log(fruits);

// fruits.pop('watermelon')

// console.log(fruits);
// console.log(fruits.includes('banana'))
// console.log(fruits.indexOf('apple'))






// // Exercise 1

// let languages = ['Javascript', 'C#', 'Python', 'PHP']

// // languages.push('C', 'C++', 'Rust')

// // console.log(languages)


// // Exercise 2

// languages.pop('Javascript', 'C#')

// console.log(languages)

// // Oh okay, so pop just pops or deletes the last value regardless of the value inside the ()?

// languages.pop();

// console.log(languages)




// Exercise 3 & 4

// let numbers = ['One', 'Two', 'Three', 'Four']

// console.log(numbers.includes('Two'))
// console.log(numbers.indexOf('Three'))
// console.log(numbers)

// Why is it not returning true or false then?

// So you have to console.log it, okay



// Program 1: Smart Search

// let vegetables = ['potato', 'carrot', 'lettuce', 'cabbage']
// let userInput = prompt('Look for a vegetable: ')

// function searchVeggie(arr, prompt){

//     if(arr.includes(prompt)){
//         console.log('Found')
//     } else {
//         console.log('Not Found')
//     }

// }

// searchVeggie(vegetables, userInput);




// Program 2: Cart System

// let cart = []
// console.log("Type and enter '1' if you want to add an item to your cart")
// console.log("Type and enter '2' if you want to remove the last item from your cart")
// console.log("Type and enter '3' if you want to view your cart")
// console.log("Type and enter '4' if you want to exit")

// let userInput = prompt('')

// function addItem(arr, req){

//     // req = prompt('Enter an item to cart: ')
//     // Can you explain how its better to not have the user input inside the function? Because the line above is clearly wrong but
//     // I wanna know why
//     arr.push(req)

//     return arr
// }

// function removeItem(arr){
//     let lastItem = arr.length - 1
//     console.log(arr[lastItem] + ' will be removed from the cart')
//     arr.pop()
// }

// function viewCart(arr){
//     console.log(arr)
// }

// // I could've just manually hard-coded the view cart and remove item functions but I wanna separate it and put them
// // inside a function to make it look cleaner

// // Alright, now I think I just need a loop to keep asking the user for inputs and then show them the cart


// for(let i = 0; i < 5; i++){

//     if(userInput === '1'){
        
//         let item = prompt('Enter an item to add to your cart: ')
//         addItem(cart, item)
//         console.log(cart)

//     } else if(userInput === '2'){

//         removeItem(cart)
//         console.log(cart)

//     } else if(userInput === '3'){

//         viewCart(cart)

//     } else if(userInput === '4'){

//         return

//     }

//     console.log("Type and enter '1' if you want to add an item to your cart")
//     console.log("Type and enter '2' if you want to remove the last item from your cart")
//     console.log("Type and enter '3' if you want to view your cart")
//     console.log("Type and enter '4' if you want to exit")
 
//     userInput = prompt('')

// }


// Okay this seems to be working but what should I put inside the condition on the for loop to keep it running?
// Ill just add an exit option (4)
// Well, that doesnmt fix it, I need a condition that returns true always

let cart = []
console.log("Type and enter '1' if you want to add an item to your cart")
console.log("Type and enter '2' if you want to remove the last item from your cart")
console.log("Type and enter '3' if you want to view your cart")
console.log("Type and enter '4' if you want to exit")

let userInput = prompt('')

function addItem(arr, req){

    // req = prompt('Enter an item to cart: ')
    // Can you explain how its better to not have the user input inside the function? Because the line above is clearly wrong but
    // I wanna know why
    arr.push(req)

    return arr
}

function removeItem(arr){
    let lastItem = arr.length - 1
    console.log(arr[lastItem] + ' will be removed from the cart')
    arr.pop()
}

function viewCart(arr){
    console.log(arr)
}

// I could've just manually hard-coded the view cart and remove item functions but I wanna separate it and put them
// inside a function to make it look cleaner

// Alright, now I think I just need a loop to keep asking the user for inputs and then show them the cart


// for(let i = 0; i < userInput; i++){

//     if(userInput === '1'){
        
//         let item = prompt('Enter an item to add to your cart: ')
//         addItem(cart, item)
//         console.log(cart)

//     } else if(userInput === '2'){

//         removeItem(cart)
//         console.log(cart)

//     } else if(userInput === '3'){

//         viewCart(cart)

//     } else if(userInput === '4'){
//         break
//     }

//     console.log("Type and enter '1' if you want to add an item to your cart")
//     console.log("Type and enter '2' if you want to remove the last item from your cart")
//     console.log("Type and enter '3' if you want to view your cart")
//     console.log("Type and enter '4' if you want to exit")
 
//     userInput = prompt('')

// }

// Doesn't work, I think I need a while loop for this because I can't determine how many times it loops (since it depends on teh user)

let i = 0

while(i < userInput){

    if(userInput === '1'){
        
        let item = prompt('Enter an item to add to your cart: ')
        addItem(cart, item)
        console.log(cart)

    } else if(userInput === '2'){

        removeItem(cart)
        console.log(cart)

    } else if(userInput === '3'){

        viewCart(cart)

    } else if(userInput === '4'){
        break
    }

    console.log("Type and enter '1' if you want to add an item to your cart")
    console.log("Type and enter '2' if you want to remove the last item from your cart")
    console.log("Type and enter '3' if you want to view your cart")
    console.log("Type and enter '4' if you want to exit")
    userInput = prompt('')
}


// Okay, that works, perfect!



// Q1: [1, 2, 3, 4]
// Q2: [10, 20]
// Q3: False
// Q4: 0

// DEBUG: 

let arr = [1,2,3];

if(arr.includes(2)){
    console.log("Found");
}
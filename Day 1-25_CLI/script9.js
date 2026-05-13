const prompt = require('prompt-sync') ()

// Exercise 1

let block = [
    {
        name: 'student1',
        age: 22
    },
    {
        name: 'student2',
        age: 24
    },
    {
        name: 'student3',
        age: 19
    }
]

// // Exercise 2

// for(let i = 0; i < block.length; i++){
//     console.log(block[i].name)
// }

// Exercise 3

// function findOldest(obj){
//     let i = 0;
//     let age = Number(obj[0].age)

//     while(i < obj.length){
//         if(age < obj[i].age){
//             age = obj[i].age
//         }
//         i++
//         // I actually missed the 'i++' block for like 5 mins wondering why it's not working lol
//     }

//     console.log('The oldest student is ' + age + ' years old')
//     // I wonder how to get that specific student with that age tho?
// }

// findOldest(block)

// // Exercise 4

// function countStudents(obj){
//     let i = 0
//     while(i < obj.length){
//         i++
//     }

//     console.log('The number of students is ' + i)
// }

// countStudents(block)





// Program 1: Product List System

let products = [
    {
        name: 'Dog Food (Dry)',
        price: 100,
        stock: 12
    },
    {
        name: 'Dog Food (Wet)',
        price: 120,
        stock: 25
    },
    {
        name: 'Cat Food (Dry)',
        price: 110,
        stock: 20
    },
    {
        name: 'Cat Food (Wet)',
        price: 115,
        stock: 23
    }
]


// function printProducts(obj){
//     console.log('List of our products are: ')
//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name)
//     }
// }

// printProducts(products)

// function checkProductPrices(obj){
//     console.log('Here are the prices for each products: ')
//     for(let i = 0; i < obj.length; i++){
//           console.log(obj[i].name + ': ₱' + obj[i].price)
//     } 
// }

// checkProductPrices(products)

// function checkProductStocks(obj){
//     console.log('Here are the stocks of each products');

//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name + ' has ' + obj[i].stock + ' products left')
//     }

// }

// checkProductStocks(products)




// Program 2: Mini Inventory System

console.log('Enter 1 to view products | Enter 2 to purchase a product | Enter 3 to exit')

// This is the same as the first program, but I'll rewrite it
function viewProducts(obj){
    console.log("Here's the list of our products: ")
    for(let i = 0; i < obj.length; i++){
        console.log(obj[i].name + ' ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
        // I am gonna put stocks and its prices here so that I can check if it deducts every purchase
    }
}


// function buyProducts(obj){
//     console.log('Which product do you wanna buy?')
//     for(let i = 0; i < obj.length; i++){
//         console.log('Enter ' + i + ' to purchase ' + obj[i].name + ' (₱' + obj[i].price + ')')
//     }

//     let userPurchase = prompt('Enter your choice: ')
        
//     if(obj[Number(userPurchase)].stock === 0){
//         console.log('Unfortunately, this product is out of stock')
//     }

//     if(userPurchase === '0'){
//         obj[0].stock--
//         console.log('Congratulations, you successfully purchased ' + obj[0].name + ' for ₱' + obj[0].price) 
//     } else if(userPurchase === '1'){
//         obj[1].stock--
//         console.log('Congratulations, you successfully purchased ' + obj[1].name + ' for ₱' + obj[1].price) 
//     } else if(userPurchase === '2'){
//         obj[2].stock--
//         console.log('Congratulations, you successfully purchased ' + obj[2].name + ' for ₱' + obj[2].price) 
//     } else if(userPurchase === '3'){
//         obj[3].stock--
//         console.log('Congratulations, you successfully purchased ' + obj[3].name + ' for ₱' + obj[3].price) 
//     } else {
//         console.log('Invalid input, please try again')
//     }
// }

function buyProducts(obj){
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

let userInput = prompt('')

while(true){
    if(userInput === '1'){
        viewProducts(products)
        userInput = prompt('')
    } else if(userInput === '2'){
        buyProducts(products)
        userInput = prompt('')
    } else {
        break
    }
}

// Right now, it works, but I feel like there's a much easier way to do this, specifically this part:

    // if(userPurchase === '0'){
    //     obj[0].stock--
    //     console.log('Congratulations, you successfully purchased ' + obj[0].name + ' for ₱' + obj[0].price) 
    // } else if(userPurchase === '1'){
    //     obj[1].stock--
    // } else if(userPurchase === '2'){
    //     obj[2].stock--
    // } else if(userPurchase === '3'){
    //     obj[3].stock--
    // } else {
    //     console.log('Invalid input, please try again')
    // }

    // Okay, let me try it and rewrite it (second one uncommented)

    // Alright, that seems to worrk lol




// Q1: 2
// Q2: 2
// Q3: 20
// DEBUG:

// let arr = [
//     {name: "A"},
//     {name: "B"}
// ];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].name);
// }
const prompt = require('prompt-sync')()

// // Exercise 1

// let newObj = {
//     name: 'Leo',
//     age: 22,
//     course: 'BSIT'
// }

// console.log(newObj)



// // Exercise 2

// console.log(newObj.name)
// console.log(newObj.age)
// console.log(newObj.course)



// // Exercise 3

// newObj.age = 26

// console.log(newObj.age)

// // Exercise 4

// newObj.school = 'Asian College of Technology'

// console.log(newObj)


// // Program 1: User Profile System


// let person = {
//     name: 'Bob',
//     age: 24,
//     city: 'Cebu City'
// }

// // FYM UPDATED AGE, DO I NEED TO USE THE OBJ I CREATED ABOVE?

// console.log('Hello ' + person.name + '!')
// console.log('You are ' + person.age + ' years old')

// // Actually, I am confused with your request, do I need to ask the user the infos or what???
// // Nvm, I'll just do both because above seems to look too easy

// let userName = prompt('Enter your name: ')
// let userAge = Number(prompt('Enter your age: '))
// let userCity = prompt('Enter the city you live in: ')

// let user1 = {
//     name: userName,
//     age: userAge,
//     city: userCity
// }

// console.log('Hello ' + user1.name + '!')
// console.log('You are ' + user1.age + ' years old')






// Program 2: Product System

let petFood = {
    name: 'Dog Food',
    price: 100,
    stock: 12
}

// Wow, your instructions today seem a bit off, like its too geenral, not specific, but whatever


function productInfo(product){
    productName = product.name
    productPrice = "₱" + product.price
    productStock = product.stock

    console.log('Product Name: ' + productName)
    console.log('Product Price: ' + productPrice)
    console.log('Product Stock: ' + productStock)
}


console.log("Here's an example of our product: ")
productInfo(petFood)

console.log('Enter 1 to purchase a product')
console.log('Enter 2 to exit')
let userInput = prompt("")


while(true){
    if(userInput == '1'){
        petFood.stock--
        // Then print product info
        productInfo(petFood)
        userInput = prompt('Purchase again? 1 for yes 2 for no')
    } else if(userInput == '2'){
        break;
    } else {
        console.log('Input invalid')
    }
}


// This looks ugly but it's working and I awas also confused about your instructions, so idk, this works with what u said


// Q1: 1
// Q2: 20
// Q3: "John"
// Debug: 
// let user = {
//     name: "John",
//     age: 20
// }
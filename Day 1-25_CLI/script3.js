const prompt = require('prompt-sync') ();

// DAY 2 FIX

// // PROGRAM 1

// const correctUsername = 'admin'
// const correctPassword = '1234'

// function login(){
//     let username = prompt('Username: ')

//     if(username === correctUsername){

//         let password = prompt('Password: ')

//         if(password === correctPassword){
//             console.log('Login Successful')
//         } else {
//             console.log('Invalid Credentials')
//             return
//         }

//     } else {
//         console.log('Invalid Credentials')
//         return
//     }
// }

// login();


// // PROGRAM 2  

// const num1 = Number(prompt('Enter a number: '))
// const num2 = Number(prompt('Enter another number: '))
// const num3 = Number(prompt('Enter a last number: '))

// function checkHighest(num1, num2, num3){
//     if(num1 > num2 && num1 > num3) {
//         console.log(num1 + ' is the highest number of all numbers')
//     } else if(num2 > num1 && num2 > num3) {
//         console.log(num2 + ' is the highest number of all numbers')
//     } else {
//         console.log(num3 + ' is the highest number of all numbers')
//     }
// }

// checkHighest(num1, num2, num3);





// DAY 3



// // Exercise 1

// function add(a, b){
//     return a + b;
// }

// let result = add(6, 7);

// console.log(result)

// // I know this is not included but let me try this out

// const num1 = Number(prompt('Enter a number: '))
// const num2 = Number(prompt('Enter another number: '))

// let sum = add(num1, num2)

// console.log(sum);


// // Exercise 2

// let numInput = Number(prompt('Enter a number: '))

// function isOdd(num) {
//     if(num % 2 === 0){
//         return false
//     } else {
//         return true
//     }
// }

// const checkNum = isOdd(numInput)

// console.log(checkNum)



// // Exercise 3

// let userFirstName = prompt('First Name: ')
// let userLastName = prompt('Last Name: ')

// function getFullName(firstName, lastName){
//     let fullName = 'Welcome ' + firstName + ' ' + lastName + ', nice to meet you!'

//     return fullName
// }

// let getUserName = getFullName(userFirstName, userLastName)

// console.log(getUserName);


// // Exercise 4

// let userGrade = prompt('Enter your grade: ')

// function checkGrade(grade){
//     if(grade >= 90){
//         return 'Your grade is A'
//     } else if(grade >= 80){
//         return 'Your grade is B'
//     } else if(grade >= 70){
//         return 'Your grade is C'
//     } else {
//         return 'Your grade is F. Try again next semester'
//     }
// }

// const checkUserGrade = checkGrade(userGrade)

// console.log(checkUserGrade)




// Program 1: Smart Calculator

// let userNum1 = Number(prompt('Enter a number: '))
// let userNum2 = Number(prompt('Enter another number: '))

// function sum(num1, num2){
//     return num1 + num2
// }

// function difference(num1, num2){
//     return num1 - num2
// }

// function product(num1, num2){
//     return num1 * num2
// }

// function quotient(num1, num2){
//     return num1 / num2
// }


// I DONT KNOW WHY YOU ASKED ME TO CREATE FUNCTIONS FOR EACH OPERATIONS BUT HERES AN EASIER ONE 

// function calculate(num1, num2){
//     let sum = num1 + num2
//     let diff = num1 - num2
//     let prod = num1 * num2
//     let quot = num1 / num2

//     return sum, diff, prod, quot
// }

// let calculateUserNum = calculate(userNum1, userNum2)

// console.log(calculateUserNum)

// OH OKAY, THE REASON WHY I HAD TO CREATE FUNCTIONS PER OPERATOR IS BECAUSE I CAN ONLY RETURN ONE SHIT OR ONE VALUE IN A FUNCTION RIGHT?
// SO THE FIRST ONE IS CORRECT ONE THEN LOL, SO

// let calculateSum = sum(userNum1, userNum2)
// let calculateProd = product(userNum1, userNum2)
// let calculateDiff = difference(userNum1, userNum2)
// let calculateQuot = quotient(userNum1, userNum2)

// console.log('The sum of two numbers is ' + calculateSum)
// console.log('The difference of two numbers is ' + calculateDiff)
// console.log('The product of two numbers is ' + calculateProd)
// console.log('The quotient of two numbers is ' + calculateQuot)

// IDK IF THIS IS THE CORRECT ONE BUT AFAIK THIS IS CORRECT

// NOW THIS IS ACTUALLY INCORRECT LOL, LET ME RETRY BECAUSE I HAVENT READ THE LAST PART WHERE U SAID
    // Then:
    // Ask user:

    // number1
    // number2
    // operation (+, -, *, /)

    // Call correct function.

// SO LET ME REDO EVERYTHING:


// let userNum1 = Number(prompt('Enter a number: '))
// let userNum2 = Number(prompt('Enter another number: '))
// let userOperator = prompt('Enter an operation (+, -, *, /): ')

// function sum(num1, num2){
//     return num1 + num2
// }

// function difference(num1, num2){
//     return num1 - num2
// }

// function product(num1, num2){
//     return num1 * num2
// }

// function quotient(num1, num2){
//     return num1 / num2
// }

// let userSum = sum(userNum1, userNum2)
// let userDiff = difference(userNum1, userNum2)
// let userProd = product(userNum1, userNum2) 
// let userQuot = quotient(userNum1, userNum2)

// if(userOperator === '+') {
//     console.log(userSum)
// } else if(userOperator === '-') {
//     console.log(userDiff)
// } else if(userOperator === '*') {
//     console.log(userProd)
// } else if(userOperator === '/') {
//     console.log(userQuot)
// } else {
//     console.log('Invalid inputs, [lease try again.')
// }

// SO FAR, THIS IS WHAT I UNDERSTOOD, ITS WORKING BUT IDK I THINK IM NOT DOING IT RIGHT BECAUSE IM USING CONSOLE INSTEAD OF RETURN RIGHT?


// Program 2: Even/Odd System

// let userNum = Number(prompt('Enter a number: '))

// function isOdd(num) {
//     if(num % 2 === 0){
//         return 'Even'
//     } else {
//         return 'Odd'
//     }
// }

// let checkNum = isOdd(userNum)

// console.log(checkNum)



// Q1: 5
// Q2: 5
// Q3: Invalid argument
// Q4: 

// function multiply(a, b) {
//   const result = a * b;
// }

// let answer = multiply(3, 4);
// console.log(answer);

// FOR Q4, There seems to be no problem, maybe the usage of let? Idk...
// Oh actually, I can see it now, my final answer for Q4 is

function multiply(a, b) {
  return a * b;
}

let answer = multiply(3, 4);
console.log(answer);

// YEP, THAT SHOULD BE IT.

// And I also have one last question, just out of curiosity
// What do you call it when you put the declare a variable on a function, 
// then call the variable through console.log (The one im doing all along, on this specific day)
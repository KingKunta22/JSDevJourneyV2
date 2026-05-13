const prompt = require('prompt-sync') ()

// // EXERCISE 1

// let num = Number(prompt('Enter a number: '));

// function checkNum(num){
//     if(num == 0){
//         console.log('Your number is neither positive or negative');
//     } else if (num > 0){
//         console.log('Your number is positive')
//     } else {
//         console.log('Your number is negative')
//     }
// }

// checkNum(num);

// // IT WAS NOT WORKING BEFORE I CHANGE num = 0 to num == 0

// // EXERCISE 2

// let num2 = Number(prompt('Enter another number: '))

// function checkNum2(num2){
//     if(num2 % 3 == 0 && num2 % 5 == 0){
//         console.log('num2 is divisible by 3 and 5')
//     } else if (num2 % 5 == 0){
//         console.log('num2 is divisible by 5')
//     } else if (num2 % 3 == 0){
//         console.log('num2 is divisible by 3')
//     }
// }

// checkNum2(num2);

// // EXERCISE 3

// let score = Number(prompt('Enter your score: '))

// function checkScore(score){
//     if(score >= 90){
//         console.log('Your grade is A')
//     } else if(score >= 80){
//         console.log('Your grade is B')
//     } else if(score >= 70){
//         console.log('Your grade is C')
//     } else {
//         console.log('You failed :(')
//     }
// }

// checkScore(score);



// // PROGRAM 1

// const username = 'admin';
// const password = '1234';

// function login(){
    
//     let username = prompt('Enter your username: ');

//     if(username == 'admin'){
        
//         let password = prompt('Enter your password: ')
//         if(password == '1234'){
//             console.log('Congratulations, you have logged in!')
//         } else {
//             console.log('Incorrect password, try again')
//             return
//         }

//     } else {
//         console.log('Incorrect username, try again!')
//         return
//     }
    
// }

// login();


// // PROGRAM 2

// let input1 = Number(prompt('Enter a number: '));
// let input2 = Number(prompt('Enter a second number: '));
// let input3 = Number(prompt('Enter a third number: '));

// function checkHighest(input1, input2, input3){

//     if(input1 > input2){
//         if(input1 > input3) {
//             console.log(' 1 is the highest number of all numbers');
//         } else {
//             console.log(' 3is the highest number of all numbers')
//         }
//     }

//     if(input2 > input1){
//         if(input2 > input3){
//             console.log(' 2 is the highest number of all numbers')
//         } else {
//             console.log(' 3 is the highest number of all numbers')
//         }
//     }
// }

// checkHighest();


// Q1: FALSE
// Q2: FALSE
// Q3: FALSE
// Q4/DEBUG: 

let num = Number(prompt("Enter number: "));

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}
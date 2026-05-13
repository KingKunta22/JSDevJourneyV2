const prompt = require('prompt-sync')()

// DAY 4

// Exercise 1

// for(let i = 1; i < 11; i++){
//     console.log(i);
// }


// Exercise 2

// for(let i = 0; i < 20 && i % 2 === 0 ; i++){
//     console.log(i);
// }


// Well, that doesn't work, let me try again

// for(let i = 1; i < 21; i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// let me do that with while loop

// let i = 1;

// while (i < 21){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     i++
// }


// Exercise 3

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }


// Exercise 4 (Idk if my comprehension is really bad but you prolly need to explain it more XD)
//              like, do I need to add 1+2+3+4....+100? Afaik thats what u want so/...

// for(let i = 1; i < 100; i++){
//     console.log(i)
//     i += i;
// }

// ye idk what im doing let me try again

// for(let i = 0; i < 100; i++){
//     i = i + i
//     console.log(i)
// }


// OI CAMNT WTFFFFF


// let i = 1

// while(i < 100){
//     console.log(i)

//     i = i + i

//     console.log(i)

//     i++

//     console.log(i)
// }

// YEA I CANT FUCKING DO THIS ITS LIKE 20 MINS OF FIGURING IT OUT

// for(let i = 1; i < 101; i++){
//     console.log(i)
//     let sum = i + i
//     console.log(i)
//     console.log(sum)
// }






// Program 1: Multiplication Table

// let userNum = Number(prompt('Enter a number: '))

// for(i = 1; i < 11; i++){

//     let result = i * userNum
//     console.log(result)
// }

// NOW THIS ONES A LOT EASIER THAN THE ONE YOU CALLED EXERCISE (4)



// Program 2: Number Guessing Game

const secretNumber = 7;

// let guessNum = Number(prompt('Guess the secret number: '));

// for(i = guessNum; i > secretNumber; ){

//     if(guessNum === secretNumber){
//         console.log('Correct!')
//     } else if(guessNum < secretNumber){
//         console.log('Too low')
//     }
//     guessNum = Number(prompt('Guess another number: '))

// }

// Actually, let me rewrite it with while loop, seems a bit too tricky

// let guessNum = Number(prompt('Guess the secret number: '));

// while(guessNum > secretNumber || guessNum < secretNumber) {

//     if(guessNum > secretNumber){
//         console.log('Too high');
//         let guessNum = Number(prompt('Guess the secret number: '));
//     } else if(guessNum < secretNumber){
//         console.log('Too low');
//         let guessNum = Number(prompt('Guess the secret number: '));
//     } else {
//         console.log('Correct!')
//     }
// }

// Ye idk why its not working properly, it seems to be getting the first guessNum variable only

// let guessNum = Number(prompt('Guess the secret number: '));

// while(guessNum > secretNumber || guessNum < secretNumber) {

//     if(guessNum > secretNumber){
//         console.log('Too high');
//         guessNum = Number(prompt('Guess the secret number: '))
//     } else if(guessNum < secretNumber){
//         console.log('Too low');
//         guessNum = Number(prompt('Guess the secret number: '))
//     }
// }

// console.log('Correct!')

// It's working but it doesnt show the correct console.log if i guess it right the first time

// Oh nevermind, I just moved the console log outside the while loop since it only loops if its wrong






// Program 3: Logic Trainer

// for(i = 1; i < 15; i++){
//     console.log('*');
// }


// Alright since I cant do that, let me try the exercise 2 again XDD

// Exercise 2:

// let i = 1

// while(i < 100){
//     let num = i
//     console.log(num + i)
//     i++
// }

// YEA I CANT


// WHATEVER BRO


// Q1:
//     1
//     2
//     3


// Q2:
//     0
//     1
//     2

// Q3: 4

// Q4: 
//     Number 1
//     Number 2
//     Number 3
//     Number 4
//     Number 5
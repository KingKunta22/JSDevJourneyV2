// const x = 3;
// const y = 5;

// function addition(x, y){
//     total = x + y;
//     return total;
// }
// addition();

// PROMPT FUNCTION USING PROMPT-SYNC

const prompt = require('prompt-sync') ()

// const name = prompt('Name: ');

// const age = prompt('Age: ');

// console.log("Hello " + name + "! Your age is " + age);

// const a = '24.123123123qwrqwrqwrqwrqwrqw'
// const b = 56

// console.log(a.toString() + b);


// console.log(undefined == null)

// // EXERCISE 1 

// let name = prompt('Name: ')
// let age = prompt('Age: ')
// isStudent = true;

// console.log("Your name is " + name + ", and you are " + age + " years old. Are you a student? " + isStudent);

// // EXERCISE 2


// function operators(num1, num2) {
//     let sum = num1+num2;
//     let diff = num1-num2;
//     let product = num1*num2;
//     let quotient = num1/num2;

//     console.log('The sum is ' + sum);
//     console.log('The difference is ' + diff);
//     console.log('The product is ' + product);
//     console.log('The quotient is ' + quotient);
// }

// console.log(operators(10, 4));

// // EXERCISE 3

// let a = 5;
// let b = 10;

// console.log(a, b);

// function swapVar() {
//     a = 10;
//     b = 5;
//     console.log(a, b);
// }

// console.log(swapVar());

// // PROGRAM 1: SIMPLE CALCULATOR

// let num1 = prompt('Give me a number: ')
// let num2 = prompt('Give me another number: ')

// function results(num1, num2){
//     sum = num1 + num2;
//     diff = num1 - num2;
//     prod = num1 * num2;
//     quotient = num1 / num2;

//     console.log('The sum is ' + Number(sum));
//     console.log('The difference is ' + Number(diff));
//     console.log('The product is ' + Number(prod));
//     console.log('The quotient is ' + Number(quotient));
// }

// console.log(results(num1, num2))

// PROGRAM 2: AGE CHECKER

// let age = prompt('Enter your age: ');

// function checkAge(age){
//     if(parseInt(age) >= 18) {
//         console.log('You are an adult!')
//     } else {
//         console.log('You are a minor!');
//     }
// }

// console.log(checkAge(age));

// // QUIZ + DEBUGGING

// Q1: 7 is the output
// Q2: 15 is the output
// Q3: Theres no arguent or parameters inside the test function

// Debug Code: it should be let sum = parseInt(num1) + parseInt(num2);


// REWRITE THE SWAP
    let a = 5;
    let b = 10;

    function swapVar(a, b) {
        let tempVar = a;
        a = b;
        b = tempVar;

        return{a, b};
    }

    console.log(swapVar());


// REDO SIMPLE CALCULATOR

let num1 = Number(prompt('Give me a number: '));
let num2 = Number(prompt('Give me another number: '));

function result(numba1, numba2) {
    let sum = numba1 + numba2;
    let diff = numba1 - numba2;
    let product = numba1 * numba2;
    let quotient = numba1 / numba2;

    if(num2 == 0) {
        console.log('Give another number instead of zero you cunt!')
    } else {
        console.log('Total is ' + sum);
        console.log('Difference is ' + diff);
        console.log('Product is ' + product);
        console.log('Quotient is ' + quotient);
    }
}

result(num1, num2)
// Alright then, let me fix the wrongs I did in day 4 before proceeding with the next day

const prompt = require('prompt-sync')();



// Exercise 2 (Better Version)


// for(i = 2; i < 21; i+=2) {
//     console.log(i);
// }


// Exercise 4 (SUM 1-100)

// So just use a container


// let total = 0

// for(i = 1; i < 101; i++){
//     total = total + i;
// }

// console.log(total);

// So I get it, but make the hints next time less obvious
// Or yk, you can just explain to me how total = total + i works XD





// Program 1: Multiplication Table (Better Version)

// let userNum = Number(prompt('Enter a number: '))

// for(i = 1; i < 11; i++){

//     let prod = userNum * i
//     console.log(userNum + ' x ' + i + ' = ' + prod)
// }




// Program 2: Guessing Game (Better Version)

// let secretNum = 6
// let guessNum = Number(prompt('Guess the secret number: '))

// if(guessNum != secretNum){
//     for(i = 1; guessNum > secretNum; i++){
//         console.log('Too high')
//         guessNum = Number(prompt('Guess another number: '))
//     }

//     for(i = 1; guessNum < secretNum; i++){
//         console.log('Too low')
//         guessNum = Number(prompt('Guess another number: '))
//     }
// } else {
//     console.log('Correct!')
// }

// Yea, I think it's easier and more understandable to use while loop for this case XD

// let secretNum = 6
// let guessNum = Number(prompt('Guess the secret number: '))

// while(guessNum != secretNum) {
//     if(guessNum > secretNum){
//         console.log('Too high')
//         guessNum = Number(prompt('Guess another number: '))
//     } else if(guessNum < secretNum){
//         console.log('Too low')
//         guessNum = Number(prompt('Guess another number: '))
//     }
// }

// console.log('Correct!')

// Woah, I actually got it right this time
// I thought I can't make it so I looked for hints on my last one XDD
// How would u even do this with for loop lol


// Program 3: Pattern

// let star = ""

// for(i = 1; i < 6; i++){
//     // I was about to write i < 15 at the conditional inside the loop 
//     // because my thought process goes like "I need the total of stars" XD
//     star = star + "*"
//     console.log(star);
// }

// Alright, I got it, but I js need something to make me understand how the star = star + * works
// would it be different if I use star + * = star, or in programmiung you always have to follow that format?
// Proceed to next day after review and answer










// DAY 5: Arraysssssssssss



// Exercise 1

// let firstArray = [1, 2, 3, 4, 5];

// for(let i = 0; i < firstArray.length; i++){
//     console.log(firstArray[i])
// }

// Question: if looping in an array, we need to make sure let i = 0 right? so we can get the index[0]?




// Exercise 2

// let sum = 0
// let array = [10, 20, 30, 40]

// for(let i = 0; i > array.length; i++){
//     sum = sum + array
// }

// console.log(sum);


// Yea, I think I need to do a while loop for this one


// let sum = 0
// let array = [10, 20, 30, 40]
// let i = 0

// while(i < array.length){
//     sum = sum + array[i]    
//     i++
// }

// console.log(sum)


// 0oohhh, so while loop is it, youre right, thought I didn't know how many times to loop since its a sum
// I should've just used while loop from the start, but nvm, actually can u do this with for loop??




// Exercise 3

// let array = [5, 12, 8, 20, 3]
// let container = 0;
// let i = 0

// while(i < array.length) {

//     container = container + array[i]
//     if(array[i] > container){
//         console.log('Highest number is ' + array[i])
//     }
// }

// Yea, this confuses me, lemme try again


// let array = [5, 12, 8, 20, 3]

// for(let i = 0; i < array.length; i++){
    
// }

// Yea, im confused let me watch a yt tutorial first
// I actually didnt watch a yt tutorial, i just looked for arrays basics but i still cant do it, letm e try

// let array = [5, 12, 8, 20, 3]
// let prevIndex = 0

// for(let i = 0; i < array.length; i++){
//     if(prevIndex > array[i]){
//         array[i] = prevIndex;
//     } else {
//         prevIndex = array[i]
//     }

//     // console.log(prevIndex)
// }

// // Okay wow, I am actually figuring it out wtf

// console.log(prevIndex)

// Oh wow, I just took a break for like 16 hours and then I figured it out when I came back lol






// Exercise 4


// let array = [1, 2, 3, 4, 5, 6] 
// let evenNums = 0

// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         evenNums++
//     }
// }

// console.log(evenNums)

// Woah, I didnt even sweat this time, I just need to use my brain and use a container for all of the indexes inside the array through loops









// Program 1: Student Grades


// let grades = [85, 90, 78, 92, 88]
// let totalGrade = 0

// for(let i = 0; i < grades.length; i++){

//     totalGrade += grades[i]

//     console.log(grades[i])

// }

// let avgGrade = totalGrade / grades.length

// console.log(avgGrade)






// Program 2: Search System

// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')

// for(let i = 0; i < array.length; i++){
//     if(userInput === array[i]){
//         console.log('Found')
//     } else {
//         console.log('Not Found')
//     }
// }

// Well, this works but it's case-sensitive and it loops thrice

// for(let i = 0; i < array.length; i++){
//     if(userInput === array[i]){
//         console.log('Found')
//     } else if(userInput !== array[i]) {
//         return
//     } else {
//         console.log('Not Found')
//     }
// }

// Well this looks really stupid, how do I continue the loop until it finds the correct one without it activating the else bracket

// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         result = 'Found'
//     } else {
//         result = 'Not Found'
//     }
// }

// Okay this time im using a container, which I think is redundant but should work

// console.log(result)

// Bruh why is it only returning not found tho

// let array = ["apple", "banana", "mango"]
// let userInput = String(prompt('Find a fruit: '))
// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         console.log(userInput)
//         console.log(array[i])
//         result = 'Found'
//     } else {
//         console.log(userInput)
//         console.log(array[i])
//         result = 'Not Found'
//     }
// }

// console.log(result)


// So, its the same, I think I need to convert the userInput to string


// Yea so the string is not the problem, it shoudl be the condition, let me try again

// Let me try to reverse the condition, see if it works

// let array = ["apple", "banana", "mango"]
// let userInput = String(prompt('Find a fruit: '))
// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput !== array[i]){
//         result = 'Not Found'
//     } else {
//         result = 'Found'
//     }
// }

// console.log(result)

// Bruh, when I console log it, it shows that the userinput and array[i] has the same values but it doesnt get accepted as similar or same

// I tried loosening the strict condition using == but it still doenst work


// let array = ["apple", "banana", "mango"]
// let userInput = String(prompt('Find a fruit: '))
// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput !== array[i]){
//         result = 'Not Found'
//     } else {
//         result = 'Found'
//     }
//     console.log(result)
// }

// Wait, hol up, its now returning found, is it because I put it inside the fucking for loop or what? Whats the difference tho?

// Oh okay, so I kinda see it, it kinda replaces the Found to Not Found because of the alst result

// So even if I found the value correctly, it still returns Not Found because the value is replaced by the last result

// Okay let me try again

// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         result = 'Found'
//         console.log(result)
//         return
//     } else {
//         result = 'Not Found'
//         console.log(result)
//     }
// }

// Well, I have some progress but it keeps on console log thrice so elt me try again


// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = ""

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         result = 'Found'
//         return result
//     } else {
//         result = 'Not Found'
//     }
// }

// console.log(result)

// So I just need one console log, and not put it inside the loop but how do I stop the loop once it's found so it doesnt replace the value?

// If I use return, it doesn't even show the console outside the loop, so I am confused

// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = "Not Found"

// for(let i = 0; i < array.length; i++){

//     if(userInput !== array[i]){
//         result = 'Not Found'
//     } else {
//         result = 'Found'
//     }
// }

// console.log(result)

// Well ,still doesnt work

// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = "Found"

// for(let i = 0; i < array.length; i++){

//     if(userInput !== array[i]){
//         result = 'Not Found'
//     } else {
//         result = 'Found'
//     }
// }

// console.log(result)

// Again, it stil doesn't work, I want it to stop the loop once it finds the fruittttt so thhe result value doesnt get replaceddd

// What if I try it with boolean values


// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = false

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         result = true
//     }
// }

// console.log(result)

// WAIT, HOW DOES THIS WORK????????????????????????? IS IT BECAUSE THE BOOLEAN VALUES CANT BE REPLACEDD OR WHAT?

// IS THE ELSE BRACKET THE PROBLEM ALL ALONG??????? OMG

// let array = ["apple", "banana", "mango"]
// let userInput = prompt('Find a fruit: ')
// let result = 'Not Found'

// for(let i = 0; i < array.length; i++){

//     if(userInput === array[i]){
//         result = 'Found'
//     }
// }

// console.log(result)

// Oky, what the hell, I finally figured it out but damn that was slow

// Quiz + Debugging

// Q1: 20
// Q2: 2
// Q3: undefined
// Q4: 
//    10
//    20
//    30

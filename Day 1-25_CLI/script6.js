const prompt = require('prompt-sync')();

// Exercise 1

// function getMax(arr){
//     let max = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max;
// }



// Exercise 2 

// function getEven(arr){
//     let evenNums = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr % 2 === 0){
//             evenNums++
//         }
//     }

//     return evenNums;
// }

// Let me actually try this

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// getMax(newArr)
// getEven(newArr)

// Well, it's not working, but why?

// Yea, idk but afaik, the functions are correct, it just doesnt return anything XD




// Exercise 3

// function findNumber(arr, target){

//     // I assume target = the user prompt or needed number to search
//     let num = target

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return true;
//         }
//     }

//     return false
// }







// Exercise 4

// function reverseArray(arr){
    
//     let reverse = ''

//     for(let i = 0; i < arr.length; i++){
//         reverse = arr[i]
//     }

//     return reverse
// }

// This one just returns arr[0], arr[1], arr[2],...

// Okay, this one's kinda tricky, I just need to loop from arr[lastIndex] to arr[firstIndex] 

// Or basically, get the last index to deduct it 1 every loop

// function reverseArray(arr){
    
//     let reverse = []

//     for(let i = arr.length; i >= arr.length - 1; i++){
//         reverse = arr[i] - 1
//     }

//     return reverse
// }

// So let's say arr = [a, b, c, d, e]
// The second function should return something like:

// i = 5
// it's gonna return arr[5] which is e
// acc, not e, but undefined, so we need to -1
// can u acc do this : reverse = arr[i] - 1
// Idk, this one should work because it gets the last index from array to the first one (0)

// Yep, that should work, turn the reverse to an empty array and used >= instead of >




// // Program 1: Student Analyzer

// let grades = [85, 90, 78, 92, 88]

// function getAverage(arr){

//     let total = 0

//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     let avg = total / arr.length

//     return avg;
// }

// console.log(getAverage(grades));

// I still don't get why it doesn't work
// Oh so I actually asked google gemini to figure out why its not showing
// and its because im not using console hehe

// Okay now its working but let me try again with my other functions, actually, im gonna rewrite everything so that you dont get confused
// by the progress


// Exercise 1

function getMax(arr){
    let max = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

// Exercise 2 

function getEven(arr){
    let evenNums = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNums++
        }
    }

    return evenNums;
}

// Exercise 3

function findNumber(arr, target){

    let num = target

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return true;
        }
    }

    return false
}

// Exercise 4

function reverseArray(arr){
    
    let reverse = []

    // for(let i = arr.length; i >= arr.length - 1; i++){
    //     // console.log(i > arr.length - 1) -> This returns true so the condition is correct
    //     // Now, the problem is that it returns infinitely
    // }

    // Yea, I don't see any diffference, same bugs and everything because im using same logic xd

    // Let me try it with while loop and see if it makes a difference

    // let i = arr.length;
    // while(i > arr.length - 1){
    //     console.log(true)
    // }

    // Let me try again

    // for(let i = 0; i < arr.length; i++){
    //     // I am just using the common for statement since its gonna loop the same amount of times even if reverse
    //     let testArr = arr[i] + (arr.length - 1);
    //     console.log(testArr)
    // }

    // Now, I am getting some progress lol

    // for(let i = 0; i < arr.length; i++){
    //     let totalIndex = arr.length - 1
    //     reverse[totalIndex];
    //     console.log(reverse)
    // }

    // Im trying to get the last index through let totalIndex = arr.length - 1
    // and then assign it to a variable
    // but idk why its returning []
    // let totalIndex = arr.length;
    // for(let i = 0; i < arr.length; i++){
    //     console.log(totalIndex)
    //     totalIndex = totalIndex - 1
    // }

    // Woahhhh ,getting some progress nowwwwwwwwwwwww, I just put the variable totalIndex outside the loop and then decremented it
    // everytime in the loop, now all I need is to replace the reverse indexes to the totalIndexx value
    // This hsould be it:
    
    // let totalIndex = arr.length;
    // for(let i = 0; i < arr.length; i++){
    //     totalIndex = totalIndex - 1
    //     reverse[totalIndex] = arr[totalIndex]
    // }

    // Bruh why is it not reverseeedddddddddd, im getting index 5 first rightt????

    // let totalIndex = arr.length;
    // for(let i = 0; i < arr.length; i++){
    //     totalIndex = totalIndex - 1
    //     console.log(arr[totalIndex]);
    // }

    // Oh okay, so its just correct, but its getting the reverse from the reverse array as well ,  so let me fix this:

    let totalIndex = arr.length;
    for(let i = 0; i < arr.length; i++){
        totalIndex = totalIndex - 1
        reverse[i] = arr[totalIndex]
    }

    // OH MY GOD IM LITERALLYYYYYYYYYYYYYYYYYY USING MY LOGIC RIGHT NOW, THE 100% OF MY BRAINNNN WWOWOWOWOWOW

    return reverse;
}




let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let userTarget = Number(prompt('Enter a number: '));
let stringArr = ['a', 'b', 'c', 'd', 'e']
// stringArr is for the exercise 4 for better understanding and lesser confusion

// console.log(getMax(newArr));

// // console.log(getEven(newArr));
// // console.log(findNumber(newArr));
// // console.log(reverseArray(newArr));


// // Alright, let me fix exercises 2, 3, 4

// console.log(getEven(newArr));

// // Alright, its working, just missed the [i]

// console.log(findNumber(newArr, userTarget))

// This one's workin as well, just needed a second argument

// console.log(reverseArray(stringArr))



// Program 1: Student Analyzer

let grades = [85, 90, 78, 92, 88]

function getAverage(arr){

    let total = 0

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    let avg = total / arr.length

    return avg;
}

function getHighest(arr){

    let highest = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i]
        }
    }

    return highest
}

// function getLowest(arr){
//     let lowest = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < lowest){
//             lowest = arr[i]
//         }
//     }

//     return lowest
// }

// So this one's pretty tricky as well, cause how do I get a higher number than inside the index, its impossible so i have to look
// for another way right XD

// function getLowest(arr){
//     let lowest = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > lowest){
//             lowest = arr[i]
//         }

//         if(arr[i] < lowest){
//             lowest = arr[i]
//         }
//     }

//     return lowest
// }

// This is a  stupid attempt XD

function getLowest(arr){
    let lowest = arr[0]

    for(let i = 0; i < arr.length; i++){

        if(arr[i] < lowest){
            lowest = arr[i]
        }
    }

    return lowest
}

// Okay, so I can do this but is this the best answer though?
// Whatever, as long as it works

// console.log(getAverage(grades));
// console.log(getHighest(grades));
// console.log(getLowest(grades));










// Program 2: Simple Inventory System

// let fruits = ["apple", "banana", "mango"]
// let input = prompt('Enter a fruit: ')

// function searchItem(arr, input){

//     // input = prompt('Enter a fruit: ')
//     // Can I do this or do I need to declare it outside the reusable function?
//     // If I have to declare it outside, then itll always ask for something everytime the code runs then
//     // Whatever, let me try this
//     // Yea, I have to decalre it outside,t whatever
    
//     for(let i = 0; i < arr.length; i++){
//         if(input === arr[i]){
//             return input + ' is found';
//         }
//     }

//     return input + ' is not found'
// }

// console.log(searchItem(fruits, input))


// Program 2 [Add Item] (BRUH YOU DIDNT EVEN TEACH ME HOW TO ADD AN ITEM WTTFFF, OR WHAT FUNCTION BRUH WHATEVER)

// let fruits = ["apple", "banana", "mango"]
// let userInput = prompt('Enter a fruit to add: ')

function addItem(array, input){

    let totalLength = array.length
    // let idx = array.length - 1

    // Bruh how do I insert another index

    array[totalLength] = input

    return array;
}

// console.log(addItem(fruits, userInput))

// BRUH HOW DID I EVEN GET THIS RIGHTTTTTTT THE FIRST TIME OMGOGMGOMGOMGOMGG EZEEZEZEZEZEZ


// Q1: [1, 2, 3, 4]
// Q2: [1, 2]
// Q3: 10
// Q4: 

// function sum(arr) {
//     let total = 0;

//     for(let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }

//     return total;
// }




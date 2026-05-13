// Finished day 1 and day 2 of 30 days of javascript course:

// 2704. To Be Or Not To Be
// ------ Write a function expect that helps developers test their code. 
//        It should take in any value val and return an object with the following two functions.


// function expect(val1) {
//     function toBe(val2) {
//         if(val1 === val2) {
//             return true
//         } else {
//             return {error: 'Not Equal'}
//         }
//     }

//     function notToBe(val2) {
//         if(val1 !== val2) {
//             return true
//         } else {
//             return {error: 'Equal'}
//         }
//     }
//     // I'm now stuck here becaus idk what to put below, theres no variabel that i can call from both functions XDDD
//     return {value: }
// }

// expect(5).toBe(5)

// Bruh, deepseek literally gave me the answer so here's a custom one i asked it for:


// THE PROBLEM: "Discount Validator"
// You need to write a function checkPrice(price) that returns an object with two methods:
// .discount(code) - accepts a discount code string
// If code is "SAVE10" → return the price with 10% off
// If code is "SAVE20" → return price with 20% off
// If code is anything else → throw error "Invalid code"
// .tax(rate) - accepts tax rate as decimal (0.08 = 8%)
// Returns price + (price × rate)
// If rate is negative or over 1 → throw error "Invalid tax rate"

function checkPrice(price) {
    return {
        discount: function(code){
            if(code === 'SAVE10') {
                return price = price - (price * 0.10)
            } else if(code === 'SAVE20') {
                return price = price - (price * 0.20)
            } else {
                throw new Error('Invalid Code')
            }
        },
        tax: function(rate){
            if(rate >= 1 || rate <= 0 || isNaN(rate)) {
                throw new Error('Invalid Tax Rate')
            }
            return price += price * rate
        }
    }
}

checkPrice(100).discount('SAVE10')
checkPrice(100).tax(0.99)

// The chain isn't working, how is it not working tho?
// checkPrice(100).discount('SAVE10').tax(0.2)

// HOW DO I DO THE TEST CASE? DO I NEED TO GO LIVE? BECAUSE I USUALY JUST DO CONST PROMPT = REQUIRE('PROMPT-SYNC') () THINGY
// DO I RUN THIS AND THEN CHECK CONSOLE OR WHAT

// OKAY LET ME TRY IT

{/* <details> 
    <summary>Click to see expected outputs</summary>
    checkPrice(100).discount("SAVE10")  // 90
    checkPrice(200).discount("SAVE20")  // 160
    checkPrice(50).tax(0.08)  // 54
    checkPrice(100).discount("SAVE10").tax(0.1)  // 99
    // Should throw errors:
    checkPrice(100).discount("SAVE50")  // throws "Invalid code"
    checkPrice(100).tax(1.5)  // throws "Invalid tax rate"
</details> */}

// Yea its not accepting html tags because this file is named .js

// Just add this at the bottom of your file:

// Test cases
try {
    console.log(checkPrice(100).discount('SAVE10').getValue());  // 90
} catch(e) {
    console.log(e.message);
}

try {
    console.log(checkPrice(200).discount('SAVE20').getValue());  // 160
} catch(e) {
    console.log(e.message);
}

try {
    console.log(checkPrice(50).tax(0.08).getValue());  // 54
} catch(e) {
    console.log(e.message);
}

// Test chaining
try {
    const final = checkPrice(100)
        .discount('SAVE10')
        .tax(0.1)
        .getValue();
    console.log(final);  // 99
} catch(e) {
    console.log(e.message);
}

// Test errors
try {
    checkPrice(100).discount('SAVE50');
} catch(e) {
    console.log('Error caught:', e.message);  // "Invalid Code"
}

try {
    checkPrice(100).tax(1.5);
} catch(e) {
    console.log('Error caught:', e.message);  // "Invalid Tax Rate"
}
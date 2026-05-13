const prompt = require('prompt-sync')();

// Day 15: Primitive vs. Object

// Oh okay, I get it, so this reference thing, only works for objects, am i right??


// Exercise 1: 50
// Exercise 2: 

// const product = { name: "Dog Food", stock: 10 };

// let updated = product.stock;

// updated = 0;

// console.log(product)
// console.log(updated)

// This works, but it just returns a variable, not an object, so let me try again

// const product = { name: "Dog Food", stock: 10 };

// const updated = product;

// let updatedStock = updated.stock

// updatedStock = 0

// console.log(product)
// console.log(updated)
// console.log(updatedStock)
// console.log(updated)

// Or this? The first one seems to be a better one, so I'll just leave it like that
// I am actually quite a bit confused, do u want me to do object reference and then change the .stock on the updated but not change on the product?

// Exercise 3: I think the arr.price will turn to 999 since it was being referenced through newArr, but let me run it

// const arr = [{ price: 100 }];

// const newArr = arr;

// newArr[0].price = 999;

// console.log(arr[0].price);

// Yep, I was right, but still I am confused how would u change the reference variable/object without changing the object it references to? Your exericise 2



// Program 1 / Part 5: Mini Program (Real Scenario) 

// const cart = [
//     { 
//         name: 'Dog Food', 
//         price: 500,
//         qty: 2
//     }
// ];

// function applyDiscount(item) {
//     item.price = item.price - 100;
//     return item
// }

// const discounted = applyDiscount(cart[0])

// console.log(cart)

// Answer: Before I run it, I think the answer is because it looks for the cart[0], instead of the object (cart)
// I am actually wrong, I just realized because the function's argument looks for the item so cart[0] is acceptable

// Okay, so the original cart is not changing because even though you have applied the discount through calling const discount
// you didn't call the discounted variable, so nothing changed, you just console logged cart or the object itself

// But let me run it to make sure cus i am actually hesitating about what's real or wrong

// Okay, I see it, LAST ANSWER XDDDD

// The original cart or object is changing because we already applied the discount through calling const discounted
// If we remove the discounted variable, it should not work because we just initiated a function and not call it yet

// TASK

// Okay, this will be hard

// Okay, so should I put the function inside the object?
// But that'll kind of fuck up the object
// Should I reference it with another new object??
// I don't think so cause it'll still be the same and it'll still be changed, but let me try

// const cart = [
//     { 
//         name: 'Dog Food', 
//         price: 500,
//         qty: 2,
//         applyDiscount: function() {
//             cart[0].price - 100;
//             return cart[0].price
//         }
//     }
// ];


// console.log(cart)
// console.log(cart[0].applyDiscount())
// console.log(cart)

// Well, I am actually so noob now

// Should I use map or no? map transforms it so it changes everything

// Or I can use it using a reference variable? Let me try

// const cart = [
//     { 
//         name: 'Dog Food', 
//         price: 500,
//         qty: 2
//     }
// ];

// function applyDiscount(item) {
//     item.price = item.price - 100;
//     return item
// }

// let newCart = cart;

// const newAppliedDiscount = newCart.map((item) => {
//     return item.price -= 100;
// }) 


// console.log(cart)
// console.log(newCart)
// console.log(newAppliedDiscount)
// console.log(cart)
// console.log(newCart)

// Well, that changed the originally referenced object (cart) XD

// So I looked it up online, and it's impossible without the use of object literals, structuredClone(), and Object.freeze()

// I am gonna be using the structuredClone()

const cart = [
    { 
        name: 'Dog Food', 
        price: 500,
        qty: 2
    }
];

function applyDiscount(item) {
    item.price = item.price - 100;
    return item
}

let newCart = structuredClone(cart);

// console.log(cart)
// console.log(newCart)
// Okay, great, it cloned it

let discountedNewCart = applyDiscount(newCart[0])

// console.log(cart)
// console.log(newCart)

// Okay, that got it, I think that's it




// Part 6: Debugging

// const user = { name: "John", balance: 1000 };

// function deduct(u) {
//   u.balance -= 500;
// }

// deduct(user);

// console.log(user.balance);

// Idk, just use the structured clone?!!! Or is there another way to do this? If there is, then you're stupid for not giving an example of it during lecture
// and just letting me figure out everything from scratch xddd, that isnt how this works, and also, instead of part (BECAUSE THIS ISNT A MOVIE), use proper
// ... labels instead, like quiz, practical, or whatever you want to do, just make sure its appropriate

// const user = { name: "John", balance: 1000 };
// const newUser = structuredClone(user)

// function deduct(u) {
//   u.balance -= 500;
// }

// deduct(newUser);

// console.log(user.balance);
// console.log(newUser.balance);

// See, this works as well


// Part 7:
// Bro is this some kind of like an essay contest or practical programming? TF? I mean it's probably for interview questions so whatever

// 1. Reference basically is a copy, or maybe not a copy of an original one, but it basically duplicates the original one, however,
//    when the duplicate one is changed, the original wil be changed as well

// 2. I don't actually know, since primitives are just normal values like a = 5, meanwhile objects are values within another value that is
//    encapsulted by a variable, then it's kind of hard to js reference it without changing the original, this is how the program works I guess

// 3. When modifying something while making sure that the original stays unchanged, this is important during production, so you don't fuck up 
//    the entire system or program, so instead of referencing the opbject, just copy it, see how it behaves, and if u got it, then you can decide to
//    reference it or js copy it



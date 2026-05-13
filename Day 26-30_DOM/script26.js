// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         // cart = cart.map(item => {
//         //     item.name.toLowerCase === targetItem.toLowerCase()
//         //         ? return {...item, qty: item.qty + 1}
//         //         : return item
//         // })
//         // Tried to follow what u did, the shorthand syntax for if else statement...
//         return cart.map(item => {
//             item.name.toLowerCase() === targetItem.toLowerCase()
//                 ? {...item, qty: item.qty + 1}
//                 : item
//                 // So I don't have to add return? it's already there but invisible?
//         })
//         // console.log(cart) Why the hell is name undefined...
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// // const button = document.querySelectorAll('#addBtn') // Why is this not accepted?
// const button = document.getElementById('addBtn') // And this is?
// const list = document.querySelector('#cartList')

// // Oh okay, it seems like my assignemtn is incorrect, afaik i can use queryselectorall
// // but why isnt this working in my case?

// button.addEventListener('click', () => {
//     const item = input.value

//     // I actually just added this and I wanna practice it to make sure valid inputs
//     // and do u think its a good idea... XDD
//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// // function renderCart(){
// //     // Okay, this one got me a bit confused now even though I understand it...
// //     list.innerHTML = ''

// //     cart.forEach(item => {
// //         const li = document.createElement('li')
// //         li.textContent = `${item.name} - Qty: ${item.qty}`
// //         list.appendChild(li)
// //     })
// // }

// // Okay, there's a problem when adding the same name, it doesnt qty++...
// // I tried fixing it on the add function but still the same, so it must be the rendercart
// // Let me try and fix it...
// // and also, what the fuck is this 
// //      WebSocket connection to 'ws://localhost:8080//ws' failed: 

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty}`
//         list.appendChild(li)
//     })
// }

// LET ME PUT EVERYTHING BELOW FOR ME TO READ IT BETTER...

// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map(item => {
//             // item.name.toLowerCase() === targetItem.toLowerCase()
//             //     ? {...item, qty: item.qty + 1}
//             //     : item // Okay, I have to go back to the traditional if else
//             // to really see what the issue is...
//             if(item.name.toLowerCase() === targetItem.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//             // Wait, whys it working when I just converted it to the usual if else that I
//             // do on this part? I am so losttt... Anyway, its working but idk
//             // I mean it shouldve been working, I think its the syntax because I'm not fully
//             // familiar with the shorthand if else and itm ight've done something that I
//             // didn't know it does.....
//         })
//         return cart
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// const button = document.getElementById('addBtn')
// const list = document.querySelector('#cartList')

// button.addEventListener('click', () => {
//     const item = input.value

//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// // function renderCart(){
// //     list.innerHTML = ''

// //     cart.forEach(item => {
// //         const li = document.createElement('li')
// //         const newBtn = document.createElement('button')
// //         newBtn.textContent = 'x'
// //         // li.textContent = `${item.name} - Qty: ${item.qty}` + `<button id="$item.name> X </button>`
// //         // Well, that didn't work XDDD
// //         li.textContent = `${item.name} - Qty: ${item.qty} ` + newBtn
// //         list.appendChild(li)
// //     })
// // }

// // Still doesn't work, let me retry it XDD
// const newBtn = document.createElement('button')
// newBtn.textContent = 'x'

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty} `
//         li.appendChild(newBtn) // well, i mean this is kinda oworking xddd
//         list.appendChild(li)
//     })
// }

// // newBtn.addEventListener('click', () => {
// //     cart.forEach(item => {
// //         remove(cart, item)
// //     })
// // })
// // THIS IS SO WRONG, I KNOW

// newBtn.addEventListener('click', () => {
//     cart.forEach(item => {
//         cart = remove(cart, item)
//     })
//     renderCart()
// })

// // Okay, that took me a while and that wasn't even the real challenge, here's the challenge:
// function remove(cart, targetItem){
//     // I believe we dont have to add an exist variable because each existing item has assigned
//     // x button already
//     cart = cart.map(item => {
//         if(item.name.toLowerCase() === targetItem.toLowerCase()){
//             return {...item, qty: item.qty - 1}
//         }
//         return item
//     })
//     let updatedCart = cart.filter(item => item.qty > 0)
//     return updatedCart
// }

// YEP, IM SO LOST AND IDK WHAT TO DO HERE... LET ME REWRITE EVERYTHING BELOW...

// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//         return cart
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// const button = document.getElementById('addBtn')
// const list = document.querySelector('#cartList')

// button.addEventListener('click', () => {
//     const item = input.value

//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// const newBtn = document.createElement('button')
// newBtn.textContent = 'x'

// newBtn.addEventListener('click', () => {
//     cart.forEach(item => {
//         console.log(cart)
//         cart = remove(cart, item)
//         console.log(cart)
//     })
//     renderCart()
// }) // Wait, this whole stuff I made is working thoughhhhhh, the 
// // remove function should bethe prob

// function remove(cart, targetItem){
//     let updatedCart = cart.map(item => {
//         if(item.name.toLowerCase() === targetItem.toLowerCase()){
//             return {...item, qty: item.qty - 1}
//         }
//         return item
//     })
//     updatedCart = cart.filter(item => item.qty > 0)
//     return updatedCart
// }

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty} `
//         li.appendChild(newBtn)
//         list.appendChild(li)
//     })
//     // Why is it only applying the newBtn to the latest added item, when I added it inside the
//     // foreach loop? I might need to know what foreach really does XDD or when to do it or idk
// }

// Okay, so it seems like it's only adding the newBtn to the latest added item,
// and when I click the x button or newBtn, it shows an error that is completely, not related
// to what the problem is, so im having a hard time figuring out, and this is most likely a
// logical error since I can't tell which ones the problem
//      Uncaught TypeError: targetItem.toLowerCase is not a function


// Okay, let me try a diff approach: 

// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//         return cart
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// const button = document.getElementById('addBtn')
// const list = document.querySelector('#cartList')

// button.addEventListener('click', () => {
//     const item = input.value

//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// function remove(cart, targetItem){
//     // console.log('remove function called')
//     let updatedCart = cart.map(item => {
//         // if(item.name.toLowerCase() === targetItem.toLowerCase()){ // Bruh, there's nothing wrong with thisss
//         if(item.name === targetItem){
//             // console.log('found the item to remove')
//             return {...item, qty: item.qty - 1}
//         }
//         // console.log('not the item to remove')
//         return item
//     })
//     updatedCart = updatedCart.filter(item => item.qty > 0)
//     return updatedCart
// }

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty} `
//         const newBtn = document.createElement('button')
//         newBtn.textContent = 'x'
//         li.appendChild(newBtn)
//         list.appendChild(li)

//         newBtn.addEventListener('click', () => {
//             cart = remove(cart, item.name)
//             renderCart() // So, on this part, I didn't try this because its inside the render cart function
//             // already, and i didnt know how it would work if the function is called inside its own function
//         })

//     })
// }

// // Okay, its now adding newBtn to each item but it still doesnt function properly
// // Okay, its now silently failing buttt idk why adding .toLowerCase() fucks up everything

// // And also, I believe I need to assign id per item doing osmething like newBtn.id = item[i].name or wtv

// // But idk how to do that, foreach really is the key but idk how it workss completely unlike the map stuffs i did

// // I'll try doing the total part because update seems to be a lot more complicted
// // function totalItems(cart){
// //     for(i = 0; i < cart.length; i++){
// //         i++
// //     }
// //     let total = i + 1
// //     return total
// // }
// // That's wrong because I forgot I nheed to consider the qty

// function totalItems(cart){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.qty
//     }, 0)

//     return total
// }

// // Okay, before I do this, I need to have an input for price...
// function totalPrice(cart){
//     let total = cart.reduce((sum, item) => {
//         sum + item.price * item.qty
//     })
// }

// const getTotalBtn = document.getElementById('getTotal')
// const totalItems = document.getElementById('totalItems')
// const getTotalPriceBtn = document.getElementById('getTotalPrice')

// // getTotal.addEventListener('click', () => {
// //     let total = document.createElement('h1')
// //     total.textContent = totalItems(cart)
// //     getTotal.appendChild(total)
// // })

// // That's too complicated, let me try a different approach (adding new button and new h1 with span instead of
// // manually creating it through js)

// getTotalBtn.addEventListener('click', () => {
//     totalItems.textContent = totalItems(cart)
// })

// // Perfectly WORKINGGGG, its just the remove and the update that im stuck with....

// getTotalPriceBtn.addEventListener('click', () => {

// })


// Shii, I have to rename lots of names so I'll just redo everything below with proper naming conventions
// so that I don't get too confused


let cart = []

function add(cart, targetItem, targetPrice){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return cart
    } else {
        return [...cart, {
            name: targetItem,
            price: targetPrice,
            qty: 1
        }]
    }
    // renderCart() --- I almost added this, I checked it again and I didn;t have to
    // I think because I need to call it everytime a button is clicked instead of inside the functions..
}

// So I just updated the add function to accept price in order for me to use the price input

function remove(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return item
        })

        let updatedCart = cart.filter(item => item.qty > 0)

        return updatedCart
    }
}
// Hopefully, remove function is working even with the .toLowerCase() because I wanna make it case insensitive

function getTotalItems(cart){
    let total = cart.reduce((sum, item) => {
        return sum + item.qty
    }, 0)

    return total
}

function getTotalPrice(cart){
    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty
    }, 0)

    return total
}

function clearCart(cart) {
    return [] // Hopefully, this is right as well XDDD
}

let itemName = document.getElementById('itemInput')
let itemPrice = document.getElementById('itemPrice')

let cartContainer = document.getElementById('cartList')

let addBtn = document.getElementById('addBtn')
let getItems = document.getElementById('getItems')
let getPrice = document.getElementById('getPrice')

let clear = document.getElementById('clearCart')

// So afaik, this is the function that renders it to the UI, basically the holder for everything
// that's going on in backend to show it to frontend right?
function renderCart(){
    cartList.innerHTML = '' // So, diudn't know this is actually useful, how does this work and how does it
    // even like update the ui without stacking the same ones on top of each other? Like what does this mean?

    cart.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `${item.name} - Qty: ${item.qty} - Price: ${item.price} ` 
        // I am actualyl confused on this line, shouldn't I be using itemName.value?
        const newBtn = document.createElement('button')
        newBtn.textContent = 'X'
        li.appendChild(newBtn)
        cartList.appendChild(li)

        newBtn.addEventListener('click', () => {
            cart = remove(cart, item.name)
            renderCart()
        })
        // So I just encountered the same bug that I had (the .toLowerCase bug)
        // Okay perfect, I used the item.name method, so basically it just gets the name of the item if
        // found and then gets that item name's entire object node and then removes it where it belongs?
        // So if I do like remove the items that have qty = 2, then i can just call
        // remove(cart, item.qty) and then do some few tweaks on the remove function? and itll work?
    })
}

// Oh, I need to add event listeners too...

addBtn.addEventListener('click', () => {
    // Why am I doing this?
    const item = itemName.value
    const price = itemPrice.value

    // So I copied this, this makes sure it has valid name (no unnecessary spaces and special chars)
    if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/) || !price.match(/^\d+(\.\d+)?$/)) { 
        // !price.match(/^\d+$/) <-- added this to only accept numbers
        // So I just updated it because its not accepting decimal values
        alert('Invalid Input');
        return
    }

    cart = add(cart, item, price)
    renderCart()

    // So I'm adding this to return to blank after every add
    itemName.value = ''
    itemPrice.value = ''
})

// I am so confused and lost with the flow of the system, like idk whats being read first and whats whatever
// How would I add a cojndition if a new item is being added so i can put the newInput as the price
// Like where do i put it? Render cart? addFunction? event listener? I am so confused
// So functions are as is, the renderCart basically is the frontend updater, while the event listeners
// are the one who calls the render cart? Am I correct?

// Okay, so I somehow fixed it, fixed the overlapping issue with the .innerHTML = '' trick\
// Added a price value and then will add validations for both inputs to make sure it has values

// I want to have the price updated if the same item gets added with a new price, how would I do that?


// Okay, moving on to other event listeners

getItems.addEventListener('click', () => {
    const totalItemUI = document.getElementById('totalItems')
    totalItemUI.textContent = getTotalItems(cart)
})

getPrice.addEventListener('click', () => {
    const totalPriceUI = document.getElementById('totalPrice')
    totalPriceUI.textContent = getTotalPrice(cart)
})

// Woah, you cant name a variable which has same name as a function??
clear.addEventListener('click', () => {
    cart = clearCart(cart)
    renderCart()
})

// YEY, ITS NOW WORKING. NOW THE PROBLEM IS THAT IF I ADD AN EXISTING ITEM WITH A NEW PRICE IT SHOULD
// UPDATE THE PRICE, BUT IDK, IT SHOULDNT? I BELIEVE THAT I SHOULD JUST HAVE A VALIDATION THAT
// IT SHOULDN'T HAVE A NEW PRICE, OR JSUT SIMPLY ADD IT AS A NEW ITEM? BUT WHATEVER
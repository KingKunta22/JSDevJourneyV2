// Okay so this is actualy script 27 but I renamed it to script30 to follow the days that
// I sync the days I practice javascript... so I am now in day 30, chatgpt asked me to
// add a few features for day 30 so I'll just copy the previous file...


// For chatgpt: This isn't even considered as a personal portfolio though, it doesn't look good
// I mean is this already considered as calculator-app-level difficulty? If so, then ig im wrong

// const savedCart = JSON.parse(localStorage.getItem('cart'))
// Okay, that didnt work, I refreshed and it didnt save XD

// let cart; 

// if(JSON.parse(localStorage.getItem('cart'))){
//     const savedCart = JSON.parse(localStorage.getItem('cart'))
//     cart = savedCart;
// } else {
//     cart = []
// }


// Well, that didnt work too XDDD
// let cart = []

// Okay, it still isnt working if I refresh it soo....

// Alright, asked gemini for it and then it gave me the answer (not literally but I get what hes saying now)
// I basically just need to rendercart before the script ends so that it saves the last save

// I can also do better on hte if condition... Here it is...
let cart = JSON.parse(localStorage.getItem('cart')) || []

function add(cart, targetItem, targetPrice){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, price: targetPrice, qty: item.qty + 1}
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
}

function remove(cart, targetItem){
    // let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    // if(exists){
    //     cart = cart.map(item => {
    //         if(item.name.toLowerCase() === targetItem.toLowerCase()){
    //             return {...item, qty: 0}
    //         }
    //         return item
    //     })

    //     let updatedCart = cart.filter(item => item.qty > 0)

    //     return updatedCart
    // }
    return cart.filter(item => 
        item.name.toLowerCase() !== targetItem.toLowerCase()
    )
}

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

    // if(total == 0 || total == null){
    //     return 0
    // }
    // Well, that didn't work so i just entered 0 on the html XD
    // if(cart == 0 || cart == null || cart == []){
    //     total = 0;
    // }
    // This didn't work as well, I believe I need to put it onto the other eventlistenrS?

    return total
}

function clearCart(cart) {
    return []
}

let itemName = document.getElementById('itemInput')
let itemPrice = document.getElementById('itemPrice')

let cartContainer = document.getElementById('cartList')

let addBtn = document.getElementById('addBtn')
let getItems = document.getElementById('getItems')
let getPrice = document.getElementById('getPrice')

let clear = document.getElementById('clearCart')

function renderCart(){
    cartList.innerHTML = ''

    cart.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `${item.name} - Qty: ${item.qty} - Price: ${item.price} ` 
        // I am actualyl confused on this line, shouldn't I be using itemName.value?
        const newBtn = document.createElement('button')
        newBtn.textContent = 'X'

        // So I need to make buttons with + and - and then use functions inside their event lsiteners
        const increaseBtn = document.createElement('button')
        const decreaseBtn = document.createElement('button')
        // increaseBtn.setAttribute('id', 'increaseBtn')
        // decreaseBtn.setAttribute('id', 'decreaseBtn')
        // Oh damn, theres a better alt >
        increaseBtn.id = 'increaseBtn'
        decreaseBtn.id = 'decreaseBtn'
        newBtn.id = 'newBtn'

        // This is what I initially did XDD
        // const increaseBtn = document.createElement('button').setAttribute('id', 'increaseBtn')
        // const decreaseBtn = document.createElement('button').setAttribute('id', 'decreaseBtn')

        increaseBtn.textContent = '+'
        decreaseBtn.textContent = '-'

        li.appendChild(increaseBtn)
        li.appendChild(decreaseBtn)
        li.appendChild(newBtn) // Put this here to make it look a bit away from the other btns
        
        increaseBtn.addEventListener('click', () => {
            cart = increaseQty(cart, item.name)
            renderCart()
        })

        decreaseBtn.addEventListener('click', () => {
            cart = decreaseQty(cart, item.name)
            renderCart()
        })

        newBtn.addEventListener('click', () => {
            cart = remove(cart, item.name)
            renderCart()
        })

        cartList.appendChild(li)
        // I wonder if you can access these newly created buttons in javascript on css?
        // Like can I add a button class and then it'll apply it? I believe so, actually I will try
        // const totalItemUI = document.getElementById('totalItems')
        // const totalPriceUI = document.getElementById('totalPrice')

        // if(cart == 0 || cart == null || cart == []){
        //     totalItemUI.textContent = 0
        //     totalPriceUI.textContent = 0
        // } else {
        //     totalItemUI.textContent = getTotalItems(cart)
        //     totalPriceUI.textContent = getTotalPrice(cart)
        // }
        // That didn't workkkkk......... whateva i give up

        // Okay, thats working, but I need to show '0' if theres nothing or no items
        // Or, I could just do the lazy way > remove the total items appearance if no items added XD
        // Wait, that might actually has the same difficulty so im stuck here XD...
    })

    const totalItemUI = document.getElementById('totalItems')
    const totalPriceUI = document.getElementById('totalPrice')

    if(cart.length === 0) {
        totalItemUI.textContent = 0
        totalPriceUI.textContent = 0
    } else {
        totalItemUI.textContent = getTotalItems(cart)
        const total = getTotalPrice(cart)
        totalPriceUI.textContent = '₱' + total
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

addBtn.addEventListener('click', () => {
    const item = itemName.value
    const price = itemPrice.value // So I tried this number but it wont work on regex broteherrr

    if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/) || !price.match(/^\d+(\.\d+)?$/)) { 
        alert('Invalid Input');
        return
    }

    cart = add(cart, item, Number(price)) //Okay fixed it while using regex, thanks gemini xd

    // So this is working but it doesnt get applied to any other eventListeners
    // // Oh right, I need to add these to the render cart instead...
    // const totalItemUI = document.getElementById('totalItems')
    // totalItemUI.textContent = getTotalItems(cart)

    // const totalPriceUI = document.getElementById('totalPrice')
    // totalPriceUI.textContent = getTotalPrice(cart)

    renderCart()

    itemName.value = ''
    itemPrice.value = ''
})

clear.addEventListener('click', () => {
    cart = clearCart(cart)
    renderCart()
})

// Day 30:

function increaseQty(cart, targetItem){
    cart = cart.map(item => {
        if(targetItem.toLowerCase() === item.name.toLowerCase()){
            return {...item, qty: item.qty + 1}
        }
        return item
    })
    // My gut instict is that it shouldn't return cart because I'm only returning an items quantity or an item
    // or I could be overthinking it... XDDD
    return cart
}
// I feel like I am overcomplicating this one when I could just item++ or I could be wrong,
// Hopefully that's gonna work though...

function decreaseQty(cart, targetItem){
    cart = cart.map(item => {
        if(targetItem.toLowerCase() === item.name.toLowerCase()){
            return {...item, qty: item.qty - 1}
        }
        return item
    })

    let updatedCart = cart.filter(item => item.qty > 0)

    return updatedCart
}

// Okay so I have to update the remove function to remove the item completely instead of decreasing its qty
// I didn't realize it has the same function as decreaseQty xd
// Also, is the exist variable useless there? Why did I add that...

// Alright, working properly, now auto update ui...

// Okay for task 2, it seems like I applied it already through the:

    // if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/) || !price.match(/^\d+(\.\d+)?$/)) { 
    //     alert('Invalid Input');
    //     return
    // }

// Okay, I'll try the localstorage save option...





// Okay, so I just looked it up on AI and then it told me a few hints and tips instead of the exact full code
// Now, I also learned to look for the local storage and then it didnt save everytime I click add
// So it said I should set item every add and then do I need to do that per event listener? 
// Or to make everything simple, and easy, just add it onto the render cart?
// I also tried the const savedCart line right before the let cart and it still didnt work, 
// I think I need to use an if else here...

// So there are 3 keys actually on the localstorage and idk what those are..
// : cart, savedCart, and tasks... idk what tasks is

// OH OKAY, NOW I SEE THE OBJECT VALUES ON THE CART KEY AND THAT HAPPENED WHEN I 
// PUT THE LINE:
//          localStorage.setItem('cart', JSON.stringify(cart));
// INSIDE THE RENDER CART (RIGHT BEFORE THE END)


// The finishing touch...

renderCart()


// OH GREAT ITS WORKING NOWW AS EXPECTED BECAUSE I ASKED AI TO HELP ME BUT WHATEVER
// IDK IF I SHOULD FEEL  THIS GOOD OR TONE DOWN MY SHIT BECAUSE I ASKED AI.... ANYWAyss ezzz
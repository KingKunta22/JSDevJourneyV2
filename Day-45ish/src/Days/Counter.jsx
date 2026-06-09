// // import react, { useState } from 'React';

// // // Anyways, I'm gonna do a counter
// // function Counter() {

// //     const [increment, setIncrement] = '0' // Damn, I hope i'm doping this right
// //     // Okay, why does it not work with just 0, and I have to "0"? isn't it the other way around because it's a number, not a string?

// //     function handleIncrease(){
// //         setIncrement(increment + 1)
// //     }
    
// //     return (
// //         <>
// //         <h1>Number: {increment}</h1>
// //         <button onClick={ () => handleIncrease}>+</button>
// //         </>
// //     );
// // }

// // export default Counter;

// // So that's my first try, I tried my best, but there's something wrong, and that's only for you to see the progress I've made so far, here's a second try while trying to figure out what's wrong or missing...

// import react, { useState } from 'React';

// function Counter() {

//     const [increment, setIncrement] = useState(0)

//     function handleIncrease(){
//         // console.log('HJello???') // Woahh, the button itself isn't working, or maybe its the import? IDK
//         // // Nah, not the import...
//         // // Oh, its working now, I just removed the  "() => " :DDDD
//         // So this should be the problem now V
//         setIncrement(increment + 1)
//         // Oh okay, idk if this is cheating but I looked up your previous message and you said this:
//         // "const [count, setCount] = useState(0)" so that should be the problem now 
//         /// YEYYYYYYYY IT WORKED, IT WAS THE PROBLEM EHEHHEHEHE BUT IDK IF THAT WAS CHEATING BRUH WHATEVER BRO
//     }
    
//     return (
//         <>
//         <h1>Number: {increment}</h1>
//         <button onClick={handleIncrease}>+</button>
//         </>
//     );
// }

// export default Counter;



// ALRIGHT PERFECT BROOO, DAY 45.5 NOW:
// This should be easy B)

import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0)

    // Also, one thing, I noticed that Bro Code suggested using handleIncrementCounter, or yk adding handle before every function since it's a good practice, soooo I should be doing that
    function handleIncrementCounter() {
        setCounter(counter + 1)
    }
    
    function handleDecrementCounter() {
        // if(counter >= 0) { // Okay, why does this not work XD
        //     setCounter(counter - 1)
        // } Whatever, I give up XDD
        if(counter === 1){
            console.log('111111')
        }
        // Wait, I actually didn't give up, why is the above working lolll, lemme try again
        if(counter > 0) {
            setCounter(counter - 1)
        }

        // Bro what, it's now working, how didn;t I thibnk of that, and also, I think it was because I was doing >= instead of just > ???? WTVB BRO
    }

    function handleResetCounter() {
        setCounter(0)
    }

    // Q: So since the initial state is 0, well actually, you didn't put it inside a function, or call the function inside a button, so it doesn't do anything completely... or maybe it will. Okay, i'm gonna stick to my stuff, I believe it will change the value to 5 anhd change its initial state from 0 to 5, even without calling it, so itll show 5

    return (
        <>
        <h1>Counter: {counter}</h1>
        <div>
            <button onClick={handleDecrementCounter}>-</button>
            <button onClick={handleResetCounter}>Reset</button>
            <button onClick={handleIncrementCounter}>+</button>
        </div>
        </>
    )
}

export default Counter;

// OKAY FOR DAY 46, WE'RE GONNA DO A FUCKING TO DO LIST APPPPPPPPPPPPPPPPPPPPP OHNOOOOOOOOOOOOO
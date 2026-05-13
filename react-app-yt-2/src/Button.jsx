// function Button() {
//     // const handleClick = () => { console.log('OUCH!')}
//     // function handleClick2(name) {
//     //     console.log('Hello ' + name)
//     // }

//     let count = 0;
//     const handleClick = (name) => {
//         if(count < 3) {
//             count++
//             console.log(`${name}, you clicked me ${count} time/s`)
//         } else {
//             console.log(`${name}, that's too much, I am calling the cops!`)
//         }
//     }

//     return(<button onClick={() => handleClick('Leo')}>Click me!!</button>)
// }

// export default Button

function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH"

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me!!</button>)
}

export default Button
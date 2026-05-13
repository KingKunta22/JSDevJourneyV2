// import { useState } from 'react' // What does this line do

// function App() {

//   const [count, setCount] = useState(0) // AND THIS LINE... LIKE FPR ME TO UNDERSTAND CONVERT EVERYTHING TO VANILLA IF NEEDED

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button> 
//     </div>
//     // So I basically declared a variable outside this return value (count), called it like {count} which I believe is similar to ${count} in javascript
//     // thenidk what the onclick value means and what it does, i mean it does count + 1 but idk how and wtf is useState
//   )

// }

// export default App // I believe this is a necessary before ending every .jsx file?

// Okay, TASK 1:

import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [userInput, setInput] = useState()

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button> 
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <div>
        <input type="text" value={userInput}/>
        <button onClick={() => setInput(userInput)}>
          Enter
        </button>
      </div>
      <div>
        <h1>You typed: {userInput}</h1>
      </div>
    </div>
    // Oh and I just realized it doesnt even update live automatically...
    // Yep im fucking confused, I need to watch yt tutorial for this xd
  )
}

export default App

// Alright, so I just finished an hour tutorial which lasted a day.... I hope I can get this right now XDDDD


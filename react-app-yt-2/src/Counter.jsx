import React, {useState} from 'react'


function Counter() {

    const [count, isCount] = useState(0)

    const increment = () => {
        isCount(count + 1)
    }

    const reset = () => {
        isCount(0)
    }

    const decrement = () => {
        isCount(count - 1)
    }

    return(
        <>
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
        </>
    )
}

export default Counter
import { useState } from "react"

function ControlledInputs2() {

    const [input, setInput] = useState("")

    return(
        <>
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <h1>{input}</h1>
        </div>
        </>
    )
}

export default ControlledInputs2
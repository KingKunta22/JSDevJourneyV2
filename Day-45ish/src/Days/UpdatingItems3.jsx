// Matter of fact, I'm restarting everything cus i been stuck on this part for too long
// Yk, just to refresh the ideas that I had...

import { useState } from 'react';

function UpdatingItems3() {
    // So we need two states here, one for the input, and one to store the state or the saved input
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([])

    function handleAddNote(){
        setNotes(note)
        setNote("")
    }

    return(
        <>
        <h1>Todo List App (Vibe-Code Free)</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={note} onChange={setNote(note)}/>
            <button onClick={handleAddNote}>Add</button>
        </div>
        <br />
        <p>{note}</p>
        <br />
        <div>
            <ol>
                
            </ol>
        </div>
        </>
    )
}

export default UpdatingItems3;
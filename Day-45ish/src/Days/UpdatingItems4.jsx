// So for this one, I wanna do it my way. I wanna show the UI what's being typed similar to my first draft

import { useState } from "react";

export default function UpdatingItems4() {

    const [userNote, setUserNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    function handleAddNote(newNote) {
        setNotes([...notes, newNote])
        setNotes("")
    }

    return(
        <>
        <br />
        <h1>Todo List (Raw & Vibe-Code Free)</h1>
        <br />
        <div>
            <input type="text" placeholder="Enter a task" value={userNote} onChange={(e) => setNotes(e.target.value)}/>
            <button onClick={(e) => handleAddNote(e.target.value)}>Add</button>
        </div>
        <p>You're typing: {userNote}</p>
        <br />
        <ul>

        </ul>
        </>
    )
}
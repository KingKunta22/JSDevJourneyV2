// So for this one, I wanna do it my way. I wanna show the UI what's being typed similar to my first draft

import { useState } from "react";

export default function UpdatingItems4() {
  const [userNote, setUserNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleAddNote(newNote) {
    // setNotes([...notes, newNote])
    // setNotes("") Damn, why isn't this workinggg XD
    // console.log("Working...") whattt, its workingg thoughhhh
    // console.log(newNote) Ohh, I kinda see it now, theres a problem with saving it onto the state...
    // So, theres a problem within this line: <button onClick={(e) => handleAddNote(e)}>Add</button>, and idk why though XDD
    // console.log(newNote)
    // Oh, there we goooo, I just changed it to {() => handleAddNote(userNote)} because there's no reason for me to get the value since its already being saved into the statee, okayyyy... so this should work now:
    setNotes([...notes, newNote]);
    // setNotes("");
    // Oh it isnt wrking yet because I didnt add the map function inside the ul lol
    // Bruh, Ijust added the needed code but its saying notes.map isnt a function, why am I having that error when I clearly have this line alreaddy: setNotes([...notes, newNote]);
    // Oh fuck, I accidnetally typed setNotes("") instead of setNote("") LOL, it was actually the autocorrect wtf
    setUserNote("")
  }
  // Fuhh, I really get stuck on this bug where it doesn't allow me to type anythingggggg

  return (
    <>
      <br />
      <h1>Todo List (Raw & Vibe-Code Free)</h1>
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
        />
        <button onClick={() => handleAddNote(userNote)}>Add</button>
      </div>
      <p>You're typing: {userNote}</p>
      <br />
      <ul>
        {notes.map((n, index) => (
          <li key={index}>
            {n}&thinsp;
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
        {/* Okay, I got a bit stuck on this part because I used curly braces, the fuckk, I thought this was considered a lng expression, whatever, I think its one expression but with multiple lines lmao */}
      </ul>
    </>
  );
}

//
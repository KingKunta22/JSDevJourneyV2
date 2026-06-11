import { useState } from "react";

function DeletingItems() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleAddNote() {
    setNotes([...notes, note]);
    setNote("");
  }

  //   function handleDeleteNote(idx) {
  //     // Hmm, how do I get all the li's here....
  //     notes.filter((note, index) => {
  //         if(index !== idx) {
  //             return <li>{note}</li>
  //         }
  //     })
  //     // Damn, I wonder why it's not orkinggg.........
  //   }

  //   function handleDeleteNote(idx) {
  //     notes.filter((note, index) => {
  //         console.log(idx)
  //         console.log(index)
  //     })
  //     console.log("Hello")
  //   }
  // But it's working here, so it should be the return or no?????? what could be the problem, should be the syntax rightt
  // Man, I was able to do this last time but I can't get it right now, that should mean I don't understand it fully yet hayssssssssssssssssssss

  function handleDeleteNote(idx) {
    notes.filter((note, index) => {
    //   console.log(idx);
    //   console.log(index);
    //   if(index !== idx) {
        
    //   }
    return index !== idx
    });
    console.log("Hello");
  }

  return (
    <>
      <br />
      <h1>Simple Notes App (Vibe-Code Free)</h1>
      <br />
      <div>
        <input
          type="text"
          placeholder="Add a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <br />
      <h3>{note}</h3>
      <br />
      <div>
        <h2>Notes Added</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note} <button onClick={(e) => handleDeleteNote(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DeletingItems;

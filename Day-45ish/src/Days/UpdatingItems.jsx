import { useState } from "react";

function UpdatingItems() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleAddNote() {
    setNotes([...notes, note]);
    setNote("");
  }

  //   function handleUpdateNote(idx) { // I believe it's the same with delete soo...
  //     const updatedNotes = notes.map((note, index) => {
  //         return <li>UPDATED</li>
  //     })
  //     setNotes(updatedNotes)
  //   }

  // For a second, I thought I'm done, not until I noticed that the rest of the li's are also named UPDATED xd

  //   function handleUpdateNote(idx) {
  //     const updatedNotes = notes.map((note, index) => {
  //       if(index === idx) {
  //         return <li>UPDATED</li>;
  //       }
  //     });
  //     setNotes(updatedNotes);
  //   }

  // Still doesn't workkk?? And I notice an error in console log thoughghghghh

  function handleUpdateNote(idx) {
    const updatedNotes = notes.map((note, index) => {
      if (index === idx) {
        return <li key={index}>UPDATED</li>;
      }
      return <li key={index}>{note}</li>;
    });
    setNotes(updatedNotes);
  }
  // It's working this timeee (I believe), but the problem is the console logg, there's gotta be a little tweak neededd here to remove that.....

  function handleDeleteNote(idx) {
    const filteredNotes = notes.filter((note, index) => {
      return index !== idx;
    });
    setNotes(filteredNotes);
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
              {note}
              <button onClick={() => handleUpdateNote(index)}>Edit</button>
              <button onClick={() => handleDeleteNote(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UpdatingItems;

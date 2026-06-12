// Damn, this'll be hard because it involves updating the UI....

// import { useState } from "react";

// function UpdatingItems2() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   // Since you mentioned we need a new state, let me do it, and also, if you wouldnt have told me to do that, i wouldnt have done this ngl
//   const [currentNote, setCurrentNote] = useState([]); // Is this correct? or just use useState(note), Im confused now.

//   function handleAddNote() {
//     setNotes([...notes, note]);
//     setNote("");
//   }

//   function handleUpdateNote(idx) {
//     const updatedNotes = notes.map((note, index) => {
//       if (index === idx) {
//         // return "UPDATED"; Sooo, there should be a new input with value={currentNote} and then two buttons to save or cancel, but how would I do that, I can't just <input> inside this map function, right?
//       }
//       return note;
//     });
//     setNotes(updatedNotes);
//   }

//   function handleDeleteNote(idx) {
//     const filteredNotes = notes.filter((note, index) => {
//       return index !== idx;
//     });
//     setNotes(filteredNotes);
//   }

//   return (
//     <>
//       <br />
//       <h1>Simple Notes App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input
//           type="text"
//           placeholder="Add a note"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//         <button onClick={handleAddNote}>Add</button>
//       </div>
//       <br />
//       <h3>{note}</h3>
//       <br />
//       <div>
//         <h2>Notes Added</h2>
//         <ul>
//           {notes.map((note, index) => (
//             <li key={index}>
//               {note}&thinsp;
//               <button onClick={() => handleUpdateNote(index)}>Edit</button>
//               <button onClick={() => handleDeleteNote(index)}>X</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems2;


// Mini Task: Option B, because indexes is like the best way to make sure that this is what the user wants and it is a lot more accurate than basing on strings alone due to names that can be similar or whatever


// import { useState } from "react";

// function UpdatingItems2() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [currentNote, setCurrentNote] = useState([]); // I thought I should be using useState([]) because we're talking about indexes.... xd

//     // Okay bro whats all this editingIndex BS. This got me confused now, I think this is too much for me to handle, or maybe a big ass leap, idk,. you may give me a few more tips or mini tasks to finish which will eventually lead me to doing this specific day easier and less like thinking, more on ideas

//   function handleAddNote() {
//     setNotes([...notes, note]);
//     setNote("");
//   }

//   function handleUpdateNote(idx) {
//     const updatedNotes = notes.map((note, index) => {
//       if (index === idx) {
//         // return "UPDATED";
//       }
//       return note;
//     });
//     setNotes(updatedNotes);
//   }

//   function handleDeleteNote(idx) {
//     const filteredNotes = notes.filter((note, index) => {
//       return index !== idx;
//     });
//     setNotes(filteredNotes);
//   }

//   return (
//     <>
//       <br />
//       <h1>Simple Notes App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input
//           type="text"
//           placeholder="Add a note"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//         <button onClick={handleAddNote}>Add</button>
//       </div>
//       <br />
//       <h3>{note}</h3>
//       <br />
//       <div>
//         <h2>Notes Added</h2>
//         <ul>
//           {notes.map((note, index) => (
//             <li key={index}>
//               {note}&thinsp;
//               <button onClick={() => handleUpdateNote(index)}>Edit</button>
//               <button onClick={() => handleDeleteNote(index)}>X</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems2;



import { useState } from "react";

function UpdatingItems2() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null)

  function handleAddNote() {
    setNotes([...notes, note]);
    setNote("");
  }

  function handleUpdateNote(idx) {
    const updatedNotes = notes.map((note, index) => {
      if (index === currentNote) {
        return "UPDATED";
        // Okay, so do I need a new condition here to check the index inside this map and on the setNotes array?
      }
      asdasdasdasdasdasdasd
      return note;
    });asdasdasdasdddddddddddddddd
    setNotes(updatedNotes);sdsdsd
  }sdsdsdsdddd

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
              {note}&thinsp;
              <button onClick={() => handleUpdateNote(index)}>Edit</button>
              <button onClick={() => handleDeleteNote(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UpdatingItems2;
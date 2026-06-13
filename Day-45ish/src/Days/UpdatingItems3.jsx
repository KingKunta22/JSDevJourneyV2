// // Matter of fact, I'm restarting everything cus i been stuck on this part for too long
// // Yk, just to refresh the ideas that I had...

// import { useState } from "react";

// function UpdatingItems3() {
//   // So we need two states here, one for the input, and one to store the state or the saved input
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   function handleAddNote() {
//     setNotes(note);
//     setNote("");
//   }

//   return (
//     <>
//       <br />
//       <h1>Todo List App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input type="text" placeholder="Enter a task" value={note} />
//         <button onClick={handleAddNote}>Add</button>
//       </div>
//       <br />
//       <p>{note}</p>
//       <br />
//       <div>
//         <ol>
//           {notes.map((note, index) => (
//             <li key={index}>
//               {note} <br />
//               <button>Edit</button>
//               <button>Delete</button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems3;

// Okay, snapshot. I'm coming across the same issue that I had when doing the handleAdd or onChange task, so Idk, qwrnioqwmkrwwqr,pql i cant keep getting stuck heree, does that mean I dont learn though? whatever, let me try to figure this out by myself...

// AFAIK, the reason why im getting this error in console: 
// installHook.js:1 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
// isnt because I need to remove the value prop or value whatever you call it, because rn I can just remove it and it should look like its working but its not saving it into the state, so I need to figure out how to save that mf to the state, Im thinking that the real issue or the cause of this issue is the onClick value, rn I have the onClick={() => handleAddNote}, and Im confused if I should do that or onClick={handleAddNote} because I  tried both and nothing changed...

import { useState } from "react";

function UpdatingItems3() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleAddNote() {
    setNotes(note);
    setNote("");
  }

  return (
    <>
      <br />
      <h1>Todo List App (Vibe-Code Free)</h1>
      <br />
      <div>
        {/* <input type="text" placeholder="Enter a task" value={note} onChange={setNote(note)} /> Why isnt this workingggg??? */}
        {/* <input type="text" placeholder="Enter a task"/> Okay, wait let me remove these values )value, and onChange, and check first if it'll be added to the state if I try to do anything */}
        <input type="text" placeholder="Enter a task"/>
        {/* <button onClick={handleAddNote}>Add</button> Woah I cant believe Im still confused if I should use the onClick={() => handleAddNote} or onClick={handleAddNote}, I feel like the onClick={handleAddNote} is the right one because I'm not checking through a list of items or whatever... */}
        <button onClick={handleAddNote}>Add</button>
      </div>
      <br />
      <p>{note}</p>
      <br />
      <div>
        <ol>
          {notes.map((note, index) => (
            <li key={index}>
              {note} <br />
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default UpdatingItems3;
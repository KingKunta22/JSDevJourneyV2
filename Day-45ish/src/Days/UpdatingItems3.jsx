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

// import { useState } from "react";

// function UpdatingItems3() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   function handleAddNote() {
//     setNotes(note);
//   }

//   return (
//     <>
//       <br />
//       <h1>Todo List App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         {/* <input type="text" placeholder="Enter a task" value={note} onChange={setNote(note)} /> Why isnt this workingggg??? */}
//         {/* <input type="text" placeholder="Enter a task"/> Okay, wait let me remove these values )value, and onChange, and check first if it'll be added to the state if I try to do anything */}
//         <input type="text" placeholder="Enter a task"/>
//         {/* <button onClick={handleAddNote}>Add</button> Woah I cant believe Im still confused if I should use the onClick={() => handleAddNote} or onClick={handleAddNote}, I feel like the onClick={handleAddNote} is the right one because I'm not checking through a list of items or whatever... */}
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

// Snapshot, so right now Im getting a new error saying notes.map is not a function, meaning it should be saved onto the state already rightt??? Sooo I just need a few tweaks I believe and I shoulddd idk, let me try something...


// import { useState } from "react";

// function UpdatingItems3() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   function handleAddNote() {
//     setNotes([note]);
//     // Ohhh, I just remembered, I need to enclose it with the [] because the notes state is an array
//     setNote("")
//   }
//   // Alright, so I fixed that, the problem now is that the state from note isnt being transferred to the notes array meaning the li has no text value or the {note} inside the map function doesnt contain anything

//   // So that part is good, the problem now is the value and onChange, in eedf to fix it and it should fix the current one im dealing with because it should save the valueto the note state

//   return (
//     <>
//       <br />
//       <h1>Todo List App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         {/* <input type="text" placeholder="Enter a task" value={note} onChange={setNote(note)}/>
//         // Fuhh, why am I getting an infinite looppp, is the onChange value incorrect??? */}
//         {/* I am really confused because based from what I know, this should work without any problems. */}
//         <input type="text" placeholder="Enter a task" value={note} onChange={(e) => setNote(e.target.value)}/>
//         {/* Okay, there we go, I just frgot and idk bruh im so dumb, whatever, i figured it out */}
//         <button onClick={handleAddNote}>Add</button>
//       </div>
//       <br />
//       <p>{note}</p>
//       <br />
//       <div>
//         <ol>
//           {notes.map((note, index) => (
//             <li key={index}>
//               {note}&thinsp;&thinsp;
//               <button>Edit</button>&thinsp;
//               <button>Delete</button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems3;

// Okay, everything's looking good, but its not adding any more note values....
// This bug's pretty new to me, I dont understand why its not adding up wtffff
// As I look up the react dev, it's helping me understand why its happening so as I can see it's getting replacedddddd, and that is because I didnt use the spread operator :))))))))))

import { useState } from "react";

function UpdatingItems3() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleAddNote() {
    setNotes([...notes, note]);
    setNote("")
  }
  // Alright, now we gotta do the deleete, let me see if I still ahve it...
  function handleDeleteNote(idx) {
    const filteredNotes = notes.filter((note, index) => (
        index !== idx
    ))
    setNotes(filteredNotes)
  }

  // Alright, I seem to still remember it because I didn't have any too major issues soooo let me try the update one:
  function handleUpdateNote(idx) {
    const updatedNotes = notes.map((note, index) => {
        if(index === idx) {
            return "UPDATED"
        }
        return note
    })
    setNotes(updatedNotes)
  }

  // EZ FIRST TRYYYY, I STILL AM KINDA CONFUSEF ABOUT THE {} OR () AFTER THE => INSIDE AN ARRAY FUNCTION. I BELIEVE I SHOULD USE {} IF I WANT TO RETURN AND USE A CONDITION OR LONGER LINES OF CODE, AND THEN I NEED TO USE () IF I DONT NEED TO USE LONG LINES OF CODES OR RETURN....

  return (
    <>
      <br />
      <h1>Todo List App (Vibe-Code Free)</h1>
      <br />
      <div>
        <input type="text" placeholder="Enter a task" value={note} onChange={(e) => setNote(e.target.value)}/>
        <button onClick={handleAddNote}>Add</button>
      </div>
      <br />
      <p>{note}</p>
      <br />
      <div>
        <ol>
          {notes.map((note, index) => (
            <li key={index}>
              {note}&thinsp;&thinsp;
              <button onClick={() => handleUpdateNote(index)}>Edit</button>&thinsp;
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default UpdatingItems3;
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

// import { useState } from "react";

// function UpdatingItems3() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   function handleAddNote() {
//     setNotes([...notes, note]);
//     setNote("")
//   }
//   // Alright, now we gotta do the deleete, let me see if I still ahve it...
//   function handleDeleteNote(idx) {
//     const filteredNotes = notes.filter((note, index) => (
//         index !== idx
//     ))
//     setNotes(filteredNotes)
//   }

//   // Alright, I seem to still remember it because I didn't have any too major issues soooo let me try the update one:
//   function handleUpdateNote(idx) {
//     const updatedNotes = notes.map((note, index) => {
//         if(index === idx) {
//             return "UPDATED"
//         }
//         return note
//     })
//     setNotes(updatedNotes)
//   }

//   // EZ FIRST TRYYYY, I STILL AM KINDA CONFUSEF ABOUT THE {} OR () AFTER THE => INSIDE AN ARRAY FUNCTION. I BELIEVE I SHOULD USE {} IF I WANT TO RETURN AND USE A CONDITION OR LONGER LINES OF CODE, AND THEN I NEED TO USE () IF I DONT NEED TO USE LONG LINES OF CODES OR RETURN....

//   return (
//     <>
//       <br />
//       <h1>Todo List App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input type="text" placeholder="Enter a task" value={note} onChange={(e) => setNote(e.target.value)}/>
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
//               <button onClick={() => handleUpdateNote(index)}>Edit</button>&thinsp;
//               <button onClick={() => handleDeleteNote(index)}>Delete</button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems3;

// Now, time for the real battle, your battle.... the edit shit
// I have a few confusions and damn we need a lots of handleShit functionssss, I thought we only need one but whatever, I hope this is the one that would make me learn and understand how update or edit works here...

// import { useState } from "react";

// function UpdatingItems3() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   function handleAddNote() {
//     setNotes([...notes, note]);
//     setNote("")
//   }

//   function handleDeleteNote(idx) {
//     const filteredNotes = notes.filter((note, index) => (
//         index !== idx
//     ))
//     setNotes(filteredNotes)
//   }

//   function handleUpdateNote(idx) {
//     const updatedNotes = notes.map((note, index) => {
//         if(index === idx) {
//             return "UPDATED"
//         }
//         return note
//     })
//     setNotes(updatedNotes)
//   }

//   return (
//     <>
//       <br />
//       <h1>Todo List App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input type="text" placeholder="Enter a task" value={note} onChange={(e) => setNote(e.target.value)}/>
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
//               <button onClick={() => handleUpdateNote(index)}>Edit</button>&thinsp;
//               <button onClick={() => handleDeleteNote(index)}>Delete</button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default UpdatingItems3;

// I also, do not want to copy your code because idk I find it hard to understand, youre kinda a bit advanced butt idk, maybe thisll help me??? Okay let me try and copy it...

// import { useState } from "react";

// export default function UpdatingItems3() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   // YOUR CODE HERE

//   // handleNoteChange
//   function handleNoteChange(){
//     setNotes([note])
//     setNote("");
//     // Bruh, why did this just automatically add a new notes state when I'm literally not saving yet or clicking add yet... I think I should adjust the onClick on the button or the onChange? IDK
//   }
//   // handleSave (add or update)
//   function handleSave() {

//   }
//   // handleEdit
//   function handleEdit() {

//   }
//   // handleDelete, so this one sould be pretty straightforward because I arleady did this...
//   function handleDelete(idx) {
//     const filteredNotes = notes.filter((note, index) => (
//         index !== idx
//     ))
//     setNotes(filteredNotes)
//     // Okay, got it first try...
//   }
//   // handleCancel
//   function handleCancel() {

//   }

//   return (
//     <div>
//       <input
//         value={note}
//         onChange={(e) => handleNoteChange(e.target.value)}
//         placeholder="Write a note..."
//       />
//       <button onClick={handleSave}>
//         {editingIndex !== null ? "Update" : "Add"}
//       </button>
//       {editingIndex !== null && (
//         <button onClick={handleCancel}>Cancel</button>
//       )}

//       <ul>
//         {notes.map((n, idx) => (
//           <li key={idx}>
//             {n}
//             <button onClick={() => handleEdit(idx)}>Edit</button>
//             <button onClick={() => handleDelete(idx)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Alright, so I'm kinda confused because there's a whole new different functions than the one I created, sooo, im js gonna make everything owrk regardless

// DAY 52: CONTINUATION (3RD DAY BEING STUCK XD)

import { useState } from "react";

export default function UpdatingItems3() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // 1. This runs when you type in the input
  function handleNoteChange(newValue) {
    // TODO: only update the "note" state
    setNote(newValue);
    // I did setNote instead of setNotes because you mentioned note and it's associated with setNote
  }

  // 2. This runs when you click Add / Update
  function handleSave() {
    if (editingIndex !== null) {
      // TODO: update the existing note using map
      const updatedNote = notes.map((note, index) => {
        // On this part, I should get the idx of the note from the notes and match it with? the index inside the map? This got me confused but let me try
        if (index === editingIndex) {
          // setNotes(...notes, item);
          // setNotes(item);
          console.log("Working")
        }
        return note
      });
      // OHHH, I FORGOT THIS:
      // setNotes(updatedNote)
      setNotes([...notes, updatedNote])
      // TODO: exit edit mode (setEditingIndex(null))
      setEditingIndex(null);
    } else {
      // TODO: add a new note using spread operator
      setNotes([...notes, note]);
    }
    // TODO: clear the input
    setNote("");
  }

  // 3. This runs when you click Edit on a note
  function handleEdit(idx) {
    // TODO: set editingIndex to idx
    setEditingIndex(idx);
    // TODO: set note to notes[idx] (load the text into input)
    // Okay, this is where Im reallyl really lost... let me try
    setNote(notes[idx]);
  }

  // 4. This runs when you click Cancel
  function handleCancel() {
    // TODO: exit edit mode
    setEditingIndex(null);
    // TODO: clear the input
    setNote("");
  }

  // 5. Delete (already done, keep it)
  function handleDelete(idx) {
    const filteredNotes = notes.filter((_, index) => index !== idx);
    setNotes(filteredNotes);
    // Also exit edit mode if you delete the note you were editing
    if (editingIndex === idx) {
      setEditingIndex(null);
      setNote("");
    }
  }

  return (
    <div>
      <input
        value={note}
        onChange={(e) => handleNoteChange(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={handleSave}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>
      {editingIndex !== null && <button onClick={handleCancel}>Cancel</button>}

      <ul>
        {notes.map((n, idx) => (
          <li key={idx}>
            {n}
            <button onClick={() => handleEdit(idx)}>Edit</button>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// WOAH, I JUST CHECKED IT IF IT WORKED AND IT DID, I DO NOT KNOW HOW, I LITERALLY JUST FOLLOWED WHAT YOU ASKED ME TO DO. NOW I NEED YOU TO EXPLAINNNNNNN WHAT THOSE TASKS ARE SUPPOSED TO DO, LIKE WHY DID U WANT ME TO DO THIS AND THAT AND HOW DID IT WORKKKKKKKKKKKKKK, LIKEEE THE INPUT INSIDE THE WRITE A NOTE CHANGEDDD, HOW????????
// AND ALSO, ALL OF A SUDDEN, I CAN ADD TASKS NOWWW, THE LAST PROMPT I GAVE U WAS BUGGED AND IT DIDNT ADD ANYTHING
// SOO ALSO, ASNWER MY LSADT CLARIFIFATION (DONT SKIP ANY MORE QUESTIONS FROM ME BRO) I SHOULD USE THE CURLY BRACES ON THIS MAP FUNCTION:
// notes.map((note, index) => {});

// IF IM USING TASKS LIKE CONDITIONS, OR RETURN, OR WHATEVER RIGHT? NOT DIRECT STRAIGHTFORWARD COMMAND? UNLIKE THIS ONE:

// notes.map((note, index) => index !== idx);

// SOMETHING LIKE THAT, I SHOULD USE THE PARENTHESES, CORRECT? IS THAT IT?

// I ALSO HAVE A LOT OF QUESTIONS BECAUSE YOU LITERALLY SPOONFED ME THE CODE, WHICH I CANT COMPLAIN BECAUSE IT HELPED ME UNDERSTAND A BIT MORE AND IT KINDA OWRKED...

// WHAT ARE THES ELINESSSS:
// const filteredNotes = notes.filter((_, index) => index !== idx);

// if (editingIndex === idx) {
//   setEditingIndex(null);
//   setNote("");
// }

//     <div>
//       <input
//         value={note}
//         onChange={(e) => handleNoteChange(e.target.value)}
//         placeholder="Write a note..."
//       />
//       <button onClick={handleSave}>
//         {editingIndex !== null ? "Update" : "Add"}
//       </button>
//       {editingIndex !== null && <button onClick={handleCancel}>Cancel</button>}

//       <ul>
//         {notes.map((n, idx) => (
//           <li key={idx}>
//             {n}
//             <button onClick={() => handleEdit(idx)}>Edit</button>
//             <button onClick={() => handleDelete(idx)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>

//     EXPLAIN AND ELABORATE EACH LINE I HIGHLIGHTED SO THAT I UNDERSTAND A BIT MORE.... XDDD MAKE SURE THAT ITS UNDERSTANDABLEEEE FOR MEE

// RN UPDATE IS STILL NOT WORKING BUTT, I GOT SOME PROGRESS (IM LITERALLY JUST GASLIGHTING MYSELF, I KNOW YOU DID MOST OF THE WORK XDD, ILL BE FINE WITH THIS THIS TIME BECAUSE I GOT REALLLY REALLY STUCK, BUT JUST MINIMALIZE SSPOONFEEDING MY A WHOLE BLOCK OF CODE, A FEW LINES IS ENOUGH XDD)

// SO THIS BLOCK HAS A PROBLEM:

    // if (editingIndex !== null) {
    //   // TODO: update the existing note using map
    //   const updatedNote = note.map((item, index) => {
    //     // On this part, I should get the idx of the note from the notes and match it with? the index inside the map? This got me confused but let me try
    //     if (index === editingIndex) {
    //       // setNotes(...notes, item);
    //       setNotes(item);
    //     }
    //   });

// LET ME TRY TO FIGURE IT OUT....

// SO THE STATE IS WORKING BECAUSE I LOOKED IT UP ON THE COMPONENTS REACT DEV TOOLS
// THE PROBLEM IS THATTT ITS SAYING NOTE.MAP ISNT A FUNCTION
//. THJAT MEANS THERES A PROBLEM WITH EITHERRR

      // const updatedNote = note.map((item, index) => {
      //   // On this part, I should get the idx of the note from the notes and match it with? the index inside the map? This got me confused but let me try
      //   if (index === editingIndex) {
      //     // setNotes(...notes, item);
      //     // setNotes(item);
      //     console.log("Working")
      //   }
      //   item
      // });
      // // OHHH, I FORGOT THIS:
      // setNotes(updatedNote)

// THE item, or the setNotes(updatedNote)
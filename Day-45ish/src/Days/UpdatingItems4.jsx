// So for this one, I wanna do it my way. I wanna show the UI what's being typed similar to my first draft

// import { useState } from "react";

// export default function UpdatingItems4() {
//   const [userNote, setUserNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   function handleAddNote(newNote) {
//     // setNotes([...notes, newNote])
//     // setNotes("") Damn, why isn't this workinggg XD
//     // console.log("Working...") whattt, its workingg thoughhhh
//     // console.log(newNote) Ohh, I kinda see it now, theres a problem with saving it onto the state...
//     // So, theres a problem within this line: <button onClick={(e) => handleAddNote(e)}>Add</button>, and idk why though XDD
//     // console.log(newNote)
//     // Oh, there we goooo, I just changed it to {() => handleAddNote(userNote)} because there's no reason for me to get the value since its already being saved into the statee, okayyyy... so this should work now:
//     setNotes([...notes, newNote]);
//     // setNotes("");
//     // Oh it isnt wrking yet because I didnt add the map function inside the ul lol
//     // Bruh, Ijust added the needed code but its saying notes.map isnt a function, why am I having that error when I clearly have this line alreaddy: setNotes([...notes, newNote]);
//     // Oh fuck, I accidnetally typed setNotes("") instead of setNote("") LOL, it was actually the autocorrect wtf
//     setUserNote("")
//   }
//   // Fuhh, I really get stuck on this bug where it doesn't allow me to type anythingggggg

//   return (
//     <>
//       <br />
//       <h1>Todo List (Raw & Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={userNote}
//           onChange={(e) => setUserNote(e.target.value)}
//         />
//         <button onClick={() => handleAddNote(userNote)}>Add</button>
//       </div>
//       <p>You're typing: {userNote}</p>
//       <br />
//       <ul>
//         {notes.map((n, index) => (
//           <li key={index}>
//             {n}&thinsp;
//             <button>Edit</button>
//             <button>Delete</button>
//           </li>
//         ))}
//         {/* Okay, I got a bit stuck on this part because I used curly braces, the fuckk, I thought this was considered a lng expression, whatever, I think its one expression but with multiple lines lmao */}
//       </ul>
//     </>
//   );
// }

// Alright, add, onChange, and render works properly, time to move to edit, delete, and other hard stuff XD

// import { useState } from "react";

// export default function UpdatingItems4() {
//   const [userNote, setUserNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   function handleAddNote(newNote) {
//     if (editingIndex !== null) {
//       // So, I'll do this last because this kinda is confusing XD
//     } else {
//       setNotes([...notes, newNote]);
//     }
//     setUserNote("");
//   }

//   //   function handleDeleteNote(idx) {
//   //     const updatedNote = notes.filter((_, index) => (
//   //         index !== idx
//   //     ))
//   //     setNotes(updatedNote)
//   //   }
//   // Okay, this was easy, I just need to wrap it all and make sure the users not on the editingIndex mode:

//   function handleDeleteNote(idx) {
//     if (editingIndex === null) {
//       const updatedNote = notes.filter((_, index) => index !== idx);
//       setNotes(updatedNote);
//     } else {
//       const updatedNote = notes.filter((_, index) => index !== idx);
//       setNotes(updatedNote);
//       setNote("");
//     }
//   }
//   // Well, I hope that's correct XD

//   function handleSave() {}

//   function handleCancel() {}

//   return (
//     <>
//       <br />
//       <h1>Todo List (Raw & Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={userNote}
//           onChange={(e) => setUserNote(e.target.value)}
//         />
//         <button onClick={() => handleAddNote(userNote)}>Add</button>
//       </div>
//       <p>You're typing: {userNote}</p>
//       <br />
//       <ul>
//         {notes.map((n, index) => (
//           <li key={index}>
//             {n}&thinsp;
//             <button>Edit</button>
//             <button onClick={(e) => handleDeleteNote(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Snapshot. Okay final boss..

// import { useState } from "react";

// export default function UpdatingItems4() {
//   const [userNote, setUserNote] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   function handleAddNote(newNote) {
//     if (editingIndex !== null) {
//     } else {
//       setNotes([...notes, newNote]);
//     }
//     setUserNote("");
//   }

//   function handleDeleteNote(idx) {
//     if (editingIndex === null) {
//       const updatedNote = notes.filter((_, index) => index !== idx);
//       setNotes(updatedNote);
//     } else {
//       const updatedNote = notes.filter((_, index) => index !== idx);
//       setNotes(updatedNote);
//       setUserNote("");
//     }
//     setEditingIndex(null);
//   }

//   function handleEditNote(idx) {
//     setEditingIndex(idx);
//     // So, after changing the state from null to idx, I should add the note value to the associated notes index
//     // Here's what comes into my mind:
//     // setNote(notes[idx])
//     // But it's not workingeven though it's what makes sense the most to me, and the reason why its not working is because, of course, I have to use setUserNote instead of setNote XDDDDDDDDDDDD
//     setUserNote(notes[idx]);
//     // Alrighttt, there we go, buttt why isnt the buttonss updating??? As I can see, the state's updated, but I think there's something wrong with using ternary operator on the return??????????????? or what?
//     // OHHHH, I SEE, THE 0 index is considered as true since im using !editingIndex, thats interesting, soo let me try another approach on the ternary operator condition xd
//     // Okay, there we go, I just used editingIndex === null instead :DDDDDDDDDDDDD time to work on the last two functions IGGG abnd then the last editing function on the handleAddNote
//   }

//   function handleEditSave() {
//     // console.log(editingIndex)
//     // Alright its working so this shld wrk
//     // if(editingIndex){
//     //     // setNotes()
//     //     // Okay my brain freezed here, how should I replace it without fucking up the rest of the notes xd
//     //     // setNotes([...notes, userNote])
//     //     // I hope this is it setNotes([editingIndex]) and then it should change the notes to userNote
//     //     // setNotes(userNote) FAAHHH IM SOO OCOOOKEEDDDDDD MY BRAIN NOT WORKING ANYMORE, ITS NOT ACTUALLY SUPPOSED TO BE INSIDE ACONDITIONNNN BUTT IM JUST DOING THIS TO IDKKK WHATEVER
//     // }
//     // setNotes([userNote])
//     // Okay, i am getting progress but its replacing every note, I forgot what you told me to update it instead of replacing ittt fujhhhh
//     // setNotes([...notes, userNote]) Shouldnt work either becauseeee im adding it instead of replacing/updating its associated index, but how would I do thattttt whats the syntax omg. I mean I cant justttt fuckinggg:
//     // setNotes([editingIndex]).value = userNote ... XDDDD

//     setEditingIndex(null);
//     setUserNote("");
//   }

//   function handleEditCancel() {
//     setEditingIndex(null);
//     setUserNote("");
//   }

//   return (
//     <>
//       <br />
//       <h1>Todo List (Raw & Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={userNote}
//           onChange={(e) => setUserNote(e.target.value)}
//         />
//         {/* So, you changed the add button to a save and cancel button so i should put a condition heree */}
//         {/* { editingIndex ?? "<button onClick={() => handleAddNote(userNote)}>Add</button>" : "<button>Save</button>&thinsp;<button>Cancel</button>" }
//         Well, that doesn't look right XDDDD */}
//         {/* { editingIndex(null) ? "<button onClick={() => handleAddNote(userNote)}>Add</button>" : "<button>Save</button>&thinsp;<button>Cancel</button>" }
//         // This, doesnt look right neither, let me check the right format XD */}
//         {editingIndex === null ? (
//           <button onClick={() => handleAddNote(userNote)}>Add</button>
//         ) : (
//           <>
//             <button onClick={handleEditSave}>Save</button>
//             <button onClick={handleEditCancel}>Cancel</button>
//           </>
//         )}
//         {/* Okay, there we go, we js needed to replace the "" to () and use <></> */}
//       </div>
//       <br />
//       <p>You're typing: {userNote}</p>
//       <br />
//       <ul>
//         {notes.map((n, index) => (
//           <li key={index}>
//             {n}&thinsp;
//             <button onClick={(e) => handleEditNote(index)}>Edit</button>
//             <button onClick={(e) => handleDeleteNote(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Snapshot. I am stuck in save and just fixed the deletee function XDD

import { useState } from "react";

export default function UpdatingItems4() {
  const [userNote, setUserNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleAddNote(newNote) {
    if (editingIndex !== null) {
    } else {
      setNotes([...notes, newNote]);
    }
    setUserNote("");
  }

  function handleDeleteNote(idx) {
    if (editingIndex === null) {
      const updatedNote = notes.filter((_, index) => index !== idx);
      setNotes(updatedNote);
    } else {
      const updatedNote = notes.filter((_, index) => index !== idx);
      setNotes(updatedNote);
      setUserNote("");
    }
    setEditingIndex(null);
  }

  function handleEditNote(idx) {
    setEditingIndex(idx);
    setUserNote(notes[idx]);
  }

  function handleEditSave() {
    // console.log(userNote[editingIndex])
    // console.log(userNote)
    // console.log(notes[editingIndex])
    // setNotes(notes[editingIndex])
    // Damn, doesn't work, my brains freezing and not working rn XDDD
    // setNotes([...notes, userNote])
    // Yepp, I am cookeddd, I also forgot what I should put inside the handleAddNote fnction xddd
    // Oh wait, should I do a map here, afai can remember, i put a map function on a function xddd let met try
    const updatedNotes = notes.map((item, index) => {
        if(editingIndex === index){
            return userNote // Okay, on this part, I need a few explanations because how can I just do this XD I cannot comprehend how returning userNote just works and updates the specific index, I mean I get the coindition, I just dont get how it updates ittt completely XDDD Anywayssss, it got it fixed soooo XDDD YEYYY IG cus i didnt look up anyyy fucking copy or whatever or asked ai (except for the ternary issue xd)
        }
        return item
    })
    setNotes(updatedNotes)
    setEditingIndex(null);
    setUserNote("");
  }

  function handleEditCancel() {
    setEditingIndex(null);
    setUserNote("");
  }

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
        {editingIndex === null ? (
          <button onClick={() => handleAddNote(userNote)}>Add</button>
        ) : (
          <>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleEditCancel}>Cancel</button>
          </>
        )}
      </div>
      <br />
      <p>You're typing: {userNote}</p>
      <br />
      <ul>
        {notes.map((n, index) => (
          <li key={index}>
            {n}&thinsp;
            <button onClick={(e) => handleEditNote(index)}>Edit</button>
            <button onClick={(e) => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
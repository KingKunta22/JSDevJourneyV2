// Oh okay great, you're kinda guiding me what to do which makes it easier and helps a lot...
// Idk if this is fine though or if I really learn it, but you know more than me so whatever u do

// import { useState } from "react";

// function ArrayState() {
//   const [note, setNote] = useState("");
//   const [notes, setNotes] = useState([]);

//   // function handleAddNote() {
//   //     setNotes(note)
//   // }

//   // Wow, I acc find this hard now, I regret saying I might not learn from this soooo XDDD I got humbled
//   // I am thjinking: if I do setNotes(note) the note willl be added to the setNotes state...

//   function handleAddNote() {
//     setNote(note);
//     setNotes(note);
//     // console.log(note) // Why is this not savinggg, whys the note not being added to the setNote tstatteeeeee
//     // console.log(setNote)
//     // console.log(setNotes)
//     // Okay damn that got me lost alreadyyyyyyyyyyyyyyyy, how do I checkkk if the notes are added to either setNote or setNotesssssssq rqwruniqowrkmq
//     setNote(notes);
//     setNotes(notes);
//   }

//   return (
//     <>
//       <br />
//       <h1>Simple Notes App (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <input type="text" placeholder="Add a note" />
//         {/* OMGGG DO I NEED THIS  value={note} OR NOOOOOOO, I BELIEVE NO BECAUSE WE'RE NOT DOING STATE CHANGESSS OR IDKKKKK THE ONE WHERE IT SHOWS THE NOTES YOU ADDED.... IDKWIQNRTOQKWMRPQ */}
//         <button onClick={handleAddNote}>Add</button>
//       </div>
//       <br />
//       <br />
//       <div>
//         <h2>Notes Added</h2>
//         <ul>
//           {notes.map((note, index) => (
//             <li key={index}>{note}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ArrayState;

// Okay, so kind of enlightened now, anddd the reason why i iddnt even try the onChange is because I thought we only need that to show something on UI but it is also used to save state... and the value thing doesn;t work perfectly either because the input wont work when u type something, so two must go together? Anyways, let me try agaain

import { useState } from "react";

function ArrayState() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);


  function handleAddNote() {
    setNotes(note)
  }

  return (
    <>
      <br />
      <h1>Simple Notes App (Vibe-Code Free)</h1>
      <br />
      <div>
        <input type="text" placeholder="Add a note" value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <br />
      <h3>{note}</h3>
      {/* Okay so if the {note} is working, does that mean it's now being added to the setNote state?? */}
      <br />
      <div>
        <h2>Notes Added</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ArrayState;

// ALSO PLEASEEEEEEEEEEE DO NO TUFCKING IGNORE ALL MY QUESTIONS, I LITERALLY WAS ASKING YOU HOW TO CHECK IF THE FUCKING STATE IS GETTING UPDATED ON EITHER setNotes() or setNote() and you didnt answer shit. YOURE FUCKING CRAZYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY YOURE FUCKING IRRITATING ME LOWKEY. OBVIOUSLY IM LOST AND YOU DECIDE TIO FUCKING FORCE SPOONFEED ME WITH YOUR FDUUCKING SHITS THAT ISNT EVEN ENOUGH TO CLARIFY EVERYTHINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG

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

  //   function handleDeleteNote(idx) {
  //     notes.filter((note, index) => {
  //     //   console.log(idx);
  //     //   console.log(index);
  //     //   if(index !== idx) {

  //     //   }
  //     return index !== idx
  //     });
  //     console.log("Hello");
  //   }
  // I am just s o lostttt

  function handleDeleteNote(idx) {
    // notes.filter((note, index) => {index !== idx; console.log('Hello')})
    // Wait, shouldn't it return only 2 Hellos? Whys it returning 3 hellos when I click x
    // notes.filter((note, index) => {
    //     if(index !== idx) {
    //         console.log('Hello, my index is ' + index)
    //         console.log('Hello, my idx is ' + idx)
    //     }
    // })
    // Wait, idk now if this is working or not....
    // notes.filter((note, index) => {
    //   if (index !== idx) {
    //     return(
    //         notes.map((note, index) => {
    //             <li key={index}>{note}</li>
    //         })
    //     )
    //   }
    // });
    // Doesn't workkkkk

    // notes.filter((note, index) => {
    //   if (index !== idx) {
    //     return <li key={index}>{note}</li>;
    //   }
    // }); Doesnt work either........................

    notes.filter((note, index) => {
      if (index !== idx) {
        console.log("I am not clicked")
      } else {
        console.log("I am clicked")
      }
    });

    // I mean, I am really really close, I just know it because it's workinggg, it's just how do I remap the entire note inside the conditioonnnnnnn
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
              {/* On this part, I am kinda confused, when do I use (e) =>, when do I use just handleDeleteNote()
              or should I just use handleDeleteNote or should I use handleDeleteNote(note) or what the fuck do I put here, I am completely confused and just expireminting whatever works, in this case, I tried the (e) => handleDeleteNote(index) hoping it'll work without even understanding what the outcome should be and I am not even close to understanding it still. */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DeletingItems;

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

    // notes.filter((note, index) => {
    //   if (index !== idx) {
    //     console.log("I am not clicked")
    //   } else {
    //     console.log("I am clicked")
    //   }
    // });

    // I mean, I am really really close, I just know it because it's workinggg, it's just how do I remap the entire note inside the conditioonnnnnnn

    // notes.filter((note, index) => {
    //   if (index !== idx) {
    //     return <li>{note}</li>;
    //   }
    // });

    // I HATE THIS FUCKING 4 BITCH.
    // notes.filter((note, index) => {
    //   return index !== idx;
    // });

    const filteredNotes = notes.filter((note, index) => {
      return index !== idx;
    });
    setNotes(filteredNotes);
  }

  // THERE IS CLEARLY FUCKING WRONG WITH HOW YOU FUCKING EXPLAIN, BECAUSE RIGHT NOW, I AM SOOOOOOOOOO FUCKING SHOCKED WHY YOU GOT ME IN A FUCKING ROLLER COASTER OF UCKING SMALLL FUCKING USELESS EXERCISES THAT DOES NOT EVEN MAKE ANY FUCKING SENSE, WHEN ALL I NEEDED WAS TO STORE ALL THIS SHIT INSIDE A FUCKING NEW ARRAY, THATS JUST FUCKING PLAIN STUPIDITY, IDK WHAT THE FUCK IS WRONG WITH THIS PROMPT BUT THIS ISN'T HOW IT SHOULD GIVE ME QUIZZES OR FUCKING TASKSS, PREVIOUS CHATGPTS DIDNOT EVEN ANNOY ME THIS MUCH, YOURE FUCKING STUPID AND YOU SHOULD BE FUCKING ASHAMED, IF I CAN FUCKING GIVE A REVIEW ID FUCKING RATE YOU -100000/10 FUCKING RETARDED ASS AI, I THOUGHT YOURE FUCKING BETTER THAN THIS YOU FUCKING RETARDK NOWING THAT I ALREADY GAVE U EVERYTHING THAT U NEED TO KNOW ABOUT ME. FUCK YOU FETARDED ASS AI. SIMPLLLEEEE ASSSSSS FCKINGGGG SOLUTIONNNNN AND YOU FUCKINGGG BOMBARDDD MEEEE WITH FUCKINGGGGGGGGG TONSSS OF USELESSSSSS FUCKINGGGGGGG  MINI TASKSSSSSSSSSSSS SHAME ON FUICKONG YOU 

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
              {note} <button onClick={() => handleDeleteNote(index)}>X</button>
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

// Answer from ur Q: A because I don't think filter returns a new array. Oh actually, it should be B, I believe it returns a new array that passes the condition...

// First iteration: True
// Seconjd iteration: False
// Third Iteration: True

// SO it should return: ["Milk", "Bread"]

// Bro, you fucking lack explanation, FUCK DO YOU MEAN BY: this <>, bad, this <> good, redner its ..., good.
// Are you fucking stupid?? How would I understand it bitchass, why is it bad, why is it good, fucking retarded ass answers, also, youre fucking bombarding me with these tiny ass exercises, instaed of just fucking explaining everything, youre fucking slowing everything down bitch, youre fucking pissing me off. Fucking retarded ass explanations. Crazy, cus you already fucking explained it and I cant get it on my fuckind mind, when do we need clallback fucking functions, when do we not do that, when do we just call the function without the parenthesis, when do we call it with parentheses, youre just not explaining everything properly, youre explaining like youre a fucking useless professor that only does his job for money, not for the pasion of learning fucking retarded ass prompts, im definitely moving on to a nother ai agent

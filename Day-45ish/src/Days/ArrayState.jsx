// Oh okay great, you're kinda guiding me what to do which makes it easier and helps a lot...
// Idk if this is fine though or if I really learn it, but you know more than me so whatever u do

import { useState } from "react";

function ArrayState() {

    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])

  return (
    <>
    <br />
      <h1>Simple Notes App (Vibe-Code Free)</h1>
      <br />
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <br />
      <br />
      <div>
        <h2>Notes Added</h2>
        <ul></ul>
      </div>
    </>
  );
}

export default ArrayState;

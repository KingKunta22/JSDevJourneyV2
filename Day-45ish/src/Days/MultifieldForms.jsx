// // I am not copying your template babyyyyyy, im doing everything raw
// import { useState } from "react";

// export default function MultifieldForms() {
//   const [contact, setContact] = useState({ name: "", email: "", phone: "" });
//   // So that's the input field state, I should be adding a state to save all contacts added
//   const [savedContacts, setSavedContacts] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   function handleAddContact() {
//     setSavedContacts([...savedContacts, contact]);
//     // setContact(""); // This doesn't workk....
//     // setContact({}); // Doesnt work either...
//     setContact({ name: "", email: "", phone: "" }); // There we go XD
//   }

//   function handleEditContact(idx) {

//   }

//   function handleDeleteContact(idx) {
//     const filteredContacts = savedContacts.filter((c, i) => idx !== i)
//     setSavedContacts(filteredContacts)
//     // I got a feeling that this wont work because Im dealing with objects now xddd....
//     // Oh nvm, it worked like usual xdddd
//   }

//   return (
//     <>
//       <br />
//       <h1>Contact Manager (Vibe-Code Free)</h1>
//       <br />
//       <div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter name"
//             required
//             value={contact.name}
//             onChange={(e) => setContact({ ...contact, name: e.target.value })}
//           />
//           &thinsp;
//           <input
//             type="email"
//             placeholder="Enter email"
//             required
//             value={contact.email}
//             onChange={(e) => setContact({ ...contact, email: e.target.value })}
//           />
//           &thinsp;
//           <input
//             type="number"
//             placeholder="Enter phone number"
//             required
//             value={contact.phone}
//             onChange={(e) => setContact({ ...contact, phone: e.target.value })}
//           />
//         </div>
//         <br />
//         <button onClick={handleAddContact}>Add Contact</button>
//       </div>
//       <br />
//       <h3>Adding: </h3>
//       <p>Name: {contact.name}</p>
//       <p>Email: {contact.email}</p>
//       <p>Phone: {contact.phone}</p>
//       <br />
//       <div>
//         <h2>List of Contacts Added: </h2>
//         {/* <ul>
//           {savedContacts.map((c, i) => (
//             <li key={i}>
//               <span><strong>Name:</strong> {c.name}</span>&thinsp;&thinsp;
//               <span><strong>Email:</strong> {c.email}</span>&thinsp;&thinsp;
//               <span><strong>Phone Number:</strong> {c.phone}</span>&thinsp;&thinsp;
//             </li>
//           ))}
//         </ul>
//         // That looks ugly af */}
//         <ol>
//           {savedContacts.map((c, i) => (
//             <li key={i}>
//               <div>
//                 <span>
//                   <strong>Name:</strong> {c.name}
//                 </span>
//                 &thinsp;&thinsp;
//                 <span>
//                   <strong>Email:</strong> {c.email}
//                 </span>
//                 &thinsp;&thinsp;
//                 <span>
//                   <strong>Phone Number:</strong> {c.phone}
//                 </span>
//                 &thinsp;&thinsp;
//                 <button onClick={() => handleEditContact(i)}>Edit</button>
//                 <button onClick={() => handleDeleteContact(i)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// Alright time to deal with the edittttttt........

import { useState } from "react";

export default function MultifieldForms() {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [savedContacts, setSavedContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleAddContact() {
    setSavedContacts([...savedContacts, contact]);
    setContact({ name: "", email: "", phone: "" }); // There we go XD
  }

//   function handleEditContact(idx) {
//     setEditingIndex(idx)
//     // setContact({name: savedContacts.name, email: savedContacts.email, phone: savedContacts.phone})
//     // I mean this kinda makes sense but how will it know which indexxxx inside the savedContacts to get?
//     // So I think isntead of doing that, I should map the savedContacts insteadd to have more control over everything thats inside the savedContacts
//     const newContacts = savedContacts.map((c, i) => {
//         if(i === idx) {
//             // return contact? IDK I am just geuessing what to put here ngl
//             // Okay I am pretty lostt hereeee, what syntax do I do to get the name email and phone and return it?
//             // console.log("Hello") So I mean its working here....
//         }
//         return c
//     })
//     // contact(newContacts) I also feel like this is whats contributing to why its not working, I should be more specific here
//     setContact({name: newContacts.name, email: newContacts.email, phone: newContacts.phone})
// } FUHHM, LET ME TRY A DIFF APPROACHA

  function handleEditContact(idx) {
    setEditingIndex(idx)
    const newContacts = savedContacts.map((c, i) => {
        if(i === idx) {
            // console.log("This is correct:" + c)
            // Alright its getting it but its saying object Object, that means I need to go deeper
            // return {c.name, c.email, c.phone} // Bruh why isn't it working this way...
            // return {...c, c:name, c:email, c:phone} // Bruh idk what im doing xdddd
            return c
            // Bruh installHook.js:1 A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info:
        }
        // return c // I dont think I need this
    })
    // setContact({name: newContacts.name, email: newContacts.email, phone: newContacts.phone})
    console.log(newContacts)// Let me try this out
    // console.log(newContacts.name) // Okay, this isn't working i wonder why....
    // So why is the map gettin all the items inside the saveContacts and then saying the other ones are undefined wtff
    console.log(newContacts[idx].name) // Okay, there we go, I hope im doing it right

}

  function handleEditSave() {}

  function handleEditCancel() {}

  function handleDeleteContact(idx) {
    const filteredContacts = savedContacts.filter((c, i) => idx !== i);
    setSavedContacts(filteredContacts);
  }

  return (
    <>
      <br />
      <h1>Contact Manager (Vibe-Code Free)</h1>
      <br />
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            required
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          &thinsp;
          <input
            type="email"
            placeholder="Enter email"
            required
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          &thinsp;
          <input
            type="number"
            placeholder="Enter phone number"
            required
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
        <br />
        {editingIndex === null ? (
          <button onClick={handleAddContact}>Add Contact</button>
        ) : (
          <>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleEditCancel}>Cancel</button>
          </>
        )}
      </div>
      <br />
      <h3>Adding: </h3>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <br />
      <div>
        <h2>List of Contacts Added: </h2>
        <ol>
          {savedContacts.map((c, i) => (
            <li key={i}>
              <div>
                <span>
                  <strong>Name:</strong> {c.name}
                </span>
                &thinsp;&thinsp;
                <span>
                  <strong>Email:</strong> {c.email}
                </span>
                &thinsp;&thinsp;
                <span>
                  <strong>Phone Number:</strong> {c.phone}
                </span>
                &thinsp;&thinsp;
                <button onClick={() => handleEditContact(i)}>Edit</button>
                <button onClick={() => handleDeleteContact(i)}>Delete</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

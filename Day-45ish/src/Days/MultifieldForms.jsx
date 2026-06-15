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

  function handleEditContact(idx) {
    setEditingIndex(idx)
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

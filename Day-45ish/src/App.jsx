// import Refresher from "./Refresher.jsx";
// import Counter from "./Counter.jsx" // Day 45
// import TodoList from "./TodoList.jsx" // Day 46
// import ControlledInputs from "./Days/ControlledInputs.jsx"; // Day 47
// import ControlledInputs2 from "./Days/ControlledInputs2.jsx"; // Day 47-48
// import ArrayState from "./Days/ArrayState.jsx"; // Day 49
// import DeletingItems from "./Days/DeletingItems.jsx" // Day 50
// import UpdatingItems from "./Days/UpdatingItems.jsx" // Day 51
// import UpdatingItems2 from "./Days/UpdatingItems2.jsx" // Day 52
// import UpdatingItems3 from "./Days/UpdatingItems3.jsx" // Day 52 :(
// import UpdatingItems4 from "./Days/UpdatingItems4.jsx" // Day 52 :(
// import MultifieldForms from "./Days/MultifieldForms.jsx" // Day 53 :)))
import ContactForm from "./Days/ContactManager/ContactForm.jsx"; // Day 54
import ContactList from "./Days/ContactManager/ContactList.jsx"; // Day 54
import { useState } from "react";

function App() {
  const [contact, setContact] = useState("");
  const [contactList, setContactList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // What is this for????????????
  function handleOnChange() {}

  // Handler Functions
  function handleSave() {
    if (editingIndex !== null) {
      // Edit Save Function
      setEditingIndex(null);
    } else {
      // Add Function
      setContactList([...contactList, contact]);
    }
    setContact({ name: " ", email: "", phone: "" });
  }

  function handleDelete(idx) {}

  function handleEdit() {}

  function handleCancel() {}

  // return <ContactForm />;
  // return <ContactList />;
  return (
    <>
      I'm literally just copying what you said on the lecture, I have zero idea
      what I am doing, I might need to go lecture deep n this one because I'm
      kinda lost
      <ContactForm
        contact={contact}
        editingIndex={editingIndex}
        onChange={handleChange}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <ContactList
        contactList={contactList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;

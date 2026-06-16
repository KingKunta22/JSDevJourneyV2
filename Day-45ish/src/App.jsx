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
  const [contactList, setContactList] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  // Handler Functions
  function handleSave() {
    if(editingIndex !== null) {
      setContactList([...contactList, contact])
      setContact("")
      setEditingIndex(null)
    } else {
      // Edit Save Function
    }
  }

  function handleDelete(idx){

  }

  function handleEditCancel(){
    
  }



  // return <ContactForm />;
  // return <ContactList />;
  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
}

export default App;
